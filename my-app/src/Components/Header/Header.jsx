import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
	return (
		<div className='menu'>
			<div className='logo'>Cinema</div>
			<div className='menu-list'>
				<Link style={{textDecoration: "none"}} to='/'>Home</Link>
				<Link style={{textDecoration: "none"}} to='/about'>About</Link>
				<Link style={{textDecoration: "none"}} to='/Contact'>Contact</Link>
			</div>
		</div>
	)
}

export default Header
