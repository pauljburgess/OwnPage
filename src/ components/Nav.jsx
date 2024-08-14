import { NavLink, Link } from "react-router-dom"

const Nav = () => {
 
 
 const navBar = (
  <div className="nav">
     <Link to="/"><div>Home</div></Link>
     <Link to="/about"><div>About</div></Link>
     <Link to="/WebDevProjects"><div>Web Dev</div></Link>
     <Link to="/DataScienceProjects"><div>Data Science</div></Link>
  </div>
  )

  return (
    <div className="nav">
     {navBar}
    </div>
  )
}

export default Nav