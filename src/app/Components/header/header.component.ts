import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth > 1280) {
      this.navToggle = true;
      this.setToggle();
    }
  }

  navToggle: boolean = false;

  setToggle(){
    this.navToggle = !this.navToggle;
    const body = document.body;

    if(this.navToggle){
      body.style.overflow = 'hidden';
    }
    else{
      body.style.overflow = '';
    }
  }
}
