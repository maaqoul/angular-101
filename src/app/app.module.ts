import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";
import { PassengerDashboardService } from "./passenger-dashboard/passenger-dashboard.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular Modules
    BrowserModule,
    FormsModule,

    //Feature Modules
    PassengerDashboardModule

  ],
  providers: [PassengerDashboardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
