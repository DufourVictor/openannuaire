import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  value = 'Clear me';

  public pathToImg = 'assets/img/Open-Annuaire.png';

  constructor() { }

  ngOnInit() {

  }
}
