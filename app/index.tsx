import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routesConfig } from './router-config';

const root_element = document.getElementById('root');
const router = createBrowserRouter(routesConfig);

if (root_element) {
  const react_root = createRoot(root_element);
  react_root.render(<RouterProvider router={router} />);
}
