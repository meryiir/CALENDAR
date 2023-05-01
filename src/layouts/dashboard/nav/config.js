// component
import SvgColor from '../../../components/svg-color';


// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Students',
    path: '/dashboard/Students',
    icon: icon('ic_user'),
  },
  {
    title: 'Emploi',
    path: '/dashboard/emploi',
    icon: icon('ic_cart'),
  },
  {
    title: 'Reclamation',
    path: '/dashboard/reclamation',
    icon: icon('ic_blog'),
  },
 
];

export default navConfig;
