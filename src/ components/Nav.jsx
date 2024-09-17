import { NavLink, Link } from "react-router-dom"

const Nav = () => {
 
 
 const navBar = (
  <div className="nav">
     <Link to="/"><div className="link">Home</div></Link>
     <Link to="/About"><div className="link">About</div></Link>
     <Link to="/WebDev"><div className="link">Web Dev</div></Link>
     <Link to="/DataScience"><div className="link">Data Science</div></Link>
     <Link to="/Engineering"><div className="link">Engineering</div></Link>
  </div>
  )

  return (
    <div className="nav">
     {navBar}
    </div>
  )
}

export default Nav