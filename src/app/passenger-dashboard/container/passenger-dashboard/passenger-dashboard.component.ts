import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-dashboard',
    templateUrl: 'passenger-dashboard.component.html',
    styleUrls: ['passenger-dashboard.component.scss'],
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[]

    ngOnInit(): void {
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

    handleRemove(passenger: Passenger): void {
        this.passengers = this.passengers.filter(item => item.id !== passenger.id)
    }

    handleEdit(passenger: Passenger) {
        this.passengers = this.passengers.map(item => {
            if (item.id === passenger.id) {
                item = Object.assign({}, item, passenger);
                return item
            }
            return item
        })
    }
} 