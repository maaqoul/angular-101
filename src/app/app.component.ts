import { Component } from "@angular/core"


interface child {
  name: string;
  age: number;
}
interface Passenger {
  id: number;
  fullName: string;
  checkedIn: boolean;
  checkInDate: number | null;
  children?: child[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = "sqli Angular training"

  numberOne: number = 1;
  numberTwo: number = 2;

  isHappy: boolean = false;

  logo: string = "https://suisse.sqli.com/logo.png";

  name: string = "";



  passengers: Passenger[] = [
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


  public onInputHandle(event: any): void {
    this.name = event.target.value
  }
}
