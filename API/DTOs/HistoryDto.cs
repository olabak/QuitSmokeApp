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
        public string AddDate {get; set;} = DateTime.Now.ToString();
        public string Couse { get; set; }

        public int Days { get; set; }

        public bool IsFirst { get; set; }
        public HistoryDto()
        {}

        public HistoryDto(History entity)
        {
            Id = entity.Id;
            UserId = entity.UserId;
            AddDate = entity.AddDate.ToString("yyyy-MM-dd");
            Couse = entity.Couse;
            Days = entity.Days;
            IsFirst = entity.IsFirst;
        }

        
    }
}