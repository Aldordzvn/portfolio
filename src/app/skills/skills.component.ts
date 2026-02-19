import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faCss, faHtml5, faJava, faJs, faLaravel, faPhp, faSass, faTypescript } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skills',
  imports: [FontAwesomeModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  javascriptIcon = faJs;
  typeScriptIcon = faTypescript;
  javaIcon = faJava;
  phpIcon = faPhp;
  htmlIcon = faHtml5;
  cssIcon = faCss;
  sassIcon = faSass;
  angularIcon = faAngular;
  laravelIcon = faLaravel;
  
}
