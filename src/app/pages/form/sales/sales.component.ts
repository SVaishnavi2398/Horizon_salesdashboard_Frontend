import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  // Collapse declare
  isCollapsed: boolean;
  

  constructor() { }

  ngOnInit() {
    // Collapse value
    this.isCollapsed = false;
    
  }


}
