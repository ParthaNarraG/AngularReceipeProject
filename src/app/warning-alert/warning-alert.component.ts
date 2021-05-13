import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.scss']
})
export class WarningAlertComponent implements OnInit {
  checkParamValue:any=document.getElementById("checkParamValue");
  serverName:any="amazonWebServer";
  serverStatus:any=false;
  responseMessage="Warning Alert";
  state=true;
  secretShare=false;
  log:any=[];
  constructor() { 
    this.serverName=Math.random() > 0.5 ?'online':'offline';
  }

  ngOnInit(): void {
  }

  checkEmptyString(){
    this.serverStatus=true;
  }

  getColor(){
    return this.serverName==='online'? 'green':'red';
  }

  getLogInfo(){
    this.secretShare=!this.secretShare;
    this.log.push(this.log.length + 1);
  }

}
