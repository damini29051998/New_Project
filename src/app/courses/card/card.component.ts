import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  value1 = 50;
  @Input() list: any;
  constructor() { }

  ngOnInit(): void {
  }

}
