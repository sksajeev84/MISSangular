import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import {MyNewInterface} from "./my-new-interface";
@Injectable()
export class ApiService {

  private getMapDataURL ="http://ec2-35-170-96-152.compute-1.amazonaws.com:8080/miss/getMapData";
  private SingleEquipmentURL = "http://ec2-35-170-96-152.compute-1.amazonaws.com:9100/miss/equipmentDetails?equipmentId=";
  private EquipmentListURL = "http://ec2-35-170-96-152.compute-1.amazonaws.com:9300/miss/equipmentList";
  
  constructor(private http: Http ) {}
  
  getMapData(): Observable<MyNewInterface[]>{
    return this.http
     .get(this.getMapDataURL)
     .map((response: Response)=> {
       return <MyNewInterface[]>response.json();
     })
  }

  getEquipmentList(): Observable<MyNewInterface[]>{
    return this.http
     .get(this.EquipmentListURL)
     .map((response: Response)=> {
       return <MyNewInterface[]>response.json();
     })
  }
 
  getSingleEquipment(equipmentId){
  // getEquipment(equipmentId): Observable<MyNewInterface>{
    return this.http.get(this.SingleEquipmentURL + equipmentId);
  }


}
