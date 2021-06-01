import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { ReceipeEditComponent } from './receipes/receipe-edit/receipe-edit.component';
import { ReceipeDetailComponent } from './receipes/receipes/receipe-detail/receipe-detail.component';
import { ReceipesComponent } from './receipes/receipes/receipes.component';
import { RecepiesResolverService } from './services/recepies-resolver.service';
import { ShoppingListComponent } from './shoppingList/shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/receipe',pathMatch:"full"
  },
  {
    path:'login',
    component:SignInComponent
  },
  {
    path:'receipe',
    component:ReceipesComponent,
    canActivate:[AuthGuardGuard],
    children:[
      {
        path:'new',component:ReceipeEditComponent
      },
      {
        path:':id', component:ReceipeDetailComponent,resolve:[RecepiesResolverService]
      },
      {
        path:':id/edit',component:ReceipeEditComponent,resolve:[RecepiesResolverService]
      }
    ]
  },
  {
    path:'shopping',
    canActivate:[AuthGuardGuard],
    component:ShoppingListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
