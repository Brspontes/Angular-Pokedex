import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoen',
  templateUrl: './hoen.component.html',
  styleUrls: ['./hoen.component.css']
})
export class HoenComponent implements OnInit {

  region: string = 'hoenn'

  constructor() { }

  ngOnInit(): void {
  }

}
