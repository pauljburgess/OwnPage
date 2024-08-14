import { NavLink, Link } from "react-router-dom"

const Nav = () => {
 
 
 const navBar = (
  <div className="nav">
     <Link to="/"><div>Home</div></Link>
     <Link to="/About"><div>About</div></Link>
     <Link to="/WebDev"><div>Web Dev</div></Link>
     <Link to="/DataScience"><div>Data Science</div></Link>
  </div>
  )

  return (
    <div className="nav">
     {navBar}
    </div>
  )
}

export default Nav