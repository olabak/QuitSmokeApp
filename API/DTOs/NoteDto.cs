using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class NoteDto
    {
       
        public int Id {get; set;}

        public int UserId {get; set;}
        string Mood {get; set;}
        string MoodDescription {get; set;}
        string Symptom {get; set;}
        string SymptomDescription {get; set;}
        string Description {get; set;}

        public NoteDto()
        {
            
        }
        // public NoteDto(Note entity)
        // {
        //     Id = entity.Id;
        //     UserId = entity.UserId;
        //     Mood = entity.Mood;
        //     MoodDescription = entity.MoodDescription;
        //     Symptom = entity.Symptom;
        //     SymptomDescription = entity.SymptomDescription;
        //     Description = entity.Description;

        // }
    }
}