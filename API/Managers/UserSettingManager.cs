using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Managers
{
    public class UserSettingManager
    {
        private readonly DataContext _context;
        public UserSettingManager(DataContext context)
        {
            _context = context;
        }
        
        internal async Task<UserSettingDto> UpdateAsync(UserSettingDto dto)
        {
            var entity = new UserSetting(dto);
            var oldEntity = await _context.Set<UserSetting>().FirstOrDefaultAsync(us => us.Id == dto.Id);
            _context.Entry(oldEntity).State = EntityState.Modified;
            _context.Entry(oldEntity).CurrentValues.SetValues(entity);

            await _context.SaveChangesAsync();

            return new UserSettingDto(oldEntity);
        }

        internal async Task<UserSettingDto> UpdateMotivationAsync(UserSettingDto dto)
        {
            
            var oldEntity = await _context.Set<UserSetting>().FirstOrDefaultAsync(us => us.Id == dto.Id);
            oldEntity.Motivation = dto.Motivation;

            await _context.SaveChangesAsync();

            return new UserSettingDto(oldEntity);
        }

        internal async Task<UserSettingDto> UpdateQuizScoreAsync(UserSettingDto dto)
        {
            
            var oldEntity = await _context.Set<UserSetting>().FirstOrDefaultAsync(us => us.Id == dto.Id);
            oldEntity.QuizScore = dto.QuizScore;

            await _context.SaveChangesAsync();

            return new UserSettingDto(oldEntity);
        }

        internal async Task<UserSettingDto> GetUserSettingAsync(int userId)
        {
            var user = await _context.Set<AppUser>().FirstOrDefaultAsync(user => user.Id == userId);
            var userSetting = await _context.Set<UserSetting>().FirstOrDefaultAsync(us => us.Id == user.SettingId);
            return new UserSettingDto(userSetting);
        }
    }
}