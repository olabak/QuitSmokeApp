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
        // [HttpPost, Route("description/add")]
        // public async Task<IHttpActionResult> AddDescriptionAsync([FromBody]DescriptionParameterDto model)
        // {
        //     ValidateDescriptionModel(model);

        //     return Ok(await DescriptionManager.AddDescriptionAsync(model, User.Identity.GetUserId()));
        // }

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
            //ValidateStrings(model.Id);

            return Ok(await UserSettingManager.UpdateAsync(model));
        }

        // [HttpDelete, Route("description/delete")]
        // public async Task<IHttpActionResult> DeleteDescriptionListAsync([FromBody]List<string> descriptionIds)
        // {
        //     ValidateStrings(descriptionIds);

        //     await DescriptionManager.DeleteDescriptionListAsync(descriptionIds, User.Identity.GetUserId());
        //     return Ok();
        // }

        [HttpGet, Route("getById")]
        public async Task<ActionResult> GetUserSettingAsync(int userId)
        {
            //ValidateStrings(companyId);
            return Ok(await UserSettingManager.GetUserSettingAsync(userId));
        }
    }
}