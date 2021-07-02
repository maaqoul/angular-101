import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Passenger } from "../../models/passenger.model";

@Component({
  selector: 'passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})


export class PassengerDetailComponent {
  @Input() passenger: Passenger;
  editing: boolean = false;

  @Output() edit: EventEmitter<Passenger> = new EventEmitter()
  @Output() remove: EventEmitter<Passenger> = new EventEmitter()


  public onInput(name: string): void {
    this.passenger.fullName = name
  }

  public onEditing() {
    if (this.editing) { this.edit.emit(this.passenger) }
    this.editing = !this.editing
  }

  public onRemove() {
    this.remove.emit(this.passenger)
  }
}
