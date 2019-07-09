class UiKit{

     drawPost(posts,place){
      
        let spacetodraw= document.getElementById(place);
    for(let i=0; i<posts.length; i++){
        let btn = document.createElement("span");   
        btn.innerHTML = "delete";
        btn.value=    posts[i].id;
        btn.className='class="badge badge-danger';           
        btn.addEventListener("click", (e) => {const http= new HttpRequest();
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.value) {
                    http.deleteById(`http://localhost:3000/posts/${e.target.value}`);
                }
               }).then(function(){ 
                location.reload();
                alert('item has been deleted')
                })
           })
        
            let newPost = document.createElement("div");
            newPost.setAttribute("class", "post-preview");
            newPost.innerHTML = `<a href="article.html?${posts[i].id}"><h2 class="post-title"><i class="fas fa-bookmark"></i> ${posts[i].title}
            </h2></a><h4 class="post-meta">${posts[i].subTitle}</h4><p class="post-meta">Posted by 
            <a href="#">${posts[i].author}</a> on ${posts[i].createDate}</p><a href="edit.html?${posts[i].id}"><span class="badge badge-success">Edit</span></a>
          `
            
            newPost.appendChild(btn);
            spacetodraw.appendChild(newPost);
            
    
        }
    }
        drawSinglePost(posts,place){

            let spacetodraw= document.getElementById(place);
            for(let i=0; i<posts.length; i++){

            spacetodraw.innerHTML+=`<div class="post-preview">
            <a ><h1 class="post-title"><i class="fas fa-bookmark"></i> ${posts[0].title}
            </h1><img src="${posts[0].image}" class="img-fluid" ><br>
            <small class="text-muted">${posts[0].subTitle}</small><br>
            <h3 class="post-subtitle text-justify">${posts[0].body}</h3>
            </a><p class="post-meta">Posted by 
            <a href="#">${posts[0].author}</a> on ${posts[0].createDate}<br> <i class="fa fa-thumbs-up" aria-hidden="true"></i> ${posts[0].likes}  
            </p></div><hr>
           <p class="post-meta">Posted by ${console.log(posts[0].postId)}
           
            </p>
            `;

        }
    }

    drawError(place){
        let spacetodraw= document.getElementById(place);
        spacetodraw.innerHTML=('404 POST NOt FOUND');
       
    
    }

   callDelete(id){
   const http= new HttpRequest();
   http.deleteById(`http://localhost:3000/posts/${id}`);
    }


    drawedit(posts,place,id){

        let getid=id;
        let spacetodraw= document.getElementById(place);
        let title=document.getElementById('title');
        let subtitle=document.getElementById('subtitle');
        let imageurl=document.getElementById('image');
        let tags=document.getElementById('tags');
        let author=document.getElementById('author');
        let body=document.getElementById('body');
        imageurl.value=posts[0].image;
        title.value=posts[0].title;
        subtitle.value=posts[0].subTitle;
        author.value=posts[0].author;
        body.tags=posts[0].tags;
        body.value=posts[0].body;
}

getinfotoUpdate(idtoupdate){
    infotosave={
        id: idtoupdate,
        title: document.getElementById('title').value,
        subTitle:document.getElementById('subtitle').value,
        image: document.getElementById('image').value,
        body: document.getElementById('body').value,
        createDate: 5,
        likes: 5,
        author: document.getElementById('author').value,
        tags: document.getElementById('tags').value
        
        
    }
}

}