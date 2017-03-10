import { testMain } from './main';
import { testPersons } from './persons';
import { testPersonsReset } from './persons.reset';
import { testFilter } from './filter';

export const test = {
	testMain,
	testPersons: testPersonsReset(testPersons),
	testFilter
};
