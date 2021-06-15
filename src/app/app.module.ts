import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorInterceptor } from './interceptor/http-interceptor.interceptor';
import { SharedModule } from './shared.module';
import { FilteredPipePipe } from './pipes/filtered-pipe.pipe';
import { StoreModule } from '@ngrx/store';
import {reducers} from "../app/shoppingList/shopping-list/store/shopping-list.reducer"

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    // StoreModule.forRoot({message:reducers}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],  
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : HttpInterceptorInterceptor,
    multi: true
  },
  FilteredPipePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
