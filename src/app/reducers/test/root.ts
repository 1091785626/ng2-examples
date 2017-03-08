import { testMain } from './main';
import { testPerson } from './person';
import { testPersonReset } from './person.reset';
import { testFilter } from './filter';

export const test = {
	testMain,
	testPerson: testPersonReset(testPerson),
	testFilter
};
