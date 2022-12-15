import React from 'react'
import Editor from 'for-editor'

class WriteBlog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editorValue: '',
            imageUrl: ''
        }
    }
    handleChange(value) {
        this.setState({
            editorValue: value
        })
    }
    uploadHandler(params) {
        fetch.get('getQiniuToken', {
            token: JSON.parse(Cookies.get('loginInfo')).token
        }).then(res => {
            utils.uploadFile(params, res.data.qiniuToken).then(res => {
                this.setState({
                    imageUrl: 'http://img.xuweijin.com/' + res
                })
                let str = this.state.editorValue + '![alt](http://img.xuweijin.com/' + res + ')'
                this.setState({
                    editorValue: str
                })
            })
        })
    }
    render() {
        return (
            <Editor className="my-editor"
                subfield={true}
                preview={true}
                addImg={(file) => this.uploadHandler(file)}
                value={this.state.editorValue} onChange={(value) => this.handleChange(value)} />
        )
    }
}