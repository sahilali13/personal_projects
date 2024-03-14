export const INITIAL_PRODUCTS = [
	{
		name: 'Laptop',
		category: 'Electronics',
		price: 999.99,
		stockQuantity: 50,
		id: '1',
	},
	{
		name: 'Smartphone',
		category: 'Electronics',
		price: 599.99,
		stockQuantity: 100,
		id: '2',
	},
	{
		name: 'Coffee Maker',
		category: 'Appliances',
		price: 49.99,
		stockQuantity: 30,
		id: '3',
	},
	{
		name: 'Running Shoes',
		category: 'Clothing',
		price: 79.99,
		stockQuantity: 75,
		id: '4',
	},
	{
		name: 'Backpack',
		category: 'Accessories',
		price: 39.99,
		stockQuantity: 50,
		id: '5',
	},
	{
		name: 'Laptop1',
		category: 'Electronics',
		price: 999.99,
		stockQuantity: 50,
		id: '6',
	},
	{
		name: 'Smartphone1',
		category: 'Electronics',
		price: 599.99,
		stockQuantity: 100,
		id: '7',
	},
	{
		name: 'Coffee Maker1',
		category: 'Appliances',
		price: 49.99,
		stockQuantity: 30,
		id: '8',
	},
	{
		name: 'Running Shoes1',
		category: 'Clothing',
		price: 79.99,
		stockQuantity: 75,
		id: '9',
	},
	{
		name: 'Backpack1',
		category: 'Accessories',
		price: 39.99,
		stockQuantity: 50,
		id: '10',
	},
	{
		name: 'Laptop2',
		category: 'Electronics',
		price: 999.99,
		stockQuantity: 50,
		id: '11',
	},
	{
		name: 'Smartphone2',
		category: 'Electronics',
		price: 599.99,
		stockQuantity: 100,
		id: '12',
	},
	{
		name: 'Coffee Maker2',
		category: 'Appliances',
		price: 49.99,
		stockQuantity: 30,
		id: '13',
	},
	{
		name: 'Running Shoes2',
		category: 'Clothing',
		price: 79.99,
		stockQuantity: 75,
		id: '14',
	},
	{
		name: 'Backpack2',
		category: 'Accessories',
		price: 39.99,
		stockQuantity: 50,
		id: '15',
	},
	{
		name: 'Laptop3',
		category: 'Electronics',
		price: 999.99,
		stockQuantity: 50,
		id: '16',
	},
	{
		name: 'Smartphone3',
		category: 'Electronics',
		price: 599.99,
		stockQuantity: 100,
		id: '17',
	},
	{
		name: 'Coffee Maker3',
		category: 'Appliances',
		price: 49.99,
		stockQuantity: 30,
		id: '18',
	},
	{
		name: 'Running Shoes3',
		category: 'Clothing',
		price: 79.99,
		stockQuantity: 75,
		id: '19',
	},
	{
		name: 'Backpack3',
		category: 'Accessories',
		price: 39.99,
		stockQuantity: 50,
		id: '20',
	},
];

export const INITIAL_ORDERS = [
	{
		id: '1',
		customerID: '1',
		orderDate: 1672552800 + 31556926,
		status: 'Pending',
		items: [
			{
				productId: '1',
				quantity: 2,
				price: 999.99,
			},
			{
				productId: '3',
				quantity: 1,
				price: 49.99,
			},
		],
		shippingAddress: {
			street: '123 Main St',
			city: 'New Delhi',
			state: 'Delhi',
			postalCode: '110001',
		},
		paymentMethod: 'Credit Card',
		totalPrice: 2050,
		deliveryDate: 1673652800 + 31556926,
	},
	{
		id: '2',
		customerID: '2',
		orderDate: 1675179600 + 31556926,
		status: 'Shipped',
		items: [
			{
				productId: '2',
				quantity: 3,
				price: 599.99,
			},
		],
		shippingAddress: {
			street: '456 Oak St',
			city: 'Mumbai',
			state: 'Maharashtra',
			postalCode: '400001',
		},
		paymentMethod: 'PayPal',
		totalPrice: 1800,
		deliveryDate: 1676289600 + 31556926,
	},
	{
		id: '3',
		customerID: '3',
		orderDate: 1677788400 + 31556926,
		status: 'Delivered',
		items: [
			{
				productId: '3',
				quantity: 1,
				price: 49.99,
			},
			{
				productId: '5',
				quantity: 2,
				price: 39.99,
			},
		],
		shippingAddress: {
			street: '789 Elm St',
			city: 'Bangalore',
			state: 'Karnataka',
			postalCode: '560001',
		},
		paymentMethod: 'Bank Transfer',
		totalPrice: 130,
		deliveryDate: 1678898400 + 31556926,
	},
	{
		id: '4',
		customerID: '4',
		orderDate: 1675180000 + 31556926,
		status: 'Pending',
		items: [
			{
				productId: '4',
				quantity: 2,
				price: 79.99,
			},
		],
		shippingAddress: {
			street: '321 Pine St',
			city: 'Chennai',
			state: 'Tamil Nadu',
			postalCode: '600001',
		},
		paymentMethod: 'Credit Card',
		totalPrice: 160,
		deliveryDate: 1676289600 + 31556926,
	},
	{
		id: '5',
		customerID: '5',
		orderDate: 1677788400 + 31556926,
		status: 'Pending',
		items: [
			{
				productId: '5',
				quantity: 1,
				price: 39.99,
			},
		],
		shippingAddress: {
			street: '987 Cedar St',
			city: 'Kolkata',
			state: 'West Bengal',
			postalCode: '700001',
		},
		paymentMethod: 'Bank Transfer',
		totalPrice: 39.99,
		deliveryDate: 1678898400 + 31556926,
	},
	{
		id: '6',
		customerID: '6',
		orderDate: 1672552800 + 31556926,
		status: 'Pending',
		items: [
			{
				productId: '6',
				quantity: 2,
				price: 999.99,
			},
		],
		shippingAddress: {
			street: '123 Main St',
			city: 'New Delhi',
			state: 'Delhi',
			postalCode: '110001',
		},
		paymentMethod: 'Credit Card',
		totalPrice: 2000,
		deliveryDate: 1673652800 + 31556926,
	},
	{
		id: '7',
		customerID: '7',
		orderDate: 1675179600 + 31556926,
		status: 'Shipped',
		items: [
			{
				productId: '7',
				quantity: 3,
				price: 599.99,
			},
		],
		shippingAddress: {
			street: '456 Oak St',
			city: 'Mumbai',
			state: 'Maharashtra',
			postalCode: '400001',
		},
		paymentMethod: 'PayPal',
		totalPrice: 1800,
		deliveryDate: 1676289600 + 31556926,
	},
	{
		id: '8',
		customerID: '1',
		orderDate: 1677788400 + 31556926,
		status: 'Delivered',
		items: [
			{
				productId: '8',
				quantity: 1,
				price: 49.99,
			},
			{
				productId: '10',
				quantity: 2,
				price: 39.99,
			},
		],
		shippingAddress: {
			street: '789 Elm St',
			city: 'Bangalore',
			state: 'Karnataka',
			postalCode: '560001',
		},
		paymentMethod: 'Bank Transfer',
		totalPrice: 130,
		deliveryDate: 1678898400 + 31556926,
	},
	{
		id: '9',
		customerID: '2',
		orderDate: 1675180000 + 31556926,
		status: 'Pending',
		items: [
			{
				productId: '9',
				quantity: 2,
				price: 79.99,
			},
		],
		shippingAddress: {
			street: '321 Pine St',
			city: 'Chennai',
			state: 'Tamil Nadu',
			postalCode: '600001',
		},
		paymentMethod: 'Credit Card',
		totalPrice: 160,
		deliveryDate: 1676289600 + 31556926,
	},
	{
		id: '10',
		customerID: '3',
		orderDate: 1677788400 + 31556926,
		status: 'Pending',
		items: [
			{
				productId: '10',
				quantity: 1,
				price: 39.99,
			},
		],
		shippingAddress: {
			street: '987 Cedar St',
			city: 'Kolkata',
			state: 'West Bengal',
			postalCode: '700001',
		},
		paymentMethod: 'Bank Transfer',
		totalPrice: 39.99,
		deliveryDate: 1678898400 + 31556926,
	},
	{
		id: '11',
		customerID: '3',
		orderDate: 1672552800 + 31556926,
		status: 'Pending',
		items: [
			{
				productId: '11',
				quantity: 2,
				price: 999.99,
			},
		],
		shippingAddress: {
			street: '123 Main St',
			city: 'New Delhi',
			state: 'Delhi',
			postalCode: '110001',
		},
		paymentMethod: 'Credit Card',
		totalPrice: 2000,
		deliveryDate: 1673652800 + 31556926,
	},
	{
		id: '12',
		customerID: '4',
		orderDate: 1675179600 + 31556926,
		status: 'Shipped',
		items: [
			{
				productId: '12',
				quantity: 3,
				price: 599.99,
			},
		],
		shippingAddress: {
			street: '456 Oak St',
			city: 'Mumbai',
			state: 'Maharashtra',
			postalCode: '400001',
		},
		paymentMethod: 'PayPal',
		totalPrice: 1800,
		deliveryDate: 1676289600 + 31556926,
	},
	{
		id: '13',
		customerID: '5',
		orderDate: 1677788400 + 31556926,
		status: 'Delivered',
		items: [
			{
				productId: '13',
				quantity: 1,
				price: 49.99,
			},
			{
				productId: '15',
				quantity: 2,
				price: 39.99,
			},
		],
		shippingAddress: {
			street: '789 Elm St',
			city: 'Bangalore',
			state: 'Karnataka',
			postalCode: '560001',
		},
		paymentMethod: 'Bank Transfer',
		totalPrice: 130,
		deliveryDate: 1678898400 + 31556926,
	},
	{
		id: '14',
		customerID: '6',
		orderDate: 1675180000 + 31556926,
		status: 'Pending',
		items: [
			{
				productId: '14',
				quantity: 2,
				price: 79.99,
			},
		],
		shippingAddress: {
			street: '321 Pine St',
			city: 'Chennai',
			state: 'Tamil Nadu',
			postalCode: '600001',
		},
		paymentMethod: 'Credit Card',
		totalPrice: 160,
		deliveryDate: 1676289600 + 31556926,
	},
	{
		id: '15',
		customerID: '7',
		orderDate: 1677788400 + 31556926,
		status: 'Pending',
		items: [
			{
				productId: '15',
				quantity: 1,
				price: 39.99,
			},
		],
		shippingAddress: {
			street: '987 Cedar St',
			city: 'Kolkata',
			state: 'West Bengal',
			postalCode: '700001',
		},
		paymentMethod: 'Bank Transfer',
		totalPrice: 39.99,
		deliveryDate: 1678898400 + 31556926,
	},
	{
		id: '16',
		customerID: '1',
		orderDate: 1672552800 + 31556926,
		status: 'Pending',
		items: [
			{
				productId: '16',
				quantity: 2,
				price: 999.99,
			},
		],
		shippingAddress: {
			street: '123 Main St',
			city: 'New Delhi',
			state: 'Delhi',
			postalCode: '110001',
		},
		paymentMethod: 'Credit Card',
		totalPrice: 2000,
		deliveryDate: 1673652800 + 31556926,
	},
	{
		id: '17',
		customerID: '2',
		orderDate: 1675179600 + 31556926,
		status: 'Shipped',
		items: [
			{
				productId: '17',
				quantity: 3,
				price: 599.99,
			},
		],
		shippingAddress: {
			street: '456 Oak St',
			city: 'Mumbai',
			state: 'Maharashtra',
			postalCode: '400001',
		},
		paymentMethod: 'PayPal',
		totalPrice: 1800,
		deliveryDate: 1676289600 + 31556926,
	},
	{
		id: '18',
		customerID: '3',
		orderDate: 1677788400 + 31556926,
		status: 'Delivered',
		items: [
			{
				productId: '18',
				quantity: 1,
				price: 49.99,
			},
			{
				productId: '20',
				quantity: 2,
				price: 39.99,
			},
		],
		shippingAddress: {
			street: '789 Elm St',
			city: 'Bangalore',
			state: 'Karnataka',
			postalCode: '560001',
		},
		paymentMethod: 'Bank Transfer',
		totalPrice: 130,
		deliveryDate: 1678898400 + 31556926,
	},
	{
		id: '19',
		customerID: '4',
		orderDate: 1675180000 + 31556926,
		status: 'Pending',
		items: [
			{
				productId: '19',
				quantity: 2,
				price: 79.99,
			},
		],
		shippingAddress: {
			street: '321 Pine St',
			city: 'Chennai',
			state: 'Tamil Nadu',
			postalCode: '600001',
		},
		paymentMethod: 'Credit Card',
		totalPrice: 160,
		deliveryDate: 1676289600 + 31556926,
	},
	{
		id: '20',
		customerID: '5',
		orderDate: 1677788400 + 31556926,
		status: 'Pending',
		items: [
			{
				productId: '20',
				quantity: 1,
				price: 39.99,
			},
		],
		shippingAddress: {
			street: '987 Cedar St',
			city: 'Kolkata',
			state: 'West Bengal',
			postalCode: '700001',
		},
		paymentMethod: 'Bank Transfer',
		totalPrice: 39.99,
		deliveryDate: 1678898400 + 31556926,
	},
];

export const CUSTOMERS = [
	{
		customerID: '1',
		customerName: 'Rahul Gupta',
	},
	{
		customerID: '2',
		customerName: 'Sunita Patel',
	},
	{
		customerID: '3',
		customerName: 'Anjali Reddy',
	},
	{
		customerID: '4',
		customerName: 'Rajesh Sharma',
	},
	{
		customerID: '5',
		customerName: 'Priya Singh',
	},
	{
		customerID: '6',
		customerName: 'Amit Kumar',
	},
	{
		customerID: '7',
		customerName: 'Neha Verma',
	},
];
