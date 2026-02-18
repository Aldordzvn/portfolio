import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  moonIcon = faMoon;
  sunIcon = faSun;
  menuIcon = faBars;
  backIcon = faArrowLeft;
  menuBoolean : boolean = false;
  hasInteracted : boolean = false;

  openMenu(){
    this.hasInteracted = true;
    this.menuBoolean = !this.menuBoolean;
  }
}
