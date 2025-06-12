import { Component } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  imgHandsome = 'img/portfolio.JPG';
  linkedinIMG = 'img/linkeding.svg';
  mailImg = 'img/mail.svg';
  solemtiImg = 'img/solemti.svg';
  coppelImg = 'img/coppel-icon.png';
  githubImg = 'img/github.svg';
  codingImg = 'img/coding.svg';
  undrawImg = 'img/undraw.svg';
  websiteImg = 'img/website.svg';
  resumeImg = 'img/resume.svg';
  cubesImg = 'img/Cubes.svg';
  landingImg = 'img/landing.png';
  crudImg = 'img/crud.png';
  fakeImg = 'img/fakestore.png';
  demoImg = 'img/demoPage.svg';
  angularImg = 'img/angular.svg'
  htmlImg = 'img/html.svg'
  sassImg = 'img/sass.svg'
  firebaseImg = 'img/firebase.svg';
  switchValue : boolean = false;
  menuVisible : boolean = false;

  constructor(private shared:SharedServiceService, private route: Router){
    this.shared.darkMode$.subscribe((value) =>{
      this.switchValue = value;
      console.log('DarkMode cambio a: ', value);
    })
  }

  emailSent(){
    window.location.href='mailto:aldordzvn2001@gmail.com';
  }

  openPdf(){
    window.open('docs/ALDO_CV_2025.pdf', '_blank');
  }

}
