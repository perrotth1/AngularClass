import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.css']
})
export class ContactHomeComponent implements OnInit {
  isUnchanged=true;

  constructor() { }

  onCancel(event?: KeyboardEvent) {
    const eventMsg = event ? ' Event target is ' + (event.target as HTMLElement).textContent : '';
    alert('Cancelled.' + eventMsg);

  }

  ngOnInit(): void {
  }

}
