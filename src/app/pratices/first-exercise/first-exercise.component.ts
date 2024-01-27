import { Component } from '@angular/core';

@Component({
  selector: 'app-first-exercise',
  templateUrl: './first-exercise.component.html',
  styleUrl: './first-exercise.component.css'
})
export class FirstExerciseComponent {

  creatorName: string = "Ana";
  sendedName: string = null;

  sendedNameAreEqualCreatorName(): boolean {
    return this.sendedName.toLowerCase() == this.creatorName.toLowerCase();
  }
}