import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.css']
})
export class SelectCityComponent implements OnInit {
  cityForm = new FormGroup({
    cityName: new FormControl(''),
  });
  constructor() {
  }
  ngOnInit(): void {
  }
  onSubmit() {
    console.warn(this.cityForm.value);
  }
}
