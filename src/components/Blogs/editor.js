import React, { Component } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import '../../styles/editor.css'
import "../../styles/blog.css";
import Nav from "../Nav/Nav";
import { data } from 'jquery';
import BlogApi from "../../_services/blogApi";

class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            editorHtml: '', 
            theme: 'snow' ,
            userName:'',
            userEmail:''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(html) {
        this.setState({ editorHtml: html });
    }

    handleThemeChange(newTheme) {
        if (newTheme === "core") newTheme = null;
        this.setState({ theme: newTheme })
    }
    postBlog = () => {
        let data_to_send = this.state.editorHtml
        let heading = '';
        let sample_text = '';
        let tag_list=[]
        let headingpatt = /<p>\s*[*][*]\s*<\/p>.+<p>\s*[*][*]\s*<\/p>/;
        let sample_textpatt = /<p>\s*[*][*][*]\s*<\/p>.+<p>\s*[*][*][*]\s*<\/p>/;

        data_to_send = data_to_send.replace(headingpatt, function (x) {
            heading = x;
            return '';
        })

        data_to_send = data_to_send.replace(sample_textpatt, function (x) {
            sample_text = x;
            return '';
        })
        
        data_to_send = data_to_send.replace(/#[a-zA-Z_-]+/g, function (x) {
            tag_list.push(x.substr(1));
            return '';
        })
        console.log(tag_list)
        console.log(data_to_send)
        heading = heading.replace(/<p>\s*[*][*]\s*<\/p>/g, '');
        sample_text = sample_text.replace(/<p>\s*[*][*][*]\s*<\/p>/g, '');
        tag_list =tag_list.map(element=>{
            return element.toLowerCase();
        })
        console.log(tag_list)
        if(heading==""){
            alert("Please include heading in **(both in new line)")
            return ;
        }
        if(sample_text==""){
            alert("Please include sample text in ***(both in new line)")
            return ;
        }
        if(tag_list.length==0){
            alert("Please include some topic tag with #(i.e #ml #dbms)")
            return ;
        }
        BlogApi.postBlog('http://127.0.0.1:8000/addblog',{
            content:data_to_send,
            heading:heading,
            sample_text:sample_text,
            user_name:'Bharat singh',
            user_email:'bharatsinghnitk@gmail.com',
            tag_list:tag_list
        });
    }

    render() {
        return (
            <>
                <Nav sticky="true" transp="false" />
                <ReactQuill className="text_editor"
                    theme={this.state.theme}
                    onChange={this.handleChange}
                    value={this.state.editorHtml}
                    modules={Editor.modules}
                    formats={Editor.formats}
                    bounds={'.app'}
                    placeholder={'Type here...'}
                />
                <div style={{ background: 'white' }} className="p-2">
                    <div style={{ maxWidth: '800px' }} className="mx-auto">
                        <button className="my-btn border-0" onClick={this.postBlog}>Publish</button>
                    </div>
                </div>
            </>
        )
    }
}

/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */

Editor.modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }, { 'color': ['#000000', 'red'] }],
        ['link', 'image'],
        [{
            handlers: {
                'color': function (value) {
                    if (value == 'custom-color') value = window.prompt('Enter Hex Color Code');
                    this.quill.format('color', value);
                }
            }
        }]
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 'color',
    'link', 'image'
]

/* 
 * PropType validation
 */
//   Editor.propTypes = {
//     placeholder: PropTypes.string,
//   }
export default Editor
