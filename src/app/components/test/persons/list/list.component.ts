import { Component , Input , Output , EventEmitter , ChangeDetectionStrategy } from '@angular/core';
// import 'style-loader!./list.scss';
@Component({
	selector: 'app-persons-list',
	templateUrl: './list.html',
	styleUrls: ['./list.scss'],
	// 与pure render类似
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonsListComponent {
	@Input() persons;
	@Input() filter;
    @Output() addGuest = new EventEmitter();
    @Output() removeGuest = new EventEmitter();
    @Output() removePerson = new EventEmitter();
    @Output() toggleAttending = new EventEmitter();
	constructor() {
	}
}
