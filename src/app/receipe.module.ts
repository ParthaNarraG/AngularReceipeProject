import { NgModule } from "@angular/core";
import { ReceipesComponent } from './receipes/receipes/receipes.component';
import { ReceipeListComponent } from './receipes/receipes/receipe-list/receipe-list.component';
import { ReceipeItemComponent} from './receipes/receipes/receipe-list/receipe-item/receipe-item.component';
import { ReceipeDetailComponent } from './receipes/receipes/receipe-detail/receipe-detail.component';
import { ReceipeRoutingModule } from "./receipe.routing.module";
import { RouterModule } from "@angular/router";
import { ReceipeEditComponent } from "./receipes/receipe-edit/receipe-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared.module";
import { CommonModule } from "@angular/common";
import { FilteredPipePipe } from "./pipes/filtered-pipe.pipe";
import { FilterDirectiveDirective } from './directives/filter-directive.directive';

@NgModule({
    declarations:[
        ReceipeItemComponent,
        ReceipeListComponent,
        ReceipesComponent,
        ReceipeDetailComponent,
        ReceipeEditComponent,
        FilteredPipePipe,
        FilterDirectiveDirective
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule,
        ReceipeRoutingModule,
        RouterModule
    ],
})
export class ReceipeModule{}