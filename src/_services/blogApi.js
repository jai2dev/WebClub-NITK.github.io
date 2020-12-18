import axios from 'axios';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "XCSRF-TOKEN";
class BlogApi {
  async postBlog(url,data) {
    console.log(data)
    axios.post(url, data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  }
  async searchBlogWithTag(inputValue){
    inputValue=inputValue.toLowerCase();
    let res=await fetch('http://127.0.0.1:8000/searchBlogWithTag?tagName='+inputValue)
    res=await res.json()
    return res.searchedBlogs;
  }
  async loadBlogWithId(blogid){
    let res=await fetch('http://127.0.0.1:8000/getblogs/'+blogid)
    res= await res.json()
    return res
  }
  async loadBlogs(){
    let res = await fetch('http://127.0.0.1:8000/getblogs');
    res = await res.json()
    return res;
  }
}

var instance = new BlogApi();
export default instance;
