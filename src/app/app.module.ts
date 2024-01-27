import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessToastComponent } from './toasts/success-toast/success-toast.component';
import { WarningToastComponent } from './toasts/warning-toast/warning-toast.component';
import { FormsModule } from '@angular/forms';
import { FirstExerciseComponent } from './pratices/first-exercise/first-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    FirstExerciseComponent,
    SuccessToastComponent,
    WarningToastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
