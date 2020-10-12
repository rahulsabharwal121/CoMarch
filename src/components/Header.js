import React from 'react'
import "./Header.css"
import {Avatar} from '@material-ui/core'
import { useStateValue } from '../StateProvider'
import logo from '../ui.svg'


 function Header() {
 	const [{user}] = useStateValue();
 	return (
 		<div className="header">
		<div className="header__left">
			<img className="cmlogo" src={logo} alt="Logo"/><h1>HashChatz</h1>
		</div>
		<div className="header__right">
			<Avatar className="header__avatar" alt={user?.displayName} src={user?.photoURL}/>
		</div>
		</div>
 	)
 }
 export default Header