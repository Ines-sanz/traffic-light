import React, { useState } from "react";

//include images into your bundle
import  rojo from "../../img/rojo.png";

//create your first component
const Home = () => {
	const [color, setColor] = useState('')

	const changeColor = (col) =>{
		setColor(col)
	}
	
	return (
		<div className="container-fluid">
		<div className="d-flex flex-column align-items-center justify-content-center bg-dark">
			<div onClick={()=> (color!= 'rojo') ? changeColor('rojo') : changeColor(' ') } className={color==='rojo' ? 'iluminao rojo my-2': 'rojo my-2'} ></div>
			<img 
					src={rojo} 
					onClick={() => (color !== 'rojo') ? changeColor('rojo') : changeColor('')}
					className={color === 'rojo' ? 'rojo__light' : 'rojo__none'}
				/>
			<div onClick={()=> (color!= 'naranja') ? changeColor('naranja') : changeColor(' ')} className={color==='naranja' ? 'iluminao naranja my-2': 'naranja my-2'}></div>
			<div onClick={()=> (color!= 'verde') ? changeColor('verde') : changeColor(' ')} className={color==='verde' ? 'iluminao verde my-2': 'verde my-2'}></div>
	
		</div>
		</div>
	);
};

export default Home;
