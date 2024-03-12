import { ProductsTD } from '../widgets/ProductsTD';
import { initialProducts } from '../assets/InitialProducts';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { useState } from 'react';
import Header from '../components/Header';
import ProductsTable from '../components/ProductsTable';

let sortedOrders = { name: 1, category: 1, price: 1, stockQuantity: 1 };

export default function ProductsManagement() {
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredProducts, setFilteredProducts] = useState(initialProducts);

	function handleSearch(event) {
		setSearchTerm(event.target.value);
		const filtered = initialProducts.filter((product) =>
			product.name
				.toLowerCase()
				.includes(event.target.value.toLowerCase())
		);
		setFilteredProducts(filtered);
	}

	function sortTable(sortCriteria) {
		const sorted = [...filteredProducts];
		console.log(sortedOrders);

		if (sortCriteria === 'Name') {
			sorted.sort(
				(a, b) => sortedOrders.name * a.name.localeCompare(b.name)
			);
			sortedOrders.name = sortedOrders.name === 1 ? -1 : 1;
		} else if (sortCriteria === 'Category') {
			sorted.sort(
				(a, b) =>
					sortedOrders.category * a.category.localeCompare(b.category)
			);
			sortedOrders.category = sortedOrders.category === 1 ? -1 : 1;
		} else if (sortCriteria === 'Price') {
			sorted.sort((a, b) => sortedOrders.price * (a.price - b.price));
			sortedOrders.price = sortedOrders.price === 1 ? -1 : 1;
		} else {
			sorted.sort(
				(a, b) =>
					sortedOrders.stockQuantity *
					(a.stockQuantity - b.stockQuantity)
			);
			sortedOrders.stockQuantity =
				sortedOrders.stockQuantity === 1 ? -1 : 1;
		}

		setFilteredProducts(sorted);
	}

	const productsTable = filteredProducts.map((product, index) => (
		<tr key={product.name}>
			<ProductsTD>{index + 1}</ProductsTD>
			<ProductsTD>{product.name}</ProductsTD>
			<ProductsTD>{product.category}</ProductsTD>
			<ProductsTD>{product.price}</ProductsTD>
			<ProductsTD>{product.stockQuantity}</ProductsTD>
			<ProductsTD>
				<div className='flex justify-evenly'>
					<button>
						<MdEdit className='text-lg text-entntblue hover:text-2xl' />
					</button>
					<button className=' text-red-500 text-lg hover:text-2xl'>
						<MdDeleteForever />
					</button>
				</div>
			</ProductsTD>
		</tr>
	));

	return (
		<div className='h-screen p-8 flex-row justify-between'>
			<Header>Products</Header>
			<div className=' p-2 pr-2 flex justify-between'>
				<input
					type='text'
					placeholder='Search by product name'
					value={searchTerm}
					onChange={handleSearch}
					className='p-2 border border-gray-300 rounded-lg w-10/12'
				/>
				<button className='p-2 bg-green-600 text-lg rounded-lg text-stone-50 hover:bg-green-400 hover:text-bold hover:text-white'>
					Add Product
				</button>
			</div>
			<ProductsTable
				handleSort={sortTable}
				productsList={productsTable}
			/>
		</div>
	);
}
