import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceipeEditComponent } from './receipes/receipe-edit/receipe-edit.component';
import { ReceipeStartComponent } from './receipes/receipe-start/receipe-start.component';
import { ReceipeDetailComponent } from './receipes/receipes/receipe-detail/receipe-detail.component';
import { ReceipesComponent } from './receipes/receipes/receipes.component';
import { ShoppingListComponent } from './shoppingList/shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/receipe',pathMatch:"full"
  },
  {
    path:'receipe',
    component:ReceipesComponent,
    children:[
      {
        path:'',component:ReceipeStartComponent,
      },
      {
        path:'new',component:ReceipeEditComponent
      },
      {
        path:':id', component:ReceipeDetailComponent
      },
      {
        path:':id/edit',component:ReceipeEditComponent
      }
    ]
  },
  {
    path:'shopping',
    component:ShoppingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
