using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Interfaces;
using API.Managers;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UserSettingController : BaseApiController
    {
    
        private readonly DataContext _context;
        private readonly ITokenService _tokenService;
        public UserSettingController(DataContext context, ITokenService tokenService)
        {
            _tokenService = tokenService;
            _context = context;
        }

        private UserSettingManager _userSettingManager;
        public UserSettingManager UserSettingManager => _userSettingManager ??= new UserSettingManager(_context);

        [HttpPut, Route("update")]
        public async Task<ActionResult> UpdateUserSettingAsync([FromBody] UserSettingDto model)
        {
            return Ok(await UserSettingManager.UpdateAsync(model));
        }

        [HttpPut, Route("updatemotivation")]
        public async Task<ActionResult> UpdateMotivationAsync([FromBody] UserSettingDto model)
        {
            return Ok(await UserSettingManager.UpdateMotivationAsync(model));
        }

        [HttpPut, Route("updatequizscore")]
        public async Task<ActionResult> UpdateQuizScoreAsync([FromBody] UserSettingDto model)
        {
            return Ok(await UserSettingManager.UpdateQuizScoreAsync(model));
        }


        [HttpGet, Route("getById")]
        public async Task<ActionResult> GetUserSettingAsync(int userId)
        {
            return Ok(await UserSettingManager.GetUserSettingAsync(userId));
        }
    }
}