using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.DTOs
{
    public class NoteDto
    {
       
        public int Id {get; set;}

        public int UserId {get; set;}
        public /*Mood*/ string Mood {get; set;}
        public string MoodDescription {get; set;}
        public /*bool*/ string Symptom {get; set;}
        public string SymptomDescription {get; set;}
        public string Description {get; set;}

        public NoteDto()
        {
            
        }
        public NoteDto(Note entity)
        {
            Id = entity.Id;
            UserId = entity.UserId;
            Mood = entity.Mood.ToString();
            MoodDescription = entity.MoodDescription;
            Symptom = entity.Symptom.ToString();
            SymptomDescription = entity.SymptomDescription;
            Description = entity.Description;

        }
    }
}