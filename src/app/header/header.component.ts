import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hamburgerIsActive: boolean = false;

  constructor() {


  }

  ngOnInit(): void { }

  menuClicked(): void {
    this.hamburgerIsActive = !this.hamburgerIsActive;
  }
}

