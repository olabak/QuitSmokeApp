import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../_services/account.service';
import { UserSettingsService } from '../_services/userSettings.service';
import { UserSetting } from '../_models/userSettings';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  userSetting: UserSetting = null;
  numbersOfCigarettes: number;
  lastSmokeDate: Date;
  yearsOfSmoking: number;
  daysOffSmoke: number;
  quizScore: number;
  today: Date = new Date();
  diff: number; //daysOffSmoke
  profit: number;
  priceOfPacket: number;
  numbersOfCigarettesAll: number;
  motivation: string;
  info: string;
  benefit: string;
  benefitTime: string;
  
  public benefits: any[] =[
    { time: "W ciagu 20min",
      info: "Tętno obniży się oraz ciśnienie krwi powróci do normy"
    },
    { time: "W ciagu 8 godzin",
      info: "Ilość tlenu we krwi wzrośnie, a ilość tlenku węgla zmiejszy się"
    },
    { time: "W ciagu 24 godzin",
      info: "Ryzyko ostrego zawału mięśnia sercowego znacznie się zmiejszy"
    },
    { time: "W ciagu 28 godzin",
      info: "Twoje zmysły smaku i węchu zaczną działać normalnie"
    },
    { time: "Od 2 tygodni do 3 miesięcy",
      info: "Układ krążenia ulegnie wzmocnieniu, polepszy się kondycja fizyczna"
    },
    { time: "Od 1 do 9 miesięcy",
      info: "Wydolność ukłądu oddechowego poprawi się, wzrośnie wydolność płuc, ustąpią kaszel, duszności zmęczenie"
    },
    { time: "Po 1 roku",
      info: "Ryzyko zachorowania na chorobę niedokrwienną mięśnia sercowego zmiejszy się o połowę"
    },
    { time: "Po 5 latach",
      info: "Ryzyko zachorowani ana raka płuca, raka jamy ustnej, krtanii, przełyku zmiejszy się o połowę, obniży się ryzyko wystąpienia udaru mózgu"
    },
    { time: "Po 10 latach",
      info: "Ryzyko zachorowania na chorobę niedokrwienną serca będzie podobne jak u osoby nigdy nie palącej"
    },
    { time: "Po 15 latach",
      info: "Ryzyko zachorowania na raka płuca będzie podobne jak u osoby nigdy nie palącej"
    },
    
  ];
 

  public infos: any[] = [
    "Co 6 sekund na świecie umiera jedna osoba w wyniku chorób spowodowanych paleniem papierosów",
    "Około 9 milionów - tyle osób w Polsce nałogowo pali papierosy",
    "Ponad 6 tysięcy nowych zachorowań na raka płuc wśród polek pojawia się co pół roku",
    "90% zachorowań na raka płuca spowodowanych jest paleniem tytoniu",
    "Ponad 6 tysięcy kobiet umiera w naszym kraju na raka płuca każdego roku",
    "Około 50% nastolatków w wieku 13-15 lat, ma za sobą próby palenia papierosów",
    "Prawie 50% nałogowych palaczy w naszym kraju pali dlużej niż 20 lat",
    "200 miliardów złotych może kosztować Polskę leczenie chorób spowodowanych paleniem tytoniu w ciagu najbliższych 20 lat",
    "Ponad 50% palaczy chciałoby rzucić palenie",
    "Około 2 tysiące osób umiera co roku w Polsce z powodu biernego palenia",
    "40 to liczba silnie rakotwórczych substancji chemicznych, które wprowadzane są przez palaczy do płuc z dymem"
    ];

     
  

  constructor(public accountService: AccountService, private userService: UserSettingsService) { }

  ngOnInit(): void {
    this.getUserSetting()
    this.getRandomInfo()
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }


  private getUserSetting(): void {
      this.userService.getById(JSON.parse(localStorage.getItem('user')).id).subscribe((res: UserSetting) => 
      { 
        this.userSetting = res;
        this.numbersOfCigarettes = res.numbersOfCigarettes;
        this.lastSmokeDate = res.lastSmokeDate;
        this.priceOfPacket = res.priceOfPacket;
        this.yearsOfSmoking = res.yearsOfSmoking;
        this.motivation = res.motivation;
        this.quizScore = res.quizScore;
        this.diff = Math.floor((Date.parse(this.today.toString()) - Date.parse(this.lastSmokeDate.toString())) / 86400000);
        this.profit = this.diff*this.numbersOfCigarettes*this.priceOfPacket/20;
        this.numbersOfCigarettesAll = this.diff*this.numbersOfCigarettes;
      });
  }

  getRandomInfo(): void {
    var random = Math.floor(Math.random()*this.infos.length);
    this.info = this.infos[random];
    var random_b = Math.floor(Math.random()*this.benefits.length);
    this.benefit = this.benefits[random_b].info;
    this.benefitTime = this.benefits[random_b].time;
   
  }

}

  
  
      
         
  
  // }

  // this._settings.editParameter('category', result).subscribe(
  //   (res) => {
  //     this.projectCostCategory = this.projectCostCategory.map((category) =>
  //       category.Id === res.Id ? (category = res) : category,
  //     );
  //     this.costCategory = new MatTableDataSource<iProjectCostCategory>(this.projectCostCategory);
  //     this._global.showSnackResponseMsg('global.snackBar.editSuccess');
  //   },

  // private getUserSetting(): void {
  //   this._service.getById(2).subscribe((res: UserSetting) => 
  //   { 
  //     console.log(res);
  //     this.userSetting = res;
  //     this.profileForm.patchValue(res);
  //     console.log(this.profileForm.get('lastSmokeDate').value);
  //     this.profileForm.get('lastSmokeDate').patchValue(this.formatDate(res.lastSmokeDate));
  //   });
  


