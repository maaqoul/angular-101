import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { Passenger } from "src/assets/passengers";

@Component({
    selector: 'passenger-detail',
    templateUrl: 'passenger-detail.component.html',
    styleUrls: ['passenger-detail.component.scss']
})

export class PassengerDetailComponent implements OnChanges {
    @Input()
    item: Passenger;

    @Output()
    remove: EventEmitter<Passenger> = new EventEmitter();

    @Output()
    edit: EventEmitter<Passenger> = new EventEmitter();

    editing: boolean = false;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes) this.item = { ...changes.item.currentValue }
    }

    getStatusClass({ checkedIn }: { checkedIn: boolean }): { [key: string]: boolean } {
        return { 'checked-in': checkedIn, 'checked-out': !checkedIn }
    }

    toggleEdit() {
        if (this.editing) this.edit.emit(this.item);
        this.editing = !this.editing
    }

    handleOnNameChange(value: string) {
        this.item.fullName = value;
    }

    onRemove() {
        this.remove.emit(this.item)
    }
}