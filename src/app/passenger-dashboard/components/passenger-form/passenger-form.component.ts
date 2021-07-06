import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../models/passenger.model";

interface Baggage {
  key: string,
  value: string
}
@Component({
  selector: 'passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss']
})

export class PassengerFormComponent {

  baggage: Baggage[] = [
    {
      key: 'None',
      value: 'No Baggage'
    },
    {
      key: 'Hand',
      value: 'Hand Baggage'
    },
    {
      key: 'Hold',
      value: 'Hold Baggage'
    },
    {
      key: 'Hand-Hold',
      value: 'Hand and hold Baggage'
    }
  ]

  @Input() passenger: Passenger;
  @Output() update: EventEmitter<Passenger> = new EventEmitter();
  checkedIn: boolean

  public convertTimeStampToDate(timeStamp: number): string {
    return new Date(timeStamp).toISOString().split('T')[0];
  }

  public handleTimeStamp(checkedIn: boolean): void {
    if (checkedIn) {
      this.passenger.checkInDate = Date.now()
    }
  }

  public updatePassenger(passenger: Passenger, valid: boolean): void {
    if (valid) {
      this.update.emit(passenger);
    }
  }

}
