import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SuccessAlertComponent } from './success-alert/success-alert.component';
// import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { HeaderComponent } from './header/header/header.component';
import { ReceipesComponent } from './receipes/receipes/receipes.component';
import { ReceipeListComponent } from './receipes/receipes/receipe-list/receipe-list.component';
import { ReceipeDetailComponent } from './receipes/receipes/receipe-detail/receipe-detail.component';
import { ShoppingListComponent} from './shoppingList/shopping-list/shopping-list.component'
import { ShoppingEditComponent } from './shoppingList/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipesComponent,
    ReceipeListComponent,
    ReceipeDetailComponent,
    ShoppingEditComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
