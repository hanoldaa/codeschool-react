import React from 'react';

class Comment extends React.Component {
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
            padding: 5,
            color: 'white',
            fontSize: 12,
            textDecoration: 'none',
            backgroundColor: '#003060',
            borderRadius: 4
        }

        return (
            <div className="comment" style={commentStyle}>
                <p className="comment-header" style={headerStyle}>{this.props.author}</p>
                <p className="comment-body" style={bodyStyle}>
                    {this.props.body}
                </p>
                <div className="comment-footer" style={footerStyle}>
                    <a href="#" className="comment-footer-delete" style={linkStyle}>
                        Delete
                    </a>
                </div>
            </div>
        );
    }
}
export default Comment;