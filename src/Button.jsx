import React, { useState } from 'react';

const Button = ({ text, reqType, setReqType }) => {
	return (
		<button
			className={text === reqType ? 'selected' : null}
			type="button"
			onClick={() => {
				setReqType(text);
			}}
		>
			{text}
		</button>
	);
};

export default Button;
