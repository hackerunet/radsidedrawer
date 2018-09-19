import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "./login/login.component";
import { MenuComponent } from "./menu/menu.component";

const routes: Routes = [
    { path: "", redirectTo: "/(app:login)", pathMatch: "full" },
    { path: "login", component: LoginComponent, outlet: "app" },
    { path: "menu", component: MenuComponent, outlet: "mainapp", children: [
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "home", loadChildren: "./home/home.module#HomeModule" },
            { path: "browse", loadChildren: "./browse/browse.module#BrowseModule" },
            { path: "search", loadChildren: "./search/search.module#SearchModule" },
            { path: "featured", loadChildren: "./featured/featured.module#FeaturedModule" },
            { path: "settings", loadChildren: "./settings/settings.module#SettingsModule" }
    ]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
