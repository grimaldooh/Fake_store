import React from 'react'
import {useRoutes, BrowserRouter} from 'react-router-dom'
import Home from '../home'
import MyAccount from '../myAccount'
import NotFound from '../notFound'
import MyOrder from '../myOrder'
import SignIn from '../signIn'
import MyOrders from '../myOrders'
import Navbar from '../../Components/layout/Navbar'
import Layout from '../../Components/layout/Layout'



const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/clothes', element: <Home/>},
    {path: '/electronics', element: <Home/>},
    {path: '/fornitures', element: <Home/>},
    {path: 'sign-in', element: <SignIn/>},
    {path: '/myAccount', element: <MyAccount/>},
    {path: '/myOrder', element: <MyOrder/>},
    {path: '/myOrders', element: <MyOrders/>},
    {path : 'Others', element: <NotFound/>},
  ]);
  return routes;
}



export default function App() {
    return (
      <BrowserRouter>
        <Layout>
          <Navbar/>
        </Layout>
        <AppRoutes />
      </BrowserRouter>
    )
  }
