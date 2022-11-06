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

        // internal async Task<NoteDto> UpdateAsync(NoteDto dto)
        // {
        //     var entity = new Note(dto);
        //     var oldEntity = await _context.Set<Note>().FirstOrDefaultAsync(note => note.Id == note.Id);
        //     _context.Entry(oldEntity).State = EntityState.Modified;
        //     _context.Entry(oldEntity).CurrentValues.SetValues(entity);

        //     await _context.SaveChangesAsync();

        //     return new NoteDto(oldEntity);
        // }

        // internal async Task<NoteDto> GetUserNotesAsync(int userId)
        // {
        //     var user = await _context.Set<AppUser>().FirstOrDefaultAsync(user => user.Id == userId);
        //     //Chyba nie potrzebne?
        //     var note = await _context.Set<Note>().ToListAsync<>()
        //     //Musimy ściągnąć liste
        //     return new NoteDto(note);
        // }
    }
}