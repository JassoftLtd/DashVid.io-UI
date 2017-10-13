import React, {Component} from 'react';

const ReactMarkdown = require('react-markdown');

export default class MarkdownPage extends Component {

    constructor(props, content) {
        super(props);

        this.state = {
            content: content
        };
    }

    render() {
        return (
            <ReactMarkdown source={this.state.content} />
        );
    }
}