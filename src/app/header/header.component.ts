import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{
  verifiedImg = 'img/verified.svg';
  handsomeImg = 'img/portfolio.JPG';
  linkedinImg = 'img/linkedin.svg';
  switchIcons : boolean = false;
  menuVisible : boolean = false;
  
  constructor(private renderer: Renderer2, private sharedService: SharedServiceService, private route: ActivatedRoute){}

  ngAfterViewInit(): void{
    this.scrollFragment();
  }

  toggleDarkMode(){
    const darkMode = document.body.classList.contains('darkmode');
    if(darkMode){
      this.renderer.removeClass(document.body, 'darkmode');
      this.sharedService.setDarkMode(false);
      this.switchIcons = false;
    }else{
      this.renderer.addClass(document.body, 'darkmode');
      this.switchIcons = true;
      this.sharedService.setDarkMode(true);
      this.switchIcons = true;
    }
  }

  toggleMenu(){
    this.menuVisible = !this.menuVisible;
    if(this.menuVisible){
      document.body.classList.add('block-scroll');
    }else{
      document.body.classList.remove('block-scroll');
    }
  }

  scrollFragment(){
    this.route.fragment.subscribe(fragment =>{
      if(fragment){
        const seccion = document.getElementById(fragment);
        if(seccion){
          seccion.scrollIntoView({behavior:'smooth', block:'start'});
        }
      }
    } )
  }
}
