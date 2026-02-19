import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { LandingComponent } from './landing/landing.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, LandingComponent, ExperienciaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
