using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;

namespace API.Entities
{
    public class History
    {
        public int Id { get; set; }

        public virtual AppUser? User { get; set; }

        public int UserId { get; set; }
        public DateTime AddDate {get; set;} = DateTime.Now;
        public string Couse { get; set; }

        public int Days { get; set; }
        public bool IsFirst { get; set; }

        public History(){}

        public History(HistoryDto dto)
        {
            Id = dto.Id;
            UserId = dto.UserId;
            AddDate = DateTime.Parse(dto.AddDate);
            Couse = dto.Couse;
            IsFirst = dto.IsFirst;
        }

    }
}