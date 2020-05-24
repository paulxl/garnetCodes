import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GarnetsComponent } from './components/garnets/garnets.component';
import { ParksComponent } from './components/parks/parks.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  { path: 'garnets', component: GarnetsComponent },
  { path: 'parks', component: ParksComponent },
  { path: 'about', component: AboutComponent },
  { path: 'navbar', component: NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
