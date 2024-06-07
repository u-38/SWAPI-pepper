import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatSlideToggle} from "@angular/material/slide-toggle";

@Component({
  standalone: true,
  selector: 'app-navbar-cmp',
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    MatToolbar,
    MatAnchor,
    RouterLink,
    MatSlideToggle
  ]
})
export class NavbarComponent {
  darkMode = false;

  toggleTheme() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      console.log(this.darkMode);
    } else {
      console.log(this.darkMode);
    }
  }
}
