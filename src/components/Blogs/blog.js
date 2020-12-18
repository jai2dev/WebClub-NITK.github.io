import React, { Component } from 'react'
import "../../styles/blog.css";
import Nav from "../Nav/Nav";
import axios from 'axios';
import Helmet from "react-helmet";
import BlogApi from "../../_services/blogApi";
import queryString from 'query-string';
import Loader from "react-loader-spinner";

class Blog extends Component {
    constructor(props) {
        super(props)
        this.htmlContent = React.createRef()
        this.htmlHeading = React.createRef()
        this.state = {
            content: '',
            loaderStatus:true
        }
    }
    async componentDidMount(){
        let blogid=queryString.parse(this.props.location.search).id   
        let res = await BlogApi.loadBlogWithId(blogid)           
        let temp = <div className="container-fluid bg-light pb-5 " style={{ paddingTop: '60px', minHeight: '500px' }}>
            <div style={{maxWidth:'1000px'}} className="mx-auto">
                <p className="blog-heading pt-5" ref={this.htmlHeading}></p>
                <p className="posted-on">Posted on: {res.date} by-<span>{res.writer}</span></p>
                <p className="blog-content text-justify" ref={this.htmlContent}></p>
            </div>
        </div>
        
        this.setState({
            content: temp,
            loaderStatus:false
        })
        this.htmlContent.current.innerHTML = res.content
        this.htmlHeading.current.innerHTML = res.heading
    }

    render() {
        let loaderContent=null;
        if(this.state.loaderStatus){
            loaderContent=<div className="pt-5 text-center mt-5"><Loader type="TailSpin" color="#00BFFF" height={100} width={100} /></div>
        }else{
            loaderContent=null;
        }
        return (
            <>
                <Helmet>
                    <title>Blog</title>
                </Helmet>
                <Nav sticky="false" transp="false" />
                {loaderContent}
                {this.state.content}
            </>
        )
    }
}

export default Blog
