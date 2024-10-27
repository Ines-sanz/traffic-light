import React, { useState } from "react";

//include images into your bundle
import  background from "../../img/background.png";

//create your first component
const Home = () => {
	const [color, setColor] = useState('')

	const changeColor = (col) =>{
		setColor(col)
		console.log
	}
	
	return (
		<div className="container-fluid m-0 p-0 myContainer">
		<div className="d-flex flex-column align-items-center justify-content-center">
			<div onClick={()=> (color!= 'red') ? changeColor('red') : changeColor(' ')} className="red"></div>
			<div className={color==='red' ? 'r-light': 'r-dark'} ></div>
			<div onClick={()=> (color!= 'orange') ? changeColor('orange') : changeColor(' ')} className='orange'></div>
			<div className={color==='orange' ? 'o-light': 'o-dark'} ></div>
			<div onClick={()=> (color!= 'green') ? changeColor('green') : changeColor(' ')} className='green'></div>
			<div className={color==='green' ? 'g-light': 'g-dark'} ></div>
	<img src={background} alt="background" className="myBg"/>
		</div>
		</div> 
	);
};

export default Home;
