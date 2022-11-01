import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit() {
    console.log(this.profileForm);
  }

  private initializeForm() {
    this.profileForm = new FormGroup({
      'lastSmokeDate': new FormControl("Audi R8", Validators.required),
      'numbersOfCigarettes': new FormControl("Audi R8"),
      'yearsOfSmoking': new FormControl(null),
      'priceOfPacket': new FormControl(null)
    });

}
}
