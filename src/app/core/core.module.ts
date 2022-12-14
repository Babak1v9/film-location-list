import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [NavBarComponent],
    imports: [
        CommonModule
    ],
    exports: [NavBarComponent]
})
export class CoreModule { }