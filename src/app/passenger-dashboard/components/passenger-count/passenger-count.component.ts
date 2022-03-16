import { Component, Input } from "@angular/core";
import { Passenger } from "src/assets/passengers";

@Component({
    selector: 'passenger-count',
    templateUrl: 'passenger-count.component.html',
    styleUrls: ['passenger-count.component.scss']
})

export class PassengerCountComponent {
    @Input()
    items: Passenger[]

    passengerCheckedInCount(): number {
        return this.items.filter((passenger) => passenger.checkedIn).length
    }
}