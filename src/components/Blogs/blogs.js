import React from "react";
import "../../styles/home.css";
import "../../styles/blog.css";
// import imageUrl from "..//assets/images/bg-002.png";
import imageUrl from "../../assets/images/blog_img.png";
// import deomBlogUrl from "../../assets/images/demoblog.png";
import Nav from "../Nav/Nav";
import Loader from "react-loader-spinner";
import axios from 'axios'
import BlogCard from './blogCard'
import BlogSearchCard from './blogSearchCard'
import Helmet from "react-helmet";
import { Link } from 'react-router-dom'
import BlogApi from "../../_services/blogApi";
import GoogleLogin from 'react-google-login'
import Editor from "./editor";
import { useHistory } from "react-router-dom";

class Blogs extends React.Component {
    constructor(props) {
        super(props);
        this.searchResultContainer = React.createRef()
        this.searchForm = React.createRef()
        this.searchInput = React.createRef()
        this.activePageLink = React.createRef()
        this.state = {
            allBlogs: [],
            searchResult: [],            
            loaderStatus: true,
            blogsPerPage:1,
            currentPage: 1
        };
        this.searchBlogs = this.searchBlogs.bind(this)
    }
    async componentDidMount() {
        let counter=0;
        let color_arr = ['#6b0504', '#a3320b', '#2e5339', '#e55381', '#1c5d99', '#3f4045', '#9a4c95', '#26532b', '#51344d', '#58641d']; //different color for each card
        let Response = await BlogApi.loadBlogs()
        var blogsList = Response.blogs;
        var temp = blogsList.map(element => {
            let tags = element.tags
            element = element.blog
            return <BlogCard key={element.id} color={color_arr[(counter++)%10]} blogsid={element.id} tagList={tags} heading={element.heading} date={element.date} writer={element.user_name} sample_text={element.sample_text} />
        });
        this.setState({ allBlogs: temp, loaderStatus: false })
    }
    showSearchContainer = () => {
        this.searchResultContainer.current.style.display = "block";
        this.searchForm.current.style.borderRadius = '10px 10px 0 0';
    }
    hideSearchContainer = () => {
        this.searchResultContainer.current.style.display = "none";
        this.searchForm.current.style.borderRadius = '24px';
    }
    async searchBlogs(event) {
        event.preventDefault();
        let inputValue = this.searchInput.current.value;  
        let temp = await this.state.allBlogs
        console.log(temp)
        let k = 0;
        for (let i = 0; i < temp.length; i++) {
            let tag_list = temp[i].props.tagList
            let flag = 0;
            console.log(tag_list)
            for (let j = 0; j < tag_list.length; j++) {
                if (tag_list[j] == inputValue) {
                    flag = 1;
                    break;
                }
            }
            if (flag == 1) {
                let swap_temp = temp[k];
                temp[k] = temp[i];
                temp[i] = swap_temp;
                k++;
                console.log('swaping')
            }
        }

        this.setState({ allBlogs: temp }, () => {
            console.log(this.state.allBlogs)
        })


    }
    responseGoogle = (response) => {
        console.log(response)
        console.log(response.profileObj)
        console.log(response.profileObj.name)
        console.log(response.profileObj.email)
        window.location.href = 'http://localhost:3000/new#/editor?userName=' + response.profileObj.name + '&userEmail=' + response.profileObj.email;

    }
    changeBlogPage = (k) => {
        this.setState({
            currentPage:k.target.innerHTML
        })
    }

    render() {
        const { blogsPerPage, loaderStatus, allBlogs, currentPage } = this.state
        let loaderContent = null;
        if (loaderStatus) {
            loaderContent = <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
        } else {
            loaderContent = null;
        }
        let blogsEnd = currentPage * blogsPerPage
        let blogsStart = blogsEnd - blogsPerPage;
        let blogstoshow = allBlogs.slice(blogsStart, blogsEnd)
        let blogPageLinks = [<li className="page-item" key={0}><span className="page-link" >Previous</span></li>];
        let noOfPages = allBlogs.length / blogsPerPage;
        for (let i = 0; i < noOfPages; i++) {
            if(i==0){
                blogPageLinks.push(<li className="page-item " key={i+1} onClick={k => this.changeBlogPage(k)}><span className="page-link " ref={this.activePageLink} >{i+1}</span></li>);
                
            }else{
                blogPageLinks.push(<li className="page-item " key={i+1} onClick={k => this.changeBlogPage(k)}><span className="page-link" >{i+1}</span></li>);
            }            
        }
        blogPageLinks.push(<li className="page-item" key={noOfPages+1}><span className="page-link">Next</span></li>);
        return (
            <div>
                <Helmet>
                    <title>Blogs</title>
                </Helmet>
                <div>
                    <div>
                        <Nav sticky="false" transp="false" />
                        <div className="main-image center-flex" style={{ background: 'white' }}>
                            <div className="title-container" >
                                <h1 className="main-title-blogs">
                                    Write an
                                <br />
                                Inspiring
                                <br />
                                Blog
                                </h1>
                                {/* <Link to="/editor" className="my-btn">
                                    Write Blog
                                </Link> */}
                                {/* <button onClick={this.tempFun}>click me</button> */}
                                <GoogleLogin
                                    clientId="450857265760-h4n07vma47ofqrna2ktclm5rvgg3f24l.apps.googleusercontent.com"
                                    buttonText="Login"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                    render={renderProps => (
                                        <button className="my-btn" onClick={renderProps.onClick} disabled={renderProps.disabled}>Write Blog</button>
                                    )}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </div>
                            <img className="bg-image" width="700" src={imageUrl} alt="" />
                        </div>
                        <div className="container" >
                            <div className="row">
                                <div className="col-12 p-0 m-0">
                                    <form action="#" id="subject_search_form" ref={this.searchForm}>
                                        <input type="search" name="search" ref={this.searchInput} autoComplete="off" id="subject_search_input" placeholder="Search topic tag" onFocus={this.showSearchContainer} onBlur={this.hideSearchContainer} />
                                        <button type="submit" onClick={this.searchBlogs} className="pl-3"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search_icon" ><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></button>
                                        <div className="search_result_container" ref={this.searchResultContainer}>{this.state.searchResult}</div>
                                    </form>
                                </div>
                                <div className="col-12 text-center" >
                                    {loaderContent}
                                </div>
                                {blogstoshow}
                                <div className="col-12 pt-2 d-flex justify-content-center ">
                                    <nav>
                                        <ul className="pagination">
                                            {blogPageLinks}                                            
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blogs;
