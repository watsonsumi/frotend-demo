import { createBrowserRouter, Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

// import LayoutRegisterNum from '../components/RegistroTelefonico/LayoutRegisterNum';
// import AboutPage from '../pages/AboutPage';
// import { Carrito } from '../pages/Carrito';
// import SettingsPage from '../pages/ConfiguracionPage';
import HomePage from '../pages/HomePage';
import SolicitudPage from '../pages/SolicitudPage';
// import OrdersPage from '../pages/MisPedidosPage';
import NavBarLayout from '../layouts/NavBarLayout';
// import { CarritoPaso3 } from '../components/CarritoInterfaces/CarritoPaso3';
// import ConfirmSms from '../pages/ConfirmSms';
import LoginPage from '../pages/LoginPage';
// import SolicitudPage from '../pages/SolicitudPage';
import { useSelector } from 'react-redux';
// const { user } = useSelector(store => store.user);
const estado = localStorage.getItem('user');
JSON.parse(localStorage.getItem('user'));
console.log(estado);
// const { isAuthenticated } = useSelector(store => store.Auth);
// console.log(isAuthenticated);
// const { isAuthenticated } = useSelector(store => store.Auth);
// export const router = createBrowserRouter([
// 	{
// 		element: <PublicRoutes />,
// 		children: [
// 			{
// 				path: '/',
// 				element: <LoginPage />,
// 			},
// 		],
// 	},
// 	{
// 		element: <PrivateRoutes />,
// 		children: [
// 			{
// 				element: <NavBarLayout />,
// 				children: [
// 					{
// 						path: '/home',
// 						element: <HomePage />,
// 					},
// 					{
// 						path: '/service',
// 						element: <SolicitudPage />,
						
// 					},
// 					{
// 						path: '/settings',
// 					},
// 					{
// 						path: '*',
// 						element: <Navigate to='/home' />,
// 					},
// 				],
// 			},
// 		],
// 	},
// ]);

function RoutesA() {

const { isAuthenticated } = useSelector(store => store.Auth);
console.log(isAuthenticated);
	return (
	 
		// <BrowserRouter>
	  <Routes>
		<Route
					path='/'
					element={isAuthenticated ? <Navigate to='/admin' /> : <LoginPage />}
				/>
		<Route
					path='/admin'
					element={
						!isAuthenticated ? (
							<Navigate to='/' />
						) : (
							<HomePage />
						)
					}
				>
				<Route index element={<HomePage />} />
		</Route>
			</Routes>
	  
			// </BrowserRouter>
	);
  }
  
  export default RoutesA;