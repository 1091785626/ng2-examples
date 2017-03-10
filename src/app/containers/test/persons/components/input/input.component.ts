import { Component , Output , EventEmitter } from '@angular/core';

@Component({
	selector: 'app-persons-input',
	templateUrl: './input.html',
})
export class PersonsInputComponent {
	@Output() addPerson = new EventEmitter();
	constructor() {
	}
	add(personInput) {
		this.addPerson.emit(personInput.value);
		personInput.value = '';
    }
}
