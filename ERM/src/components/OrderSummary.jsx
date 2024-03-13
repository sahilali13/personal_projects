import DateFromTimestamp from '../helpers/DateFromTimestamp';

import { OrderDetailRow } from '../widgets/TableWidgets';

export default function OrderSummary({ isOpen, order, onClose }) {
	if (!isOpen) return null;

	function renderOrderDetailRow(label, value) {
		return (
			<OrderDetailRow
				label={label}
				value={value}
			/>
		);
	}

	return (
		<>
			<div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90'></div>
			<dialog
				open={isOpen}
				className='fixed z-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center rounded-lg'
			>
				<div className='bg-white rounded-lg shadow-lg w-full max-w-lg overflow-hidden'>
					<div className='modal-content p-4'>
						<h2 className='text-lg font-bold mb-4'>
							Order Details
						</h2>
						<table className='w-full mb-4'>
							<tbody>
								{renderOrderDetailRow('Order ID', order.id)}
								{renderOrderDetailRow(
									'Customer Name',
									order.customerName
								)}
								{renderOrderDetailRow(
									'Order Date',
									DateFromTimestamp(order.orderDate)
								)}
								{renderOrderDetailRow('Status', order.status)}
								{renderOrderDetailRow(
									'Total Price',
									order.totalPrice.toFixed(2)
								)}
								{renderOrderDetailRow(
									'Estimated Delivery Date',
									DateFromTimestamp(
										order.estimatedDeliveryDate
									)
								)}
								{renderOrderDetailRow(
									'Payment Method',
									order.paymentMethod
								)}
								{renderOrderDetailRow(
									'Shipping Address',
									`${order.shippingAddress.street}, ${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.postalCode}`
								)}
							</tbody>
						</table>
						<h3 className='text-lg font-bold mt-4'>Items:</h3>
						<ul>
							{order.items.map((item) => (
								<li key={item.id}>
									{item.name} - Quantity: {item.quantity},
									Price: {item.price.toFixed(2)}
								</li>
							))}
						</ul>
						<button
							onClick={onClose}
							className='mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-96'
						>
							Close
						</button>
					</div>
				</div>
			</dialog>
		</>
	);
}