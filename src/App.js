import React, { useState, useEffect } from 'react';
import Form from './Form';

function App() {
	const API_URL = 'https://jsonplaceholder.typicode.com/';
	const [ reqType, setReqType ] = useState('users');
	const [ items, setItems ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(
		() => {
			const fetchItems = async () => {
				try {
					const response = await fetch(`${API_URL}${reqType}`);
					if (!response.ok) throw Error('Did not receive expected data');
					const data = await response.json();
					console.log(data);
					setItems(data);
				} catch (err) {
					console.log(err);
				} finally {
					setIsLoading(false);
				}
			};
			fetchItems();
		},
		[ reqType ]
	);
	return (
		<div className="App">
			{isLoading && <p>Loading Items...</p>}
			{!isLoading && <Form items={items} reqType={reqType} setReqType={setReqType} />}
		</div>
	);
}

export default App;
