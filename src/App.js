import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Layout/Main';
import About from './components/About/About';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Shop from './components/Shop/Shop';
import { ProductsAndCartLoaders } from './loaders/ProductAndCartLoaders';

function App() {


  const router = createBrowserRouter([
    {path:'/' , element:<Main></Main>, children:[
      {path:'/' ,
      loader: async () =>{
        return fetch('products.json')
      },
      element:<Shop></Shop>},
      {path:'/about', element:<About></About>},
      {path:'/orders',
      loader: ProductsAndCartLoaders,
      element:<Orders></Orders>},
      {path:'/inventory', element:<Inventory></Inventory>}
    ]},
    
  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
