import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';


import StudentsPage from './pages/StudentsPage';
import LoginPage from './pages/LoginPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Profil from './layouts/dashboard/header/Settings';
import Emploi from './pages/Emploi';
import Reclamations from './pages/Reclamations'

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'Students', element: <StudentsPage /> },
        { path: 'emploi', element: <Emploi /> },
        { path: 'reclamation', element: <Reclamations /> },
        { path: 'Profil', element: <Profil /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'emploi',
      element: <Emploi />,
    },

    {
      path: 'Profil',
      element: <Profil />,
    },

    {
      path: 'reclamation',
      element: <Reclamations />,
    },
    

  ]);

  return routes;
}
