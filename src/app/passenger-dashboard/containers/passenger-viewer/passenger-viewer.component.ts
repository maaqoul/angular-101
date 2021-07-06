import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Passenger } from "../../models/passenger.model";
import { PassengerDashboardService } from "../../passenger-dashboard.service";

@Component({
  selector: 'passenger-viewer',
  template: `<passenger-form [passenger]="passenger" (update)="handleUpdate($event)"></passenger-form>`
})

export class PassengerViewerComponent implements OnInit, OnDestroy {

  passenger: Passenger;
  getPassengerSubscription: Subscription;

  constructor(private readonly passengerDashboardService: PassengerDashboardService) { }

  ngOnInit() {
    this.getPassengerSubscription = this.passengerDashboardService.getPassenger(1).subscribe(passenger => this.passenger = passenger)
  }

  ngOnDestroy() {
    this.getPassengerSubscription.unsubscribe();
  }

  handleUpdate(passenger: Passenger): void {
    this.passengerDashboardService.updatePassenger(passenger).subscribe(() => this.passenger = passenger);
  }

}
