import React, {useState, useEffect} from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from "./SidebarOption.js"
import db from "./firebase"
import { useStateValue } from './StateProvider'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';


function Sidebar() {

	const [channels, setChannels] = useState([]);
	const [{user}] = useStateValue();

	useEffect(() => {
		db.collection("rooms").onSnapshot(snapshot => {
			setChannels(
				snapshot.docs.map(doc=>({
					id: doc.id,
					name: doc.data().name,  
				}))
				)
		})
	}, [])

	return (
		<div className="sidebar">
		<div className="sidebar__header">
			<div className="sidebar__info">
			<h2>CoMarch</h2>
			<h3>
			<FiberManualRecordIcon/>
			{user?.displayName}
			</h3>
			</div>
		<CreateIcon />
		</div>
		<hr />
		<SidebarOption className="add"  Icon={AddCircleOutlinedIcon} addChannelOption={true} title="Add channel" />
		<hr />
		{channels.map(channel => (
			<SidebarOption title={channel.name} id={channel.id}/>
			))}
		</div>
		)
}

export default Sidebar