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
import { DivelogComponent } from './divelog/divelog.component';
import { FunMathComponent } from './fun-math/fun-math.component';
import { DiverComponent } from './diver/diver.component';
import { DiverService } from './services/diver.service';
import { DivelogService } from './services/divelog.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GarnetsComponent,
    AboutComponent,
    ParksComponent,
    NavbarComponent,
    DivelogComponent,
    FunMathComponent,
    DiverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    BrowserAnimationsModule,
  ],
  providers: [ParkService, DiverService, DivelogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
