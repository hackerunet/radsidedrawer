import { Injectable } from "@angular/core";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import * as Platform from "platform";
import * as utils from "utils/utils";
import * as frame from "ui/frame";
/**
 * Global service to utils functions
 */
@Injectable({ providedIn: "root" })
export class UtilsService {

    private mainMenu: RadSideDrawer;

    setMainMenu(ref): void {
        this.mainMenu = <RadSideDrawer>ref;
    }

    getMainMenu() {
        return this.mainMenu;
    }

    showDrawer() {
        this.mainMenu.showDrawer();
    }

    closeDrawer() {
        this.mainMenu.closeDrawer();
    }
}
