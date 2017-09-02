import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox.js';

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        React.createElement(CommentBox),
        document.getElementById('mount')
    );
});