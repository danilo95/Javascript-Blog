class UiKit {
  drawPost(posts, place) {
    let spacetodraw = document.getElementById(place);
    spacetodraw.innerHTML = "";
    if (posts.length == 0) {
      spacetodraw.innerHTML = "<br>No Data Found";
    }
    for (let i = 0; i < posts.length; i++) {
      let btn = document.createElement("span");
      btn.innerHTML = "delete";
      btn.value = posts[i].id;
      btn.className = 'class="badge badge-danger';
      btn.addEventListener("click", e => this.deleteController(e));

      let newPost = document.createElement("div");
      newPost.setAttribute("class", "post-preview");
      newPost.innerHTML = `<a href="article.html?${
        posts[i].id
      }"><h2 class="post-title"><i class="fas fa-bookmark"></i> ${
        posts[i].title
      }
            </h2></a><h4 class="post-meta">${
              posts[i].subTitle
            }</h4><p class="post-meta">Posted 
             on ${posts[i].createDate}</p><a href="edit.html?${
        posts[i].id
      }"><span class="badge badge-success">Edit</span></a>
          `;

      newPost.appendChild(btn);
      spacetodraw.appendChild(newPost);
    }
  }
  drawSinglePost(posts, place) {
    let spacetodraw = document.getElementById(place);
    for (let i = 0; i < posts.length; i++) {
      spacetodraw.innerHTML += `<div class="post-preview">
      
            <a ><h1 class="post-title"><i class="fas fa-bookmark"></i> ${
              posts[0].title
            }
            </h1><img src="${posts[0].image}" class="img-fluid" ><br>
            <small class="text-muted">${posts[0].subTitle}</small><br>
            <h3 class="post-subtitle text-justify">${posts[0].body}</h3>
            </a><p class="post-meta">Posted by 
            <a>${posts[0].author}</a> on ${
        posts[0].createDate
      }  <i class="fa fa-thumbs-up" aria-hidden="true"></i> <span id="likes" value="${
        posts[0].likes
      }">${posts[0].likes} </span> 
            </p></div><hr>
           
           
            </p>
            `;
    }
  }

  drawcoments(posts, place) {
    let spacetodraw = document.getElementById(place);
    for (let i = 0; i < posts.length; i++) {
      spacetodraw.innerHTML += `
        <small class="text-muted">Posted By:  <span class="badge" id="authorspan">${
          posts[i].UserName
        }</span></small>
        <br><strong>${posts[i].comment}<br><hr></p>`;
    }
  }

  drawError(place) {
    let spacetodraw = document.getElementById(place);
    spacetodraw.innerHTML = "404 POST NOt FOUND";
  }

  drawedit(posts, place, id) {
    let getid = id;
    let spacetodraw = document.getElementById(place);
    let title = document.getElementById("title");
    let subtitle = document.getElementById("subtitle");
    let imageurl = document.getElementById("image");
    let author = document.getElementById("authorhide");
    let body = document.getElementById("body");
    let tags = document.getElementById("tagshide");
    let likes = document.getElementById("likes");
    imageurl.value = posts[0].image;
    title.value = posts[0].title;
    subtitle.value = posts[0].subTitle;
    author.value = posts[0].author;
    tags.value = posts[0].tags;
    body.value = posts[0].body;
    likes.value = posts[0].likes;
  }

  getinfotoUpdate(idtoupdate) {
    infotosave = {
      id: idtoupdate,
      title: document.getElementById("title").value,
      subTitle: document.getElementById("subtitle").value,
      image: document.getElementById("image").value,
      body: document.getElementById("body").value,
      createDate: 5,
      likes: document.getElementById("likes").value,
      author: document.getElementById("author").value,
      tags: document.getElementById("tags").value
    };
  }

  drawtags(post) {
    let tags = document.getElementById("tagsplace");
    let tagsvalues = document.getElementById("tagshide").value;
    let elementtags = document.getElementById("tags");
    let tagsarray = tagsvalues.split(",");
    post.forEach(tag => {
      tags.innerHTML += `<span class="badge badge-primary" style="cursor: pointer;"  id="${
        tag.id
      }">${tag.name}</span>  `;
      tagsarray.forEach(tag2 => {
        if (tag2 == tag.id) {
          elementtags.value += `${tag.name} ,`;
          elementtags.dataset.id += `${tag.id},`;
        }
      });
    });
  }

  drawAuthor(post) {
    let actualname = document.getElementById("authorhide").value;
    let authorelement = document.getElementById("author");

    post.forEach(data => {
      let selectfield = document.getElementById("FormControlSelect1");
      var option = document.createElement("option");
      option.text = data.name + " " + data.lastName;
      option.value = data.id;
      option.id = data.name + " " + data.lastName;
      selectfield.appendChild(option);

      if (actualname == data.id) {
        authorelement.value += `${data.name} ${data.lastName}`;
        authorelement.dataset.id = `${data.id}`;
      }
    });
  }

  deleteController(e) {
    const http = new HttpRequest();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        http.deleteById(`http://localhost:3000/posts/${e.target.value}`);

        alert("item has been deleted");
        location.reload();
      }
    });
  }

  changeAutor() {
    let selectitem = document.getElementById("FormControlSelect1");

    selectitem.addEventListener("change", () => {
      let authorelement = document.getElementById("author");
      let text = selectitem.options[selectitem.selectedIndex];
      authorelement.value = text.text;
      authorelement.dataset.id = text.value;
    });
  }
  addtagsToDom() {
    let selectitem = document.getElementById("tagsplace");

    selectitem.addEventListener("click", e => {
      if (e.target.tagName == "SPAN") {
        let elementtags = document.getElementById("tags");
        let tagsvalues = document.getElementById("tagshide").value;
        this.validatetaskexist(tagsvalues, e.target.id);
        if (this.validatetaskexist(tagsvalues, e.target.id)) {
          alert("value alredy exist");
        } else {
          elementtags.dataset.id += `${e.target.id},`;
          elementtags.value += `${e.target.innerText},`;
        }
      }
    });
  }

  drawfilterbytags(tagsarray) {
    let selectitem = document.getElementById("mytagsplace");

    tagsarray.forEach(tag => {
      selectitem.innerHTML += `<span class="badge badge-primary" style="cursor: pointer;"  id="${
        tag.id
      }">${tag.name}</span> `;
    });
  }

  validatetaskexist(tasks, id) {
    return tasks.includes(id);
  }

  getusercoments(comments) {
    let placetodraw = "coments";
    let idtosearch = comments.map(num => {
      return `http://localhost:3000/users/${num.id}`;
    });

    let requests = idtosearch.map(url => fetch(url));

    Promise.all(requests)
      .then(responses => responses)
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(users => {
        comments.map(comment => {
          const userName = users.find(user => user.id === comment.usuario);
          comment.UserName = userName.name;
        });

        this.drawcoments(comments, placetodraw);
      });
  }

  matchautors(post, placetodraw) { debugger
    let idtosearch = post.map(num => {
      return `http://localhost:3000/authors/${num.author}`;
    });
    console.log(idtosearch)
    let requests = idtosearch.map(url => fetch(url));
    Promise.all(requests)
      .then(responses => responses)
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(users => { 
        post.map(comment => { console.log(comment)
          const userName = users.find(user => user.id === comment.author);
          comment.author = userName.name;
        });
        this.drawSinglePost(post, placetodraw);
      });
  }
}
