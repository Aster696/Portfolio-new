import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  is_open: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.is_open = this.is_open ? false : true;
  }

  openInNewTab(path: string): void {
    window.open(path, '_blank');
  }

}
