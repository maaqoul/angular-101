import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

@NgModule({
  declarations: [PassengerDashboardComponent, PassengerCountComponent, PassengerDetailComponent],
  imports: [BrowserModule],
  exports: [PassengerDashboardComponent]
})

export class PassengerDashboardModule { }
