import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() navigateItem=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @description sending the details of which navigation link clicked by the user
   * @param data 
   */
  navigator(data:any){
    this.navigateItem.emit(data);
  }

}
