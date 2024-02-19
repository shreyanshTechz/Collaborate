import React from 'react';
import Select from 'react-dropdown-select';
import './Navbar.css';
import { useState } from 'react';
const Navbar = ({ userLang, setUserLang, userTheme,
	setUserTheme, fontSize, setFontSize,setroom,setusers }) => {
	const [currRoom, setcurrRoom] = useState("")
	const [currUser, setUser] = useState("")
	const languages = [
		{ value: "c", label: "C" },
		{ value: "cpp", label: "C++" },
		{ value: "python", label: "Python" },
		{ value: "java", label: "Java" },
	];
	const themes = [
		{ value: "vs-dark", label: "Dark" },
		{ value: "Light", label: "Light" },
	]
	const handlesubmit = ()=>{
		
		setroom(currRoom);
		setusers(currUser);
	}
	return (
		<div className="navbar">
			<h1>Collaborate</h1>
			<Select options={languages} value={userLang}
				onChange={(e) => setUserLang(e[0].value)}
				placeholder={userLang} />
			<Select options={themes} value={userTheme}
				onChange={(e) => setUserTheme(e[0].value)}
				placeholder={userTheme} />
			<label>Font Size</label>
			<input type="range" min="18" max="30"
				value={fontSize} step="2"
				onChange={(e) => { setFontSize(e.target.value) }} />
			<input type="text" name="room" id="user" onChange={(e)=>setcurrRoom(e.target.value)}/>
			<button onClick={handlesubmit}>Join</button>
			<input type="text" name="user" id="room" onChange={(e)=>setUser(e.target.value)}/>
			{/* <button onClick={()=>setusers(currUser)}>ChangeUser</button> */}
		</div>
	)
}

export default Navbar
