import { Component } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faAngular, faHtml5, faSass } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-proyectos',
  imports: [FontAwesomeModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent {
  angular = faAngular;
  scss = faSass;
  html = faHtml5;

}
