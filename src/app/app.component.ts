import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maxmillianTutorials';
  selectedNavLink:any="receipes";

  /**
   * @description Assigning the data received by the user click navigation
   * @param data 
   */
  checkSelectedItem(data:any){
    this.selectedNavLink=data;
  }

}
