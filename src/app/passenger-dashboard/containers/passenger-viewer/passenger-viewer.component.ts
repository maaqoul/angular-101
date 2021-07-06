import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { switchMap } from 'rxjs/operators';
import { Passenger } from "../../models/passenger.model";
import { PassengerDashboardService } from "../../passenger-dashboard.service";

@Component({
  selector: 'passenger-viewer',
  template: `<passenger-form [passenger]="passenger" (update)="handleUpdate($event)"></passenger-form>`
})

export class PassengerViewerComponent implements OnInit, OnDestroy {

  passenger: Passenger;
  getPassengerSubscription: Subscription;

  constructor(private readonly passengerDashboardService: PassengerDashboardService, private readonly routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.pipe(switchMap(params => this.passengerDashboardService.getPassenger(+params.id))).subscribe(passenger => this.passenger = passenger)
 
  }

  ngOnDestroy() {
    this.getPassengerSubscription?.unsubscribe();
  }

  handleUpdate(passenger: Passenger): void {
    this.passengerDashboardService.updatePassenger(passenger).subscribe(() => this.passenger = passenger);
  }

}
