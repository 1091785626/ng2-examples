import { Component , Input } from '@angular/core';

@Component({
	selector: 'app-persons-stats',
	templateUrl: './stats.html',
})
export class PersonsStatsComponent {
	@Input() invited;
	@Input() attending;
	@Input() guests;
}
