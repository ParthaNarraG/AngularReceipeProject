import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shoppingList/shopping-list/shopping-list.component';


const routes: Routes = [
 
  {
    path:'',redirectTo:'/receipe',pathMatch:"full"
  },
  {
    path:'shop',
    component:ShoppingListComponent
  },
  {
    path:'login', loadChildren:()=>import("../app/auth.module").then(m=>m.AuthModule)
  },
  {
    path:'receipe', loadChildren:()=>import("../app/receipe.module").then(m=>m.ReceipeModule)
  },
  // {
  //   path:'shop', loadChildren:()=>import("../app/shopping.module").then(m=>m.ShoppingModule)
  // }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
