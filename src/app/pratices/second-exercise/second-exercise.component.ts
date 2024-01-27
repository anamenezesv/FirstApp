import { Component } from '@angular/core';

@Component({
  selector: 'app-second-exercise',
  templateUrl: './second-exercise.component.html',
  styleUrl: './second-exercise.component.css'
})
export class SecondExerciseComponent {
  username: string = "";

  cleanUsername() {
    this.username = "";
  }

  usernameIsEmpty(): boolean {
    return this.username == null || this.username == "";
  }
}
