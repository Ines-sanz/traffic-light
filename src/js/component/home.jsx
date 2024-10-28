import React, { useState } from "react";

//include images into your bundle
import  lightBg from "../../img/light.png";
import  darkBg from "../../img/dark.png";

//create your first component
const Home = () => {
	const [color, setColor] = useState('')
	const [mode, setMode] = useState('light')

	const changeColor = (col) =>{
		setColor(col)
		
	}

	const changeMode = (mod) =>{
		setMode(mode === 'light' ? 'dark' : 'light');
		console.log(mod)
	}

	const randomLights = () => {
		const colors = ['red', 'orange', 'green']; 
		const intervalId = setInterval(() => {
			const index = Math.floor(Math.random() * colors.length);
			changeColor(colors[index]);
		}, 200);

		setTimeout(() => {
			clearInterval(intervalId);
			setColor('');
		}, 5000);
	};
	

	return (
		<div className="container-fluid m-0 p-0 myContainer">
		<div className="d-flex flex-column align-items-center justify-content-center">
			<div onClick={()=> (color!= 'red') ? changeColor('red') : changeColor(' ')} className="red"></div>
			<div className={color==='red' ? 'r-light': ''} ></div>
			<div onClick={()=> (color!= 'orange') ? changeColor('orange') : changeColor(' ')} className='orange'></div>
			<div className={color==='orange' ? 'o-light': ''} ></div>
			<div onClick={()=> (color!= 'green') ? changeColor('green') : changeColor(' ')} className='green'></div>
			<div className={color==='green' ? 'g-light': ''} ></div>
			<div className="dark"></div>
			<button className="myMode" onClick={changeMode}>{mode === 'light' ? 'Dark Mode' : 'Light Mode'}</button>
			<button className="myButton" onClick={randomLights}>Random Lights</button>
	<img src={lightBg} alt="background" className={mode==='light' ? 'myBgLight': 'myBgDark'}/>
	<img src={darkBg} alt="background" className="darkBg"/>
		</div>
		</div> 
	);
};

export default Home;
