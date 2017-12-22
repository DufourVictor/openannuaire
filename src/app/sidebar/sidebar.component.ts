import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    events = [];
  constructor() { }

  showFilterControls($filter, $addControl, $removeControl) {
    console.log($filter, $addControl, $removeControl);
    $filter.hidden = false;
    document.getElementById($addControl).style.display = 'none';
    document.getElementById($removeControl).style.display = 'block';
  }

  hideFilterControls($filter, $addControl, $removeControl) {
    $filter.hidden = true;
      document.getElementById($addControl).style.display = 'block';
      document.getElementById($removeControl).style.display = 'none';
  }


  removeFilter($filter) {

      var child = document.getElementById("p1");
      $filter.removeChild(child);
  }
}
