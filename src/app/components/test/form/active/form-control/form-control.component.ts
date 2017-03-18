import { Component, OnInit, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldBase } from './field/root';

@Component({
	selector: 'app-form-control',
	templateUrl: './form-control.component.html'
})
export class FormControlComponent implements OnInit {
	@Input() field: FieldBase<any>;
	@Input() form: FormGroup;

	constructor() { }

	ngOnInit() { }
};
