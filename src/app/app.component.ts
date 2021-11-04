import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  value = 0;
  counter = -1;
  setValue = [];

  keyUp(n) {
    if (n != '=') {
      this.counter++;
      this.setValue.push(this.counter, n);
    } else {
      for (let i = 0; i < this.setValue.length; i++) {
        console.log(this.setValue.indexOf(i));
      }
    }
  }
}
