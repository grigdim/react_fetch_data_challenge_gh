import React from 'react';
import Cell from './Cell'

const Item = ({ item }) => {
	return (
		<tr>
			{Object.entries(item).map(([ key, value ]) => {
				return <Cell key={key} cellData={JSON.stringify(value)} />;
			})}
		</tr>
	);
};

export default Item;
