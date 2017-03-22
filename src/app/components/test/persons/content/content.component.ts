import { Component, AfterViewInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-persons-content',
	templateUrl: './content.html',
})
export class PersonsContentComponent implements AfterViewInit {
	@Input() actions;
	@Input() percentAttendance;
	constructor(private store: Store<any>) {
	}
	ngAfterViewInit () {
		console.log(this.actions);
		console.log(this.percentAttendance);
	}
	resetParty() {
		this.actions.resetParty();
	}
}

