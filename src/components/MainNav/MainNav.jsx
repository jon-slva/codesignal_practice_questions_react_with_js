import React from 'react'
import { NavLink } from 'react-router-dom'

function MainNav() {
	return (
		<div>
			<nav>
				<ul>
					<NavLink to='/' >Home</NavLink >
					{/* <NavLink to={/} >About</NavLink>
					<NavLink to={/} >Services</NavLink>
					<NavLink to={/} >Contact</NavLink> */}
				</ul>
			</nav>
		</div>
	)
}

export default MainNav
