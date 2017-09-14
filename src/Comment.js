import React from 'react';

class Comment extends React.Component {
    
    constructor(){
        super();

        this.state = {
            isAbusive: false
        }
    }

    render() {
        const commentStyle = {
            paddingBottom: 20
        }

        const headerStyle = {
            fontSize: 24,
            color: '#101010',
            fontWeight: 'bold',
            borderBottomStyle: 'solid',
            borderWidth: 2,
            borderColor: '#101010'
        }

        const bodyStyle = {
            paddingBottom:10,
            marginLeft: 20,
            color: '#101010',
            borderBottomStyle: 'none',
            borderColor: 'grey',
            borderWidth: 1
        }

        const footerStyle = {
            marginLeft: 20
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

        let commentBody;
        
        if(!this.state.isAbusive){
        commentBody = this.props.body;
        }
        else{
        commentBody = <em>Content marked as abusive</em>;
        }

        return (
            <div className="comment" style={commentStyle}>
                <p className="comment-header" style={headerStyle}>{this.props.author}</p>
                <p className="comment-body" style={bodyStyle}>
                    {commentBody}
                </p>
                <div className="comment-footer" style={footerStyle}>
                    <a href="#" className="comment-footer-delete" style={linkStyle}>
                        Delete
                    </a>
                    <a href="#" onClick={this._toggleAbuse.bind(this)} className="comment-footer-abuse" style={linkStyle}>
                        Report Abuse
                    </a>
                </div>
            </div>
        );
    }
      
    _toggleAbuse(event){
        event.preventDefault();
        this.setState({
        isAbusive: !this.state.isAbusive
        })
    }
}
export default Comment;