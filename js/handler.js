class Handler {
  createRequest(url) {
    fetch(url)
    .then(response => {
        if(response.status > 300){
            throw new Error("error")
        }
        return response.json()
    })
    .catch(error => {
       console.log("error CATCH", error)
    })
  }

  handleError = () => {

  }

   getPosts() {
       this.createRequest(`http://localhost:3000/posts?_sort=id&_order=desc&_start=3&_end=11`)
  }
  get3LastPosts() {
    return this.createRequest(
      `http://localhost:3000/posts?_sort=id&_order=desc&_limit=3`, {
        method: "GET"
      });
  }
  getPostbyId(id) {
    return this.createRequest(
      `http://localhost:3000/posts?id=${id}&_embed=comments`, {
        method: "GET"
      });
  }

  deleteItem(id) {
    return this.createRequest(`http://localhost:3000/posts/${id}`, {
      method: "DELETE"
    });
  }

  updateItem(id,formData) {
    return this.createRequest(`http://localhost:3000/posts/${id}`, {
        method: 'POST',
        body: formData
    });
  }

  updateLikes(id,formData) {
     this.createRequest(`http://localhost:3000/posts/${id}`, {
        method: 'POST',
        body: formData
    });
  }
}
