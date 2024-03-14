import { HashRouter, Routes, Route } from 'react-router-dom';
import ProductsManagement from './Pages/ProductsManagement';
import OrdersManagement from './Pages/OrdersManagement';
import Navigation from './components/Navigation';
import Dashboard from './Pages/Dashboard';

function App() {
	return (
		<HashRouter>
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
		</HashRouter>
	);
}

export default App;
