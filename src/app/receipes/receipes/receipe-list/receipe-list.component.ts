import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { receipe } from '../receipe.model'

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.scss']
})
export class ReceipeListComponent implements OnInit {

  @Output() reciepeDetailsInfo=new EventEmitter();

  receipes: receipe[]=[
    new receipe("Test Receipe","New Receipe Added to the list",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636"),
    new receipe("Test Receipe","New Receipe Added to the list",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636"),
    new receipe("Test Receipe","New Receipe Added to the list",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636"),
    new receipe("Test Receipe","New Receipe Added to the list",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636"),
    new receipe("Test Receipe","New Receipe Added to the list",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636"),
    new receipe("Test Receipe","New Receipe Added to the list",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636"),
    new receipe("Test Receipe","New Receipe Added to the list",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636"),
    new receipe("Test Receipe","New Receipe Added to the list",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636"),
    new receipe("Test Receipe","New Receipe Added to the list",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636"),
    new receipe("Test Receipe","New Receipe Added to the list",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636"),
    new receipe("Test Receipe","New Receipe Added to the list",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636"),
    new receipe("Test Receipe","New Receipe Added to the list",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @description sending the receipe details clicked by the user
   * @param data 
   */
  receipeDetails(data:any){
    this.reciepeDetailsInfo.emit(data);
  }
  

}
