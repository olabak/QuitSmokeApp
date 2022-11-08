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
    public class NoteManager
    {
        private readonly DataContext _context;
        
        public NoteManager(DataContext context)
        {
            _context = context;
        }

        internal async Task<NoteDto> UpdateAsync(NoteDto dto)
        {
            var entity = new Note(dto);
            var oldEntity = await _context.Set<Note>().FirstOrDefaultAsync(note => note.Id == note.Id);
            _context.Entry(oldEntity).State = EntityState.Modified;
            _context.Entry(oldEntity).CurrentValues.SetValues(entity);

            await _context.SaveChangesAsync();

            return new NoteDto(oldEntity);
        }

        internal async Task<List<NoteDto>> ListByUserIdAsync(int userId)
        {
            var notes = await _context.Set<Note>().Where(note => note.UserId == userId).ToListAsync();
            //Musimy ściągnąć liste
            return notes.Select(note => new NoteDto(note)).ToList(); //Mapujemy do DTo, żeby bezpośrednio na frnot nie wysyłąć danych
        }

        internal async Task<NoteDto> AddAsync(NoteDto dto){
            var entity = new Note(dto);
            await _context.AddAsync(entity);
            await _context.SaveChangesAsync();
            return new NoteDto(entity);
        }
    }
}