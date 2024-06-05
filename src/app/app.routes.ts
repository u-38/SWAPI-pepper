import { Routes } from '@angular/router';
import {HomeComponent} from "./shell/home/home.component";
import {NotFoundComponent} from "./shell/not-found/not-found.component";
import {AboutComponent} from "./shell/about/about.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
