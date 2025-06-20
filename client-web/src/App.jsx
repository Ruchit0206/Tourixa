import { RouterProvider } from 'react-router-dom';
import StandardErrorBoundary from './components/StandardErrorBoundary';
import routes from './routes';
import './index.css';

function App() {
	return (
		<>
			<StandardErrorBoundary>
				<RouterProvider router={routes} />
			</StandardErrorBoundary>
		</>
	);
}

export default App;
