import React, { useState, useEffect } from "react";
//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState('');
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch('https://playground.4geeks.com/todo/users/dsmora')
			.then(resp => resp.json())
			.then(respJson => {
				console.log(respJson)
				console.log(respJson.todos)
				const serverTodos = respJson.todos;
				setTodos(serverTodos);
			})
	}, [])

	const createTodo = async (task) => {
		await fetch('https://playground.4geeks.com/todo/todos/dsmora', {
			method: 'POST',
			body: JSON.stringify({
				"label": task,
				"is_done": false
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(resp => resp.json())
			.then(respJson => {
				const newTodos = [...todos, respJson];
				setTodos([...newTodos])
			});
	}


	const handleOnChange = (evt) => {
		if (evt.key === 'Enter' && evt.target.value.trim() !== '') {
			createTodo(evt.target.value)
			setInputValue('')
		}
	}

	const handleOnDelete = (deleteIndex) => {
		const newTodos = todos.filter((_, index) => index !== deleteIndex);
		setTodos([...newTodos])
	}

	return (
		<div className="container">
			<div className="todos p-2">
				<div className="input-group input-group-sm mb-3 py-3 px-5">
					<input value={inputValue}
						type="text"
						className="form-control"
						onChange={evt => setInputValue(evt.target.value)}
						onKeyDown={handleOnChange} placeholder="New Task" />
				</div>
				<div className="container text-center px-5">
					<div className="row row-cols-2">
						{
							todos.map((item, index) => (
								<div className="col" key={item.id}>
									<div className="todoCard">
										{item.label}
										<i className="fa fa-trash ms-4" onClick={() => handleOnDelete(index)}></i>
									</div>
								</div>
							))
						}
					</div>
				</div>
				<h6 className="text-center">
					Hay {todos.length} tareas pendientes
				</h6>
			</div>

		</div>

	);
};

export default Home;
