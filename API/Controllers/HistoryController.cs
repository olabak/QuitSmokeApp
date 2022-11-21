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
    public class HistoryController: BaseApiController
    {
        private readonly DataContext _context;

        public HistoryManager HistoryManager => _historyManager ??= new HistoryManager(_context);
         
         public HistoryController(DataContext context)
        {
            _context = context;
        }

        private HistoryManager _historyManager;
        

         [HttpGet, Route("listByUserId")]
        public async Task<ActionResult> ListByUserIdAsync(int userId)
        {
            //ValidateStrings(companyId);
            return Ok(await HistoryManager.ListByUserIdAsync(userId));
        }
        
        [HttpPost, Route("add")]
        public async Task<ActionResult> AddHistory([FromBody] HistoryDto model){
            return Ok(await HistoryManager.AddAsync(model));
        }
    }
}