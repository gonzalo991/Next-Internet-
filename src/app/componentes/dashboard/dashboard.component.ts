import { Component, OnInit } from '@angular/core';
import { cardData } from 'src/assets/data/card';
import { sectionData } from 'src/assets/data/section';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  card = cardData;
  sectionData = sectionData;
  
}
