import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as frame from "tns-core-modules/ui/frame";
import { UtilsService } from "../shared/services/utils.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    private mainMenu: RadSideDrawer;
    constructor(private utilsSrv: UtilsService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        this.utilsSrv.showDrawer();
    }
}
