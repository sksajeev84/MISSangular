import { Component , OnInit } from '@angular/core';
import { ApiService } from "./api.service"
import { MyNewInterface } from "./my-new-interface";
import { error } from 'util';
//import $ from "jquery";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})

export class AppComponent implements OnInit{
  title = 'app';
  postsArray: MyNewInterface[] = [];
  EquipmentListArray: MyNewInterface[] = [];
  currentEquipment: MyNewInterface;

  constructor(private apiSerivce: ApiService){
  }

  public MoreAboutSignleEquipment(event, item) {
    this.getSingleEquipmentDetails(item.equipmentId, function(response){
      this.currentEquipment = JSON.parse(response._body);
      var model = $('#equipmentViewer');
      model.find('.modal-title').text(this.currentEquipment.equipmentName);
      model.modal('show');
    }, function(error){
      console.log(error);
    })
  }

  getMapData(): void {
    this.apiSerivce.getMapData().
    subscribe(
       resultArray => this.postsArray =
       resultArray.map(function(data){
        data.equipmentLongitude = parseFloat(data.equipmentLongitude);
        data.equipmentLatitude = parseFloat(data.equipmentLatitude);
        return data;
	    }),
      error => console.log(error))
  }

  getEquipmentList(): void {
    this.apiSerivce.getEquipmentList().
    subscribe(
       resultArray => this.EquipmentListArray = resultArray.map(function(data){
        return data;
	    }),
      error => console.log(error))
  }

  getSingleEquipmentDetails(equipmentId, onSuccess, onError){
    this.apiSerivce.getSingleEquipment(equipmentId).
    subscribe(onSuccess, onError);
  }

  ngOnInit(): void{
    this.getMapData();
    this.getEquipmentList();
	}

}