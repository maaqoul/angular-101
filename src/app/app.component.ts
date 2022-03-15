
import { Component } from "@angular/core";

type stringOrUndefined = string | undefined;

interface child {
  name: string;
  age: number;
}
export interface Passenger {
  id: number;
  fullName: string;
  checkedIn: boolean;
  checkInDate: number;
  children?: child[];
  baggage?: stringOrUndefined;
}
@Component({
  selector: 'app-component',
  template: `<h1>{{title + '!'}}</h1>
   <button (click)="changeValue()">add value</button>
   <input type="text" [disabled]="isHappy" [value]="inputValue" (input)="onInputHandler($event.target.value)"/>
   <div *ngIf="inputValue.length else elseT">
    <h2>searching for... {{inputValue}}</h2>
   </div>
   <ng-template #elseT>
    <div>type something</div>
   </ng-template>
   <ul> 
    <li *ngFor="let passenger of passengers; let i = index">
    {{i}} - {{passenger.fullName}}
    </li>
   </ul>
   <span>-----------</span>
   <ul> 
    <ng-template ngFor let-passenger [ngForOf]="passengers" let-i="index"> 
    <li>
    {{i}} - {{passenger.fullName}}
    </li>
    </ng-template>
   </ul>
  `,
  styleUrls: ['app.component.scss'],

})

export class AppComponent {
  title: string = 'Angular 101';
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = false;
  inputValue: string = '';
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
  onInputHandler(value: string) {
    this.inputValue = value
  }

  changeValue() {
    this.inputValue = "Angular 101";
  }
}