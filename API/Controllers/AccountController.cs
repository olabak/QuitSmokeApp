using System;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using API.Managers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
     public class AccountController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly ITokenService _tokenService;

        private HistoryManager _historyManager;
        public HistoryManager HistoryManager => _historyManager ??= new HistoryManager(_context);
        public AccountController(DataContext context, ITokenService tokenService)
        {
            _tokenService = tokenService;
            _context = context;
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            if (await UserExists(registerDto.Username)) return BadRequest("Username is taken");

            using var hmac = new HMACSHA512();

            var maxUserSetting = await _context.Set<UserSetting>().MaxAsync(us => us.Id);

            var defaultUserSetting = new UserSetting
            {
                Id = ++maxUserSetting,
                LastCigarette = System.DateTime.Today,
                NumbersOfCigarettes = 5,
                PriceOfPacket = 10,
                YearsOfSmoking = 5
            };

            var user = new AppUser
            {
                UserName = registerDto.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key,
                SettingId = defaultUserSetting.Id
            };

            
            _context.Add(defaultUserSetting);
            _context.Add(user);
            await _context.SaveChangesAsync();
            var entity = await _context.Set<AppUser>().FirstOrDefaultAsync(u=>u.UserName == user.UserName);
            var lastSmoke = (int)Math.Abs((DateTime.Now - (registerDto.LastSmoke is null ? DateTime.Now : (DateTime)registerDto.LastSmoke)).TotalDays);
            var historyDto = new HistoryDto(){UserId = entity.Id,  Couse = "Rozpoczęcie", Days=lastSmoke, IsFirst=true};
            var hm = new HistoryManager(_context);
            await hm.AddAsync(historyDto);

            await _context.SaveChangesAsync();

            return new UserDto
            {
                Id = user.Id,
                Username = user.UserName,
                Token = _tokenService.CreateToken(user)
            };
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _context.Users
                .SingleOrDefaultAsync(x => x.UserName == loginDto.Username);

            if (user == null) return Unauthorized("Invalid username");

            using var hmac = new HMACSHA512(user.PasswordSalt);

            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid password");
            }

            return new UserDto
            {
                Id = user.Id,
                Username = user.UserName,
                Token = _tokenService.CreateToken(user)
            };
        }

        private async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(x => x.UserName == username.ToLower());
        }
    }
}