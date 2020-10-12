import React from 'react'
import './UserAuth.css'
import logo from '../ui.svg'
import {auth, provider} from '../firebase'
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer"
import glogo from '../google.png'

function UserAuth() {
const [state, dispatch] = useStateValue();

const signIn = (e) => {
	auth.signInWithPopup(provider).then(function(result) {
		dispatch({
			type: actionTypes.SET_USER,
			user: result.user,
		})
	})
	.catch((error) => {
		alert(error.message)
			})
		}

	return (
		<div className="login">
		<div className="login__container">
			<img src={logo} alt="logo"/>
			<h1> HashChatz </h1>
			<div className="google__signin" onClick={signIn}>
			<h1>Sign in with</h1>
			<img src={glogo} alt="GOOGLE"/>
			</div>
		</div>
		</div>
	)
}

export default UserAuth