import { Component , Input , Output , EventEmitter , ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-person-list',
	styleUrls: ['./list.scss'],
	templateUrl: './list.html',
	// 与pure render类似
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonListComponent {
	@Input() people;
    @Output() addGuest = new EventEmitter();
    @Output() removeGuest = new EventEmitter();
    @Output() removePerson = new EventEmitter();
    @Output() toggleAttending = new EventEmitter();
	constructor() {
	}
}
