import { Component , Input } from '@angular/core';

@Component({
	selector: 'app-person-stats',
	templateUrl: './stats.html',
})
export class PersonStatsComponent {
	@Input() invited;
	@Input() attending;
	@Input() guests;
}
