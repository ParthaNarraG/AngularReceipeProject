import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { ReceipeEditComponent } from './receipes/receipe-edit/receipe-edit.component';
import { ReceipeDetailComponent } from './receipes/receipes/receipe-detail/receipe-detail.component';
import { ReceipesComponent } from './receipes/receipes/receipes.component';
import { RecepiesResolverService } from './services/recepies-resolver.service';

const routes: Routes = [
  {
    path:'',
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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceipeRoutingModule { }
