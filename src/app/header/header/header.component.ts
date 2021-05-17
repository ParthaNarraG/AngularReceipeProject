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

  navigator(data:any){
    this.navigateItem.emit(data);
  }

}
