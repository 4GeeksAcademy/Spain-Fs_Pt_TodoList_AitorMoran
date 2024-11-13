import React from "react";
import { useState } from "react";


const Home = () => {

//Variables

const[inputValue, setInputValue] = useState ('');
const [ToDoList, setToDoList] = useState ([]);

const handleChange = e => setInputValue(prev => prev=e.target.value)

const handleSubmit = e => {
	e.preventDefault(); //evita el comportamiento habitual de los imput al actualizar
	if (inputValue.trim() !== "") { //trim elimina espacios delante y detrás
		setToDoList([...ToDoList, inputValue]);
		setInputValue(''); //Limpia el input al escribir
	}
}

const handleDelete = (index) => {
	const newList = ToDoList.filter((task, i) => i !== index);
	setToDoList(newList);
}

return (

<div className="text-center">
	<h1>My ToDoList</h1>
	<h6>Pending Task: {ToDoList.length}</h6>
		<form onSubmit={handleSubmit}>
			<input type="text" value={inputValue} onChange={handleChange} placeholder="Add pending task" className="center_holder"/>
		</form>
		<ul>
			{ToDoList.map((task, index) => (
				<li key={index}>{task} <button type="onclick" onClick={() => handleDelete(index)}><span class="fa-solid fa-trash"></span></button> </li>
			))}
		</ul>
	</div>
);
};

export default Home;


