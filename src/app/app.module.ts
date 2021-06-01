import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { ReceipesComponent } from './receipes/receipes/receipes.component';
import { ReceipeListComponent } from './receipes/receipes/receipe-list/receipe-list.component';
import { ReceipeItemComponent} from './receipes/receipes/receipe-list/receipe-item/receipe-item.component';
import { ReceipeDetailComponent } from './receipes/receipes/receipe-detail/receipe-detail.component';
import { ShoppingListComponent} from './shoppingList/shopping-list/shopping-list.component'
import { ShoppingEditComponent } from './shoppingList/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ReceipeEditComponent } from './receipes/receipe-edit/receipe-edit.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { LoaderComponent } from './loader/loader.component'
import { HttpInterceptorInterceptor } from './interceptor/http-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipesComponent,
    ReceipeListComponent,
    ReceipeDetailComponent,
    ReceipeItemComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    DropdownDirective,
    ReceipeEditComponent,
    SignInComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpInterceptorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
