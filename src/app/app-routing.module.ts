import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 
  {
    path:'',redirectTo:'/receipe',pathMatch:"full"
  },
  {
    path:'login', loadChildren:()=>import("../app/auth.module").then(m=>m.AuthModule)
  },
  {
    path:'receipe', loadChildren:()=>import("../app/receipe.module").then(m=>m.ReceipeModule)
  },
  {
    path:'shop', loadChildren:()=>import("../app/shopping.module").then(m=>m.ShoppingModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
