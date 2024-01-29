import { formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-thirdy-exercise',
  templateUrl: './thirdy-exercise.component.html',
  styleUrl: './thirdy-exercise.component.css'
})
export class ThirdyExerciseComponent {
  serverPassword: string = 'MySecretPassword';
  buttonDetailsText: string = "Show Details";
  showDetails: boolean = false;
  showDetailsLog: string[] = [];
  
  alterDetailsExibition() {
    this.showDetails = !this.showDetails;
    this.buttonDetailsText = this.showDetails ? "Hide Details" : "Show Details";
    this.showDetailsLog.push('The details exibition is ' + this.showDetails + ' on ' + formatDate(new Date(), 'yyyy/MM/dd h:mm:ss', 'en'));
  }

  getLogBackgroundColor(index: number) {
    return index >= 4 ? 'blue' : '';
  }

  getLogColor(index: number) {
    return index >= 4 ? 'white' : 'black';
  }
}
