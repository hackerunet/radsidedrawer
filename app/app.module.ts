import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LoginComponent } from "./login/login.component";
import { MenuComponent } from "./menu/menu.component";

import { UtilsService } from "~/shared/services/utils.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent, LoginComponent, MenuComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [UtilsService]
})
export class AppModule { }
