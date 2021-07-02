import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.model";


@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})

export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[];

  constructor() { }

  ngOnInit() {
    this.passengers = [
      {
        id: 1,
        fullName: "Stephen",
        checkedIn: true,
        checkInDate: 1490742000000,
        children: [
          {
            name: "hamza",
            age: 15,
          },
        ],
      },
      {
        id: 2,
        fullName: "Rose",
        checkedIn: false,
        checkInDate: null,
        children: [
          {
            name: "hamza",
            age: 15,
          },
          {
            name: "salma",
            age: 22,
          },
        ],
      },
      {
        id: 3,
        fullName: "James",
        checkedIn: true,
        checkInDate: 1491606000000,
      },
      {
        id: 4,
        fullName: "Louise",
        checkedIn: true,
        checkInDate: 1488412800000,
        children: [
          {
            name: "hamza",
            age: 15,
          },
        ],
      },
      {
        id: 5,
        fullName: "Tina",
        checkedIn: false,
        checkInDate: null,
      },
    ];
  }

  editPassenger(passenger: Passenger) {
    this.passengers = this.passengers.map(pass => {
      if (pass.id === passenger.id) {
        pass = { ...passenger };
      }
      return pass
    })
  }

  removePassenger(passenger: Passenger) {
    this.passengers = this.passengers.filter(pass => pass.id !== passenger.id)
  }

  copy(passenger: Passenger): Passenger {
    return { ...passenger }
  }
}
