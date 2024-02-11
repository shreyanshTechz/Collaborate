import React from 'react';
import Select from 'react-dropdown-select';
import './Navbar.css';

const Navbar = ({ userLang, setUserLang, userTheme,
	setUserTheme, fontSize, setFontSize }) => {
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
		</div>
	)
}

export default Navbar
