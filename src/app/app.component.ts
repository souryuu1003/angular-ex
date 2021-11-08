import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  value = '';
  setValue = '0';
  setCalc = '';
  counter = -1;

  keyUp(n) {
    if (0 < n && n < 10) {
      this.value = this.value + n;
    } else if (n != '=') {
      this.setValue = this.value;
      this.setCalc = n;
      this.value = '';
    } else if (this.setValue != null && this.setCalc != null && n == '=') {
      if (this.setCalc == '+') {
        this.value = parseInt(this.setValue) + parseInt(this.value) + '';
      }
      if (this.setCalc == '-') {
        this.value = parseInt(this.setValue) - parseInt(this.value) + '';
      }
      if (this.setCalc == '*') {
        this.value = parseInt(this.setValue) * parseInt(this.value) + '';
      }
      if (this.setCalc == '/') {
        this.value = parseInt(this.setValue) / parseInt(this.value) + '';
      }
    }
    return this.value;
  }
}
