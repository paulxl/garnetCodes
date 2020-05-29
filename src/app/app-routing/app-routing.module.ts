import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ParksComponent } from '../components/parks/parks.component';
import { DiverComponent } from '../diver/diver.component';
import { DivelogComponent } from '../divelog/divelog.component';
import { FunMathComponent } from '../fun-math/fun-math.component';
import { GarnetsComponent } from '../components/garnets/garnets.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  { path: 'park', component: ParksComponent },
  { path: 'diver', component: DiverComponent },
  { path: 'divelog', component: DivelogComponent },
  { path: 'funMath', component: FunMathComponent },
  { path: 'garnets', component: GarnetsComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
