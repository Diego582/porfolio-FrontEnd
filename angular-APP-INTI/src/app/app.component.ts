import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isVisible: any;
  isSelected: boolean= true;
  
  title = 'angular-APP-INTI';
  ngOnInit(): void {
    
  }

}
