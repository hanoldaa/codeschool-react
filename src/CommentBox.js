import React from 'react';
import Comment from './Comment.js';

class CommentBox extends React.Component{

    _getComments(){
        const commentList = [
            {id:0, author:'Morgan Circuit', body:'Great Picture!'},
            {id:1, author:'Bending Bender', body:'Excellent stuff!'}
        ];

        return commentList.map((comment) => {
            return (<Comment author={comment.author} body={comment.body} key={comment.id}/>);
        });
    }

    _getCommentsTitle(number){
        if(number == 0)
            return 'No Comments';
        else if (number == 1)
            return '1 Comment';
        else 
            return (number + ' Comments');
    }

    render() {
        const comments = this._getComments();
        const style = {
            padding: 20,
            color: '#101010',
            fontFamily: 'Ubuntu'
        };

        return (
            <div className="comment-box" style={style}>
                <h1 className="comment-count">{this._getCommentsTitle(comments.length)}</h1>
                <div className="comment-list">
                    {comments}
                </div>
            </div>
        );
    }
}
export default CommentBox;