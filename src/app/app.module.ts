import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GarnetsComponent } from './components/garnets/garnets.component';
import { AboutComponent } from './about/about.component';
import { ParksComponent } from './components/parks/parks.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParkService } from './park.service';

@NgModule({
  declarations: [
    AppComponent,
    GarnetsComponent,
    AboutComponent,
    ParksComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ParkService],
  bootstrap: [AppComponent],
})
export class AppModule {}
