import './App.css'
import "./GlobalStyle/GlobalStyle.scss"
import Header from './components/Navbar/Header'
import MainRoutes from './routes/MainRoutes'

function App() {

  return (
    <div className="App">
      <Header />
      <MainRoutes />
    </div>
  )
}

export default App
