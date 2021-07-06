import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Passenger } from "../../models/passenger.model";
import { PassengerDashboardService } from "../../passenger-dashboard.service";


@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})

export class PassengerDashboardComponent implements OnInit, OnDestroy {

  passengers: Passenger[];

  getPassengerSubscription: Subscription;
  updatePassengerSubscription: Subscription;
  removePassengerSubscription: Subscription;

  constructor(private readonly passengerDashboardService: PassengerDashboardService) { }

  ngOnInit() {
    this.getPassengers();
  }

  ngOnDestroy() {
    this.getPassengerSubscription?.unsubscribe();
    this.updatePassengerSubscription?.unsubscribe();
    this.removePassengerSubscription?.unsubscribe();
  }

  public editPassenger(passenger: Passenger): void {
    this.updatePassengerSubscription = this.passengerDashboardService.updatePassenger(passenger).subscribe(() => {
      this.passengers = this.passengers?.map(pass => {
        if (pass.id === passenger.id) {
          pass = { ...passenger };
        }
        return pass
      })
    })
  }

  public removePassenger(passenger: Passenger): void {
    this.removePassengerSubscription = this.passengerDashboardService.removePassenger(passenger.id).subscribe(() => {
      this.passengers = this.passengers?.filter(pass => pass.id !== passenger.id)
    })
  }

  getPassengers() {
    this.getPassengerSubscription = this.passengerDashboardService.getPassengers().subscribe(passengers => {
      this.passengers = passengers
    }, error => console.log(error));
  }

}
