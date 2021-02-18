import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jotho',
  templateUrl: './jotho.component.html',
  styleUrls: ['./jotho.component.css']
})
export class JothoComponent implements OnInit {

  region: String = 'jotho'

  constructor() { }

  ngOnInit(): void {
  }

}
