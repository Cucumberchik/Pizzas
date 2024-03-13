import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home/Home'
import Basket from '../components/pages/Basket/Basket'
import Promo from '../components/pages/Promo/Promo'

export default function MainRoutes() {
  type TypeComponent = {
    path: string
    component: React.ReactElement
  }
  const PUBLCICK = [
    { path: "/", component: <Home /> },
    { path: '/basket', component: <Basket /> },
    { path: '/promo', component: <Promo /> }
  ]
  return (
    <Routes>
      {PUBLCICK.map((el: TypeComponent, id: number) => (
        <Route key={id} path={el.path} element={el.component} />
      ))}
    </Routes>
  )
}
