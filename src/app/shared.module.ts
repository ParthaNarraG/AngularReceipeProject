import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header/header.component";
import { ReceipeRoutingModule } from "./receipe.routing.module";

@NgModule({
    declarations:[HeaderComponent],
    imports:[CommonModule,ReceipeRoutingModule],
    exports:[HeaderComponent]
})
export class SharedModule {}