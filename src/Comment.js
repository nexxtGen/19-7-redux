import React from 'react';

const Comment = ({text, votesUp, votesDown, id, thumbUpComment, thumbDownComment, removeComment, editComment}) =>     
    <li>
        {text}:  
        <span> votes Up: {votesUp} </span>
        <button onClick={() => thumbUpComment(id)}>Thumb up</button> 
        <span> votes Down: {votesDown}</span> 
        <button onClick={() => thumbDownComment(id)}>Thumb Down </button>
        <button onClick={() => removeComment(id)}>X</button> 
        <button onClick={() => NewPrompt(editComment, id)}>Edit</button>          
    </li>

function NewPrompt(editComment,id) {
	const newText = prompt("Enter new text");
	if (newText) {
		editComment(id, newText);
	}
}

export default Comment;