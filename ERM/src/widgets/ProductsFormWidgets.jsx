export function Heading({ type, productName }) {
	let heading;
	if (type === 'add') {
		heading = 'New Product';
	} else if (type === 'edit') {
		heading = 'Edit ' + productName;
	}
	return (
		<h2 className='text-3xl font-semibold mb-4 text-entntblue'>
			{heading}
		</h2>
	);
}

export function Button({ type, onClick, children }) {
	let css =
		'text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-24';
	if (type === 'button') {
		css += ' bg-gray-400 hover:bg-gray-500';
	} else if (type === 'submit') {
		css += ' bg-entntblue hover:bg-blue-600';
	}
	return (
		<button
			className={css}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export function InputField({
	label,
	id,
	value,
	onChange,
	type,
	maxLength,
	min,
}) {
	return (
		<div className='mb-4'>
			<label
				className='block mb-1 font-semibold'
				htmlFor={id}
			>
				{label}:
			</label>
			<input
				type={type}
				id={id}
				value={value}
				onChange={onChange}
				className='border p-2 w-full bg-stone-300 shadow-inner'
				maxLength={maxLength}
				min={min}
			/>
		</div>
	);
}
