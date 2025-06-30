import { createBrowserRouter } from 'react-router-dom';
// import { loginLoader, verifyLoader } from './loaders/verify.loader';
import ErrorElement from './components/ErrorElement';
import Homepage from './pages/Homepage.jsx';
import Offers from './components/packages/Offers.jsx';
import International from './components/packages/International.jsx';
import VRServicePage from './components/features/VRServicePage.jsx';
import PlanWithUs from './components/travel-guide/PlanWithUs.jsx';
import UnderDevelopment from './components/Development.jsx';
import RegisterPage from './pages/agency/RegisterPage.jsx';
import LoginPage from './pages/agency/LoginPage.jsx';
import DashboardPage from './pages/agency/Dashboard.jsx';
import Community from './pages/Community.jsx';
import AboutUs from './components/AboutUs.jsx';
import VideoPage from './components/features/VideoPage.jsx';
import ModelsPage from './components/features/3DModel.jsx';
import AITourPlannerPage from './components/travel-guide/AiTourPlanner.jsx';

const routes = createBrowserRouter([
	{
		path: '',
		// element: , // Dashboard avse ahiya
		// loader: verifyLoader,
		// errorElement: <ErrorElement />,
		children: [
			{ path: '', element: <Homepage /> },
			{ path: '/packages', element: <International/> },
			{ path: '/offers', element: <Offers /> },
			{ path: '/vr-service-page', element: <VRServicePage /> },
			{ path: '/plan-with-us', element: <PlanWithUs /> },
			{ path: '/community', element: <Community /> },
				{ path: '/aboutus', element: <AboutUs /> },
				{ path: '/videopage', element: <VideoPage /> },
				{ path: '/3dmodel', element: <ModelsPage /> },
				{ path: '/aitour', element: <AITourPlannerPage /> }
		],
	},
	{
		path: 'agency',
		// element: , // Dashboard avse ahiya
		// loader: verifyLoader,
		// errorElement: <ErrorElement />,
		children: [
			{ path: 'register', element: <RegisterPage /> },
			{ path: 'login', element: <LoginPage /> },
			{ path: 'dashboard', element: <DashboardPage /> },
		],
	},
	{
		path: '*',
		element: <UnderDevelopment />,
	},
]);
export default routes;
