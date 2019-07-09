class UiKit{


     drawPost(posts,place){
        
        let spacetodraw= document.getElementById(place);
    for(let i=0; i<posts.length; i++){
        spacetodraw.innerHTML+=`<div class="post-preview">
    <a href="article.html?${posts[i].id}"><h2 class="post-title"><i class="fas fa-bookmark"></i> ${posts[i].title}
    </h2></a><h4 class="post-meta">${posts[i].subTitle}</h4><p class="post-meta">Posted by 
    <a href="#">${posts[i].author}</a> on ${posts[i].createDate}</p><a href="edit.html?${posts[i].id}"><span class="badge badge-success">Edit</span></a>
    <span class="badge badge-danger" id="delete" value="${posts[i].id}">Delete</span></div><hr>  `;
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

   callDelete(){
    let container = document.querySelector('.post-preview');
    container.addEventListener('eventType', e => {
        if(e.target.classList.contains('badge badge-danger')){
         console.log(e);
        }
      });

    }


    drawedit(posts,place){

        let spacetodraw= document.getElementById(place);
        let title=document.getElementById();
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


//http://localhost:3000/posts/?_embed=comments
}