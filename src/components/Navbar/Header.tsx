
import logo from "../../assets/HeaderLogo.png"
import SearchIcon from '@mui/icons-material/Search';
import { NavLink, useNavigate } from 'react-router-dom'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export default function Header() {
  const navigate = useNavigate()
  return (
    <header>
      <section>
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>Pizza Time</h1>
        </div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/promo">Promo</NavLink>
          <SearchIcon />
          <LocalGroceryStoreIcon onClick={() => navigate("/basket")} />
          <button >SIGN IN</button>
        </nav>
      </section>
    </header>
  )
}
