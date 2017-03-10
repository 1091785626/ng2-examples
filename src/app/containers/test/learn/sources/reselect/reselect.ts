// 模仿reselect 写的一个关于记忆存储的
const defaultMemoize = (...arg) => {
	let a = 1;
	let b = 1;
	return () => {
		const summ = a + b;
		a++;
		b++;
		return summ;
	};
};
const createSelectorCretor = (memoize) => {
	return (...arg) => {
		const selector = memoize(...arg);
		return selector;
	};
};
export const createSelector = createSelectorCretor(defaultMemoize);

// 实际是是利用这一的原理进行数据缓存，外部调用sum();a,b值改变
// let a = 1;
// let b = 1;

// export const sum = () => {
// 	const summ = a + b;
// 	a++;
// 	b++;
// 	return summ;
// };
