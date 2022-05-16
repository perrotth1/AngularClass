import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-enter-pin',
  templateUrl: './enter-pin.component.html',
  styleUrls: ['./enter-pin.component.css']
})
export class EnterPinComponent implements OnInit {
  @Input() numHit: number = null;

  constructor() { }

  ngOnInit(): void {
  }

}
