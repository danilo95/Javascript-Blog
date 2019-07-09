class Handler{

    async createRequest(url){
        let response = await fetch(url);
        let result = await response.json();
        return result;
    }



    getPosts(){
        return this.createRequest(`http://localhost:3000/posts?_sort=id&_order=desc&_start=3&_end=11`);
    } 
    get3LastPosts(){
        return this.createRequest(`http://localhost:3000/posts?_sort=id&_order=desc&_limit=3`);
    } 
    getPostbyId(id){
      
        return this.createRequest(`http://localhost:3000/posts?id=${id}&_embed=comments`);
    
    } 

    deleteItem(id){
        return this.createRequest(`http://localhost:3000/posts/${id}`,{
            method: 'DELETE'});
    }

}