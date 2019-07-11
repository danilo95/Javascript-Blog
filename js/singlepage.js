let locationtodraw = "singlepost";
let commentslocation = "coments";
const apis = new HttpRequest();
const uikits = new UiKit();
const putvalue = new Post();
let id = window.location.search.substring(1);

apis.getData(`http://localhost:3000/posts?id=${id}`).then(
  array => {
    uikits.matchautors(array, locationtodraw);
  }
  // uikits.drawSinglePost(array, locationtodraw)
);

apis
  .getData(`http://localhost:3000/posts/${id}/comments`)
  .then(array => uikits.getusercoments(array));

let prueba = document.getElementById("singlepost");
prueba.addEventListener("click", e => {
  if (e.target.tagName == "SPAN") {
    document.getElementById("likess").className = "fas fa-heart";
    document.getElementById("likess").innerHTML = " thaks for the like!!";
    let actuallike = parseInt(document.getElementById("likes").innerText);
    actuallike = actuallike + 1;
    datatoupdate = { likes: actuallike };
    apis.updateLikesById(`http://localhost:3000/posts/${id}`, datatoupdate);
  }
});
