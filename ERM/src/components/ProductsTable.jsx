import { ProductsTH } from '../widgets/ProductsTableWidgets';

export default function ProductsTable({ handleSort, productsList }) {
	return (
		<div className=' bg-stone-200 rounded-lg shadow-lg overflow-auto max-h-[83%] min-h-[83%]'>
			<table className='table-auto md:table-fixed'>
				<thead>
					<tr>
						<ProductsTH>#</ProductsTH>
						<ProductsTH handleSort={handleSort}>Name</ProductsTH>
						<ProductsTH handleSort={handleSort}>
							Category
						</ProductsTH>
						<ProductsTH handleSort={handleSort}>Price</ProductsTH>
						<ProductsTH handleSort={handleSort}>
							Stock Quantity
						</ProductsTH>
						<ProductsTH></ProductsTH>
					</tr>
				</thead>
				<tbody>{productsList}</tbody>
			</table>
		</div>
	);
}
