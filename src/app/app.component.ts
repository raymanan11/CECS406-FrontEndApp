import { Component } from '@angular/core';
import { AirlinePart } from './AirlinePart';
import { AirlinePartInfo } from './AirlinePart';
import { HyperledgerFabricAPIService } from './services/hyperledger-fabric-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  partName: string = ""
  parts: string = "Parts";
  airlineParts: AirlinePart[] = [];
  part: AirlinePartInfo = {
    productID: 0,
    quantity: 0,
    owner: ""
  }
  airlinePart: AirlinePart = {
    Key: "",
    Record: this.part
  }
  selectedPart = ""
  newPartName=""
  newOwner = ""
  newPartOwner = ""
  productID = ""
  quantity = ""

  constructor(private hfAPIService: HyperledgerFabricAPIService) {}

  getAllAirlineParts() {
    console.log('Getting Airline Parts')
    this.hfAPIService.getAllAirlineParts().subscribe((parts) => this.airlineParts = parts)
  }

  getAirlinePart() {
    console.log('Getting Airline Part')
    this.hfAPIService.getAirlinePart(this.partName).subscribe((airlinePart) => {
      this.part = airlinePart
      console.log(this.part)
    })
  }

  changePartOwner() {
    this.hfAPIService.changeOwner(this.selectedPart, this.newOwner).subscribe((part) => console.log(part))
  }

  createAirlinePart() {
    this.hfAPIService.createAirlinePart(this.newPartName, this.productID, this.quantity, this.newPartOwner).subscribe(part => console.log(part))
  }
}
