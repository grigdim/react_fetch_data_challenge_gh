import React from 'react';
import Button from './Button';
import ItemList from './ItemList';

const Form = ({ items, reqType, setReqType }) => {
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<Button text="users" reqType={reqType} setReqType={setReqType} />
			<Button text="posts" reqType={reqType} setReqType={setReqType} />
			<Button text="comments" reqType={reqType} setReqType={setReqType} />
			<ItemList items={items} />
		</form>
	);
};

export default Form;
