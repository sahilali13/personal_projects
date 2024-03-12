import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsManagement from './Pages/ProductsManagement';

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
