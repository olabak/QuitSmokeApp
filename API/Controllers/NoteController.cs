using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Managers;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class NoteController: BaseApiController
    {
         private readonly DataContext _context;
         
         public NoteController(DataContext context)
        {
            _context = context;
        }

        private NoteManager _noteManager;

        public NoteManager NoteManager => _noteManager ??= new NoteManager(_context);

        [HttpPut, Route("update")]
        public async Task<ActionResult> UpdateUserSettingAsync([FromBody] NoteDto model)
        {
            //ValidateStrings(model.Id);

            return Ok(await NoteManager.UpdateAsync(model));
        }

         [HttpGet, Route("listByUserId")]
        public async Task<ActionResult> ListByUserIdAsync(int userId)
        {
            //ValidateStrings(companyId);
            return Ok(await NoteManager.ListByUserIdAsync(userId));
        }
        
        [HttpPost, Route("add")]
        public async Task<ActionResult> AddNote([FromBody] NoteDto model){
            return Ok(await NoteManager.AddAsync(model));
        }
        
    }
}