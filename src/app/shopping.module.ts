import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared.module";
import { ShoppingEditComponent } from "./shoppingList/shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shoppingList/shopping-list/shopping-list.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        SharedModule,
        FormsModule,
        CommonModule,
        RouterModule.forChild([{
            path:'',
            component:ShoppingListComponent,
        }])
    ],
 
})

export class ShoppingModule { }