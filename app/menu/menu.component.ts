import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import * as app from "application";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import { NavigationEnd, Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import { UtilsService } from "../shared/services/utils.service";

@Component({
    selector: "Menu",
    moduleId: module.id,
    templateUrl: "./menu.component.html"
})
export class MenuComponent implements OnInit {

    @ViewChild("mainMenu") radSideDrawer: ElementRef;
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private router: Router, private routerExtensions: RouterExtensions, private utilsSrv: UtilsService, private page: Page) {
        // Use the component constructor to inject providers.
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
            .pipe(filter((event: any) => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
        this.utilsSrv.setMainMenu(<RadSideDrawer>this.radSideDrawer.nativeElement);
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        if (navItemRoute === "/logout") {
            this.routerExtensions.navigate(["login"], {
                clearHistory: true,
                transition: {
                    name: "fade"
                }
            });
        } else {
            this.routerExtensions.navigate(["app" + navItemRoute], {
                transition: {
                    name: "fade"
                }
            });
        }
        this.radSideDrawer.nativeElement.closeDrawer();
    }
}
