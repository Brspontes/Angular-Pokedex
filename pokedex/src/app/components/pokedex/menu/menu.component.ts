import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  collapsed = true;

  constructor() { }

  ngOnInit(): void {

  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
