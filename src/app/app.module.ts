import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";
import { PassengerDashboardService } from "./passenger-dashboard/passenger-dashboard.service";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./not-found.component";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
]
@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular Modules
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    //Feature Modules
    PassengerDashboardModule

  ],
  providers: [PassengerDashboardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
