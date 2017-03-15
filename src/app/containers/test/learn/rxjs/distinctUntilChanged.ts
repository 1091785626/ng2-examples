import { Observable } from 'rxjs/Rx';
// signature: distinctUntilChanged(compare: function): Observable

// 只有当前的值与上个值不同，才 emit 。
export const distinctUntilChanged = () => {
	// 仅仅输出那些与上个值不同的值
	const myArrayWithDuplicatesInARow = Observable
		.from([1, 1, 2, 2, 3, 1, 2, 3]);

	const distinctSub = myArrayWithDuplicatesInARow
		.distinctUntilChanged()
		// 输出：1, 2, 3, 1, 2, 3
		.subscribe(val => console.log('DISTINCT SUB: ', val));

	const nonDistinctSub = myArrayWithDuplicatesInARow
		// 输出：1, 1, 2, 2, 3, 1, 2, 3
		.subscribe(val => console.log('NON DISTINCT SUB:', val));

	const sampleObject = { name: 'Test' };
	const myArrayWithDuplicateObjects = Observable.from([sampleObject, sampleObject]);

	const nonDisinctObjects = myArrayWithDuplicateObjects
		.distinctUntilChanged()
		// 输出：`DISTINCT OBJECTS: { name: 'Test' }`
		.subscribe(val => console.log('DISTINCT OBJECTS', val));
};
