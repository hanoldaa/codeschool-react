import React from 'react';

class CommentForm extends React.Component{


    render(){

        const back = {
            color: 'white',
            padding: 10,
            backgroundColor: '#003060',
            borderRadius: 8,
            borderStyle: 'none',
            fontStyle: 'bold',
            width: 420
        }

        const formStyle = {
            backgroundColor: 'white',
            color: 'black',
            marginBottom: 4,
            width: 400
        }


        const linkStyle = {
            marginRight: 5,
            padding: 5,
            color: 'white',
            fontSize: 12,
            textDecoration: 'none',
            backgroundColor: '#0050A0',
            borderRadius: 4,
            borderStyle: 'none'
        }


        return(
            <form style={back} className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                <label>Join the discussion!</label>
                <div className="comment-form-fields">
                    <div><input style={formStyle} placeholder="Name: " ref={(input) => this._author = input}/></div>
                    <div><textarea style={formStyle} placeholder="Comment: " 
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