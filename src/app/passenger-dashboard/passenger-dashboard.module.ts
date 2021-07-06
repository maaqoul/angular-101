import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http"

import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";
import { FormsModule } from "@angular/forms";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ 
  path: 'passengers',
  children: [
    {path: '', component: PassengerDashboardComponent},
    {path: ':id', component: PassengerViewerComponent}
  ]
}]
@NgModule({
  declarations: [PassengerDashboardComponent, PassengerCountComponent, PassengerDetailComponent, PassengerViewerComponent, PassengerFormComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forChild(routes)],
  exports: [PassengerDashboardComponent, PassengerViewerComponent]
})

export class PassengerDashboardModule { }
