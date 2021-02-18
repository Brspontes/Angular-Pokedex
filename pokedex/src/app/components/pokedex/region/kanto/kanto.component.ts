import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanto',
  templateUrl: './kanto.component.html',
  styleUrls: ['./kanto.component.css']
})
export class KantoComponent implements OnInit {

  region: String = "kanto"

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
