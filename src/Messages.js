import React from 'react'
import "./Messages.css"


function Messages({message, timestamp, user,userImg}) {
	return (
		<div className="message">
			<img src={userImg} alt="img"/>
			<div>
				<h4>
				{user} <span className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
				</h4>
				<p>{message}</p>
			</div>
		</div>
		)
}

export default Messages