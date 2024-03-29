using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Managers
{
    public class HistoryManager
    {
        private readonly DataContext _context;
        
        public HistoryManager(DataContext context)
        {
            _context = context;
        }

        internal async Task<List<HistoryDto>> ListByUserIdAsync(int userId)
        {
            var history = await _context.Set<History>().Where(history => history.UserId == userId).ToListAsync();
            return history.Select(history => new HistoryDto(history)).ToList(); 
        }

        internal async Task<HistoryDto> LastHistoryByUserIdAsync(int userId){
            var history = await _context.Set<History>().Where(history => history.UserId == userId)
                .OrderByDescending(h => h.AddDate).Select(history => new HistoryDto(history)).ToListAsync();
            return history.FirstOrDefault();
        }

        internal async Task<HistoryDto> AddAsync(HistoryDto dto){
            var entity = new History(dto);
            var lastHistory = _context.Set<History>().Where(history => history.UserId == dto.UserId)
            .OrderByDescending(h => h.AddDate).FirstOrDefault();
            if (lastHistory is null)
                entity.Days = dto.Days;
            if (lastHistory is not null)
                entity.Days = (int)Math.Abs((DateTime.Now - (lastHistory is null ? DateTime.Now: lastHistory.AddDate)).TotalDays);
            await _context.AddAsync(entity);
            await _context.SaveChangesAsync();
            return new HistoryDto(entity);
        }
    }
}