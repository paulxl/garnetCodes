import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GarnetsComponent } from './garnets/garnets.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent, GarnetsComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
