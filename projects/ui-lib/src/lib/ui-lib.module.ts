import { NgModule } from '@angular/core';
import { UiLibComponent } from './ui-lib.component';
import { HeadnavComponent } from './components/headnav/headnav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';



@NgModule({
  declarations: [
    UiLibComponent,
    HeadnavComponent,
    SidenavComponent
  ],
  imports: [
  ],
  exports: [
    UiLibComponent,
    HeadnavComponent,
    SidenavComponent
  ]
})
export class UiLibModule { }
