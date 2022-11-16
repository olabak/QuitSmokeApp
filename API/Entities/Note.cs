using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;

namespace API.Entities
{
    public class Note
    {
        
        public int Id {get; set;}

        public int UserId {get; set;}

        public virtual AppUser? User { get; set; }
        public Mood Mood {get; set;} //enum
        public string MoodDescription {get; set;}
        public bool Symptom {get; set;} //enum
        public string SymptomDescription {get; set;}
        public string Description {get; set;}

        public DateTime AddDate {get; set;} = DateTime.Now;

        

        public Note(){}

        public Note(NoteDto dto)
        {
            Id = dto.Id;
            UserId = dto.UserId;
            Mood = Enum.Parse<Mood>(dto.Mood);
            MoodDescription = dto.MoodDescription;
            Symptom = bool.Parse(dto.Symptom);
            SymptomDescription = dto.SymptomDescription;
            Description = dto.Description;
            AddDate = DateTime.Parse(dto.AddDate);
        }

    }

    public enum Mood
    {
        BardzoDobre = 0,
        Dobre = 1,
        Średnie = 2,
        Złe = 3,
        BardzoZle = 4
    }

}