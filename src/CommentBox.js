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

    constructor(){
        super();

        this.state = {
            showComments : false
        };
    }

    render() {
        const comments = this._getComments();

        const style = {
            padding: 20,
            color: '#101010',
            fontFamily: 'Ubuntu'
        };

        const headerStyle={
            display: 'inline-block'
        }

        const buttonStyle = {
            marginLeft: 100,
            padding: 15,
            fontSize: 20,
            fontStyle: 'bold',
            color: 'white',
            textDecoration: 'none',
            backgroundColor: '#003060',
            borderRadius: 10,
            borderStyle: 'none'
        }

        let commentNodes;
        let commentButtonText = 'Show Comments';

        if (this.state.showComments){
            // Code to show comments
            commentNodes = <div className="comment-list">{comments}</div>;
            commentButtonText = 'Hide Comments';
        }

        return (
            <div className="comment-box" style={style}>
                <span style={headerStyle}>
                    <h1 style={headerStyle} className="comment-count">{this._getCommentsTitle(comments.length)}</h1>
                    <button onClick={this._handleClick.bind(this)} style={buttonStyle}>{commentButtonText}</button>
                </span>
                {commentNodes}
            </div>
        );
    }

    _handleClick(){
        this.setState({
            showComments: !this.state.showComments
        });
    }
}
export default CommentBox;