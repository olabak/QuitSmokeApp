using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.DTOs
{
    public class HistoryDto
    {
        public int Id { get; set; }

        public int UserId { get; set; }
        public DateTime AddDate {get; set;} = DateTime.Now;
        public string Couse { get; set; }

        public HistoryDto()
        {}

        public HistoryDto(History entity)
        {
            Id = entity.Id;
            UserId = entity.UserId;
            AddDate = entity.AddDate;
            Couse = entity.Couse;
        }

        
    }
}