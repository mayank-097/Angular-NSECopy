import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppheaderComponent } from './nse/appheader/appheader.component';
import { MainpanelComponent } from './nse/mainpanel/mainpanel.component';
import { LinkheaderComponent } from './nse/linkheader/linkheader.component';
import { LeftpanelComponent } from './nse/leftpanel/leftpanel.component';
import { RightpanelComponent } from './nse/rightpanel/rightpanel.component';
import { AdditiontaskComponent } from './AddApp/additiontask/additiontask.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    MainpanelComponent,
    LinkheaderComponent,
    LeftpanelComponent,
    RightpanelComponent,
    AdditiontaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
