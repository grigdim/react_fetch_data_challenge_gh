import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
	return (
		<div className="table-container">
			<table>
				<tbody>{items.map((item) => <Item key={item.id} item={item} />)}</tbody>
			</table>
		</div>
	);
};

export default ItemList;
