import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.css']
})
export class ServicesHomeComponent implements OnInit {
  firstName : string = "Danny";
  lastName : string = "Flash";
  phoneNumber : string = "212 666 4200";
  jobTitle : string = "Vice President";

  constructor() { }

  ngOnInit(): void {
  }

}
