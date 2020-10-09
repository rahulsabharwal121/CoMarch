import React, {useState} from 'react'
import './ChatInput.css'
import db from './firebase'
import firebase from 'firebase'
import { useStateValue } from "./StateProvider"; 


function ChatInput({channelName, channelId}) {

	const [input, setInput] = useState('');
	const [{user}] = useStateValue();

	const sendMessage = (e) => {
		e.preventDefault();

		if (channelId) {
			setInput('')
			db.collection('rooms').doc(channelId).collection('messages').add({
				message : input,
				time: firebase.firestore.FieldValue.serverTimestamp(),
				user: user.displayName,
				userimg: user.photoURL,
			})
		}
	}

	return (
		<div className="ChatInput">
		<form>
		<div className="chat__message">
			<input  className= "input__field"
			placeholder="Type your message here"
			value={input}
			onChange={(e) => setInput(e.target.value)} />
			<div className="btn">
				<button type="submit" onClick={sendMessage}>
				Message {channelName}
			</button>
			</div>
		</div>
		</form>
		</div>
	)
}
export default ChatInput;