import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  creatorName: string = "Ana";
  sendedName: string = null;

  sendedNameAreEqualCreatorName(): boolean {
    return this.sendedName.toLowerCase() == this.creatorName.toLowerCase();
  }
}
