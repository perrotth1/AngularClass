import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atm';

  @Output() numHit: EventEmitter<any> = new EventEmitter();
  @Output() cancelHit: EventEmitter<any> = new EventEmitter();
  @Output() enterHit: EventEmitter<any> = new EventEmitter();

  numberKeyHit(n: number) {
    this.numHit.emit(n);
  }
}
