using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;

namespace API.Entities
{
    public class UserSetting
    {
        public int Id {get; set;}

        public DateTime LastCigarette { get; set; }
        
        public int NumbersOfCigarettes { get; set; }
        public int YearsOfSmoking { get; set; }
        public int PriceOfPacket { get; set; }

        public string Motivation {get; set;}

        public int QuizScore {get; set;}
        public UserSetting(){}

        
        public UserSetting(UserSettingDto dto)
        {
            Id = dto.Id;
            LastCigarette = dto.LastSmokeDate;
            NumbersOfCigarettes = dto.NumbersOfCigarettes;
            YearsOfSmoking = dto.YearsOfSmoking;
            PriceOfPacket = dto.PriceOfPacket;
        }
    }
}