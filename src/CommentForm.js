import React from 'react';

class CommentForm extends React.Component{


    render(){

        const formStyle = {
            display: 'block'
        }


        const linkStyle = {
            marginRight: 5,
            padding: 5,
            color: 'white',
            fontSize: 12,
            textDecoration: 'none',
            backgroundColor: '#003060',
            borderRadius: 4,
            borderStyle: 'none'
        }


        return(
            <form style={formStyle} className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                <label>Join the discussion!</label>
                <div className="comment-form-fields">
                    <div><input placeholder="Name: " ref={(input) => this._author = input}/></div>
                    <div><textarea placeholder="Comment: " 
                            ref={(textarea) => this._body = textarea}
                            onKeyUp={this._getCharacterCount.bind(this)}
                        >
                    </textarea></div>
                </div>
                <div className="comment-form-actions">
                    <button style={linkStyle} type="submit">
                        POST COMMENT
                    </button>
                </div>
            </form>
        );
    }

    _handleSubmit(event){
        event.preventDefault();

        if(!this._author.value || !this._body.value){
            alert("Please enter your name and comment.");
            return;
        }

        let author = this._author;
        let body = this._body;

        this.props.addComment(author.value, body.value);
    }

    _getCharacterCount(){
        this.setState({
            characters: this._body.value.length
        });
    }
}

export default CommentForm;