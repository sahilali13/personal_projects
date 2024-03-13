import { useState } from 'react';

import { Heading, InputField, Button } from '../widgets/ProductsFormWidgets';

export default function ProductsForm({
	handleClose,
	handleSubmit,
	initialData,
	isAddForm,
	existingProducts,
}) {
	function generateUniqueId() {
		return Date.now().toString(36) + Math.random().toString(3);
	}

	const [name, setName] = useState(initialData.name || '');
	const [category, setCategory] = useState(initialData.category || '');
	const [price, setPrice] = useState(
		initialData.price ? initialData.price.toString() : ''
	);
	const [stockQuantity, setStockQuantity] = useState(
		initialData.stockQuantity ? initialData.stockQuantity.toString() : ''
	);
	const [id, setId] = useState(
		initialData.id || generateUniqueId().toString()
	);

	function handleFormSubmit(e) {
		e.preventDefault();

		if (
			name.trim() === '' ||
			category.trim() === '' ||
			isNaN(parseFloat(price)) ||
			isNaN(parseInt(stockQuantity)) ||
			parseFloat(price) < 0 ||
			parseInt(stockQuantity) < 0
		) {
			alert('Please fill out all fields correctly.');
			return;
		}

		if (
			isAddForm &&
			existingProducts.some((product) => product.id === id.trim())
		) {
			alert('A product with the same id already exists.');
			return;
		}

		handleSubmit({
			name,
			category,
			price: parseFloat(price),
			stockQuantity: parseInt(stockQuantity),
			id,
		});
		if (isAddForm) {
			setName('');
			setCategory('');
			setPrice('');
			setStockQuantity('');
			setId('');
		}
		if (isAddForm) {
			alert('Product Added');
		} else {
			alert('Product Updated');
		}
	}

	return (
		<div className=' bg-stone-200 rounded-lg shadow-lg overflow-auto max-h-[83%] min-h-[83%]'>
			<form
				onSubmit={handleFormSubmit}
				className='max-w-sm mx-auto mt-6 '
			>
				<Heading
					type={isAddForm ? 'add' : 'edit'}
					productName={initialData.name}
				/>
				<InputField
					label='Name'
					id='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
					type='text'
					maxLength={30}
				/>
				<InputField
					label='Category'
					id='category'
					value={category}
					onChange={(e) => setCategory(e.target.value)}
					type='text'
					maxLength={30}
				/>
				<InputField
					label='Price'
					id='price'
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					type='text'
					min={0}
				/>
				<InputField
					label='Stock Quantity'
					id='stockQuantity'
					value={stockQuantity}
					onChange={(e) => setStockQuantity(e.target.value)}
					type='number'
					min={0}
				/>
				<div className='flex justify-between'>
					<Button type='submit'>
						{isAddForm ? 'Add' : 'Update'}
					</Button>
					<Button
						type='button'
						onClick={handleClose}
					>
						Cancel
					</Button>
				</div>
			</form>
		</div>
	);
}
