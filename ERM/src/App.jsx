import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsManagement from './Pages/ProductsManagement';
import OrdersManagement from './Pages/OrdersManagement';
import Navigation from './components/Navigation';
import Dashboard from './Pages/Dashboard';

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route
					path='/'
					element={<Dashboard />}
				/>
				<Route
					path='/products-management'
					element={<ProductsManagement />}
				/>
				<Route
					path='/orders-management'
					element={<OrdersManagement />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
