import { Component, OnInit, Input } from '@angular/core';
import { AirlinePart } from 'src/app/AirlinePart';
import { AirlinePartInfo } from 'src/app/AirlinePart';

@Component({
  selector: 'app-airline-part',
  templateUrl: './airline-part.component.html',
  styleUrls: ['./airline-part.component.css']
})
export class AirlinePartComponent implements OnInit {

  partInfo: AirlinePartInfo = {
    productID:  0,
    quantity: 0,
    owner: ""
  }
  
  @Input()
  part: AirlinePart = {
    Key: "",
    Record: this.partInfo
  }

  constructor() { }

  ngOnInit(): void {
  }

}
