import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  @Input()
  projectTitle: string = 'Emestone landing page --- Freelancer';
  @Input()
  imgSrcSmartphone: string = 'assets/projects/emestone/smartphone.png';
  @Input()
  imgSrcTablet: string = 'assets/projects/emestone/tablet.png';
  @Input()
  technologies: any[] = [
    {
      color: '--cor:#e03e36;',
      icon: 'fa-brands fa-html5',
      name: 'HTML'
    },
    {
      color: '--cor:#264DE4;',
      icon: 'fa-brands fa-css3',
      name: 'CSS'
    },
    {
      color: '--cor:#f0d800;',
      icon: 'fa-brands fa-square-js',
      name: 'JAVASCRIPT'
    }
  ];
  @Input()
  links = [
    {
      link: 'https://github.com/Gefferson-Souza/emestone-teste',
      icon: 'fa-brands fa-github',
      color: 'color:#333;'
    },
    {
      link: 'https://emestone.com.br',
      icon: 'fa-solid fa-link',
      color: ''
    }
  ]


  constructor() { }

  ngOnInit(): void {
    this.setAnimationPlayState();
  }

  pauseAnimation(element: HTMLElement): void {
    element.style.animationPlayState = element.style.animationPlayState === 'paused' ?
      'running' :
      'paused';
  }

  setAnimationPlayState(): void {
    let smartphoneEl: HTMLElement | null = document.querySelector('.smartphone')
    if (smartphoneEl) {
      smartphoneEl.style.animationPlayState = 'paused';
    }
  }


}
