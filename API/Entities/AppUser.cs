using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }

        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public int SettingId { get; set; }
        public virtual UserSetting? Setting { get; set; }
        //public virtual List<Note> MyProperty { get; set; }
        //         Data ostatniego papierosa
        // dd.mm.rrrr
        // Ilość wypalanych papierosów dziennie
        // Lata palenia
        // Cena za paczkę [zł]
    }
}