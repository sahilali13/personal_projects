import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsManagement from './Pages/ProductsManagement';
import OrdersManagement from './Pages/OrdersManagement';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<ProductsManagement />}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
