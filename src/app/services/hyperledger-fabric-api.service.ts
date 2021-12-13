import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AirlinePart } from '../AirlinePart';
import { AirlinePartInfo } from '../AirlinePart';
import { Part } from 'src/Part';

@Injectable({
  providedIn: 'root'
})
export class HyperledgerFabricAPIService {

  airlinePartURL = "http://localhost:8080/HFRest/webapi"

  constructor(private httpClient: HttpClient) { }

  getAllAirlineParts(): Observable<AirlinePart[]> {
    let allPartsURL = `${this.airlinePartURL}/parts`
    return this.httpClient.get<AirlinePart[]>(allPartsURL);
  }

  getAirlinePart(partName: string): Observable<AirlinePartInfo> {
    let onePartURL = `${this.airlinePartURL}/parts/${partName}`
    return this.httpClient.get<AirlinePartInfo>(onePartURL);
  }
  
  changeOwner(partName: string, newOwner: string): Observable<string> {
    let changeOwnerURL = `${this.airlinePartURL}/parts/${partName}/name/${newOwner}`
    return this.httpClient.get<string>(changeOwnerURL);
  }

  createAirlinePart(partName: string, productID: string, quantity: string, owner: string) : Observable<string>{
    let changeOwnerURL = `${this.airlinePartURL}/parts/${partName}/partName/${productID}/quantity/${quantity}/newOwner/${owner}`
    return this.httpClient.get<string>(changeOwnerURL);
  }

}
