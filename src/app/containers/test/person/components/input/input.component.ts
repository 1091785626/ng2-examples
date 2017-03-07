import { Component , Output , EventEmitter } from '@angular/core';

@Component({
	selector: 'app-person-input',
	templateUrl: './input.html',
})
export class PersonInputComponent {
	@Output() addPerson = new EventEmitter();
	constructor() {
	}
	add(personInput) {
		this.addPerson.emit(personInput.value);
		personInput.value = '';
    }
}
