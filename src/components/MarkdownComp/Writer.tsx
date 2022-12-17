/**
 * https://github.com/HarryChen0506/react-markdown-editor-lite
 */

// import react, react-markdown-editor-lite, and a markdown parser you like
import React from 'react';
import * as ReactDOM from 'react-dom';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
    console.log('====================================');
    console.log("html格式=====>> " + html);
    console.log('====================================');
    console.log("text格式=====>> " + text);
    console.log('====================================');
}
export default props => {
    return (
        <MdEditor style={{ height: '500px' }}
            renderHTML={text => mdParser.render(text)}
            onChange={handleEditorChange} />
    );
};