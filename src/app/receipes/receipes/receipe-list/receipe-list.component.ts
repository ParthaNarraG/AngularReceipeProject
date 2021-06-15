import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilteredPipePipe } from 'src/app/pipes/filtered-pipe.pipe';
import { AuthCallsService } from 'src/app/services/auth-calls.service';
import { ReceipeServiceService } from 'src/app/services/receipe-service.service';


@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.scss']
})
export class ReceipeListComponent implements OnInit {

  @Output() reciepeDetailsInfo = new EventEmitter();
  receipes: any;
  type: any = "All";


  constructor(private recepieService: ReceipeServiceService,
    private router: Router, private route: ActivatedRoute,
    private auth: AuthCallsService,
    private filteredPipe:FilteredPipePipe,
    private cds:ChangeDetectorRef) {
      this.receipes=this.recepieService.filteredReceipes;
  }

  

  ngOnInit(): void {
    this.auth.onFetchData();
    this.recepieService.filteredReceipeInfo.subscribe((data:any)=>{
      this.receipes=data;
      this.cds.detectChanges();
    })
  }

  newReceipe() {
    this.router.navigate(["new"], { relativeTo: this.route })
  }

  filter(data: any) {
    this.type = data;
    localStorage.setItem("type", data);
    this.receipes=this.filteredPipe.transform(this.receipes,data,"type");
    this.router.navigate(["../"])
  }
}
