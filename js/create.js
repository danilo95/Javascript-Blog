const callapi = new HttpRequest();
const calluikits = new UiKit();
const callcreate = new Post();


callapi.getData("http://localhost:3000/tags").then(array => {
  calluikits.drawtags(array);
});

callapi.getData("http://localhost:3000/authors/").then(array => {
  calluikits.drawAuthor(array);
});

calluikits.changeAutor();
calluikits.addtagsToDom();

let save = document.getElementById("save");
save.addEventListener("click", e => {
  let newPost = callcreate.GetDatatoUpdate(0);
  callapi
    .createpost(`http://localhost:3000/posts/`, newPost)
    .then(alert("info insert sucefully"));
});