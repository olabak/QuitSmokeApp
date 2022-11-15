using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.DTOs
{
    public class UserSettingDto
    {
        public int Id {get; set;}

        public string LastSmokeDate { get; set; }
        
        public int NumbersOfCigarettes { get; set; }
        public int YearsOfSmoking { get; set; }
        public int PriceOfPacket { get; set; } 

        public string Motivation {get; set;}

        public int QuizScore {get; set;}

        public UserSettingDto()
        {
            
        }
        public UserSettingDto(UserSetting entity)
        {
            Id = entity.Id;
            LastSmokeDate = entity.LastCigarette.ToString("yyyy-MM-dd");
            NumbersOfCigarettes = entity.NumbersOfCigarettes;
            YearsOfSmoking = entity.YearsOfSmoking;
            PriceOfPacket = entity.PriceOfPacket;
            QuizScore = entity.QuizScore;
            Motivation = entity.Motivation;
        }
    }
}