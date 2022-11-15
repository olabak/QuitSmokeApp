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
            var histories = await _context.Set<History>().Where(history => history.UserId == userId).ToListAsync();
            //Musimy ściągnąć liste
            return histories.Select(history => new HistoryDto(history)).ToList(); //Mapujemy do DTo, żeby bezpośrednio na frnot nie wysyłąć danych
        }

        internal async Task<HistoryDto> AddAsync(HistoryDto dto){
            var entity = new History(dto);
            await _context.AddAsync(entity);
            await _context.SaveChangesAsync();
            return new HistoryDto(entity);
        }
    }
}