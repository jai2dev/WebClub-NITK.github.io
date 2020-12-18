import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class BlogSearchCard extends Component {
    constructor(props) {
        super(props)
        this.linkRef=React.createRef();
        this.state = {
             
        }
    }
    componentDidMount=()=>{
        this.linkRef.current.innerHTML = this.props.heading
    }
    
    render() {
        return (
            <>
                <Link to={"/blogs/"+this.props.blogid} ref={this.linkRef}/>
            </>
        )
    }
}

export default BlogSearchCard

