import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, PassengerDashboardModule],
  bootstrap: [AppComponent]
})

export class AppModule { }