import { Component, Input } from '@angular/core';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  socket: WebSocket;
  title = 'Door Control App';
  doorStatus = 'Locked';
  constructor() {
    this.socket = new WebSocket('ws://desktop-93b8mnp:3000/');
    this.socket.onmessage = (event) => {
      console.log(event.data);
    };
  }
  unlock() {
    this.doorStatus = 'Locked';
    this.socket.send('unlock');
  }
  lock() {
    this.doorStatus = 'Unlocked';
    this.socket.send('lock');
  }
}
