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
        string Mood {get; set;}
        string MoodDescription {get; set;}
        string Symptom {get; set;}
        string SymptomDescription {get; set;}
        string Description {get; set;}

        DateTime AddDate {get; set;}

        private NoteDto dto;

        public Note(NoteDto dto)
        {
            this.dto = dto;
        }
        //         Oceń swoje dzisiejsze samopoczucie

        // Bardzo dobreDobreŚrednieZłeBardzo złe
        // Dlaczego się tak czujesz?
        // Czy masz objawy odstawienne?

        // TAKNIE
        // Jeśli zaznaczyłeś odpowiedź TAK* Jakie?
        // Napisz kilka słów od siebie
    }
}