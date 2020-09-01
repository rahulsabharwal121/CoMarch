import React from 'react'
import "./Header.css"
import {Avatar} from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './StateProvider'
import logo from './ui.png'


 function Header() {
 	const [{user}] = useStateValue();
 	return (
 		<div className="header">
		<div className="header__left">
			<img className="cmlogo" src={logo} alt="Logo"/><h1>CoMarch</h1>
		</div>
		<div className="header__right">
			<Avatar className="header__avatar" alt={user?.displayName} src={user?.photoURL}/>
		</div>
		</div>
 	)
 }
 export default Header