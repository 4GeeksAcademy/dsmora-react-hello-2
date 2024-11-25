import React, { useState, useEffect } from "react";
//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState('');
	const [todos, setTodos] = useState([]);
	const [user, setUser] = useState({ name: 'dsmora' })

	useEffect(() => {
		if (user && user.name) {
			fetch(`https://playground.4geeks.com/todo/users/${user.name}`)
				.then(resp => resp.json())
				.then(respJson => {
					console.log(respJson)
					console.log(respJson.todos)
					const serverTodos = respJson.todos;
					setTodos(serverTodos);
				})
		}

	}, [user])

	useEffect(() => {
		fetch('https://playground.4geeks.com/todo/users/dsmora', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(resp => resp.json()).then(respJson => setUser(respJson)).catch(() => {
			setUser({ name: 'dsmora' })
		});
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

	const handleOnDeleteUser = async () => {
		await fetch('https://playground.4geeks.com/todo/users/dsmora', {
			method: 'DELETE'
		}).then(() => setUser(null));
	};

	const deleteTask = (id) => {
		return fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
			method: 'DELETE'
		})
	}

	const deleteAllTask = async () => {
		for (let i = 0; i <= todos.length; i++) {
			deleteTask(todos[i].id).then()
		}
		const deleteAll = todos.map(item => deleteTask(item.id))
		await Promise.all(deleteAll).then(() => setTodos([]));
	}

	if (!user || !todos) return <>No existe un usuario</>;

	return (
		<div className="container">
			<div className="todos p-2">
				<button onClick={() => deleteAllTask()}>
					deleteAllTask
				</button>
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
										<i className="fa fa-trash ms-4" onClick={() => deleteTask(item.id)}></i>
									</div>
								</div>
							))
						}
					</div>
				</div>
				<h6 className="text-center">
					Hay {todos.length} tareas pendientes
				</h6>
				<button onClick={() => handleOnDeleteUser()}>
					Delete user
				</button>
			</div>

		</div>

	);
};

export default Home;
