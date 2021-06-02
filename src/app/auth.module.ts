import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SignInComponent } from "./auth/sign-in/sign-in.component";
import { LoaderComponent } from "./loader/loader.component";

@NgModule({
    declarations: [SignInComponent, LoaderComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild([{
            path: '',
            component: SignInComponent
        }])
    ],
    exports: [
        SignInComponent,
        LoaderComponent
    ]
})
export class AuthModule { }