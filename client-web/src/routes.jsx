import { createBrowserRouter } from 'react-router-dom';
// import { loginLoader, verifyLoader } from './loaders/verify.loader';
import ErrorElement from './components/ErrorElement';
import Homepage from './pages/Homepage.jsx';
import Offers from './components/packages/Offers.jsx';
import International from './components/packages/International.jsx';
import VRServicePage from './components/features/VRServicePage.jsx';
import PlanWithUs from './components/travel-guide/PlanWithUs.jsx';
import UnderDevelopment from './components/Development.jsx';

const routes = createBrowserRouter([
	{
		path: '',
		// element: , // Dashboard avse ahiya
		// loader: verifyLoader,
		// errorElement: <ErrorElement />,
		children: [
			{ path: '', element: <Homepage /> },
			{ path: '/international', element: <International /> },
			{ path: '/offers', element: <Offers /> },
			{ path: '/vr-service-page', element: <VRServicePage /> },
			{ path: '/plan-with-us', element: <PlanWithUs /> },
		],
	},
	{
		path: '*',
		element: <UnderDevelopment />,
	},
]);
export default routes;
