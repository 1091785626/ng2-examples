import { createSelector } from 'reselect';
const personsSelector = state => state.testPersons;
const filterSelector = state => state.testFilter;

export const dataSelector = createSelector(
	personsSelector, filterSelector,
	(persons, filter) => ({
		total: persons.length,
		persons: persons.filter(filter),
		attending: persons.filter(person => person.attending).length,
		guests: persons.reduce((acc, curr) => acc + curr.guests, 0)
	})
);
export const percentAttendingSelector = createSelector(
	personsSelector,
	(persons) => {
		const totalAttending = persons.filter(person => person.attending).length;
		const total = persons.length;
		return total > 0 ? (totalAttending / total) * 100 : 0;
	}
);
