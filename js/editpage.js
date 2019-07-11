let locationtodraw = "singlepost";
const editapi = new HttpRequest();
const edituikits = new UiKit();
const put = new Post();
let id = window.location.search.substring(1);

editapi
  .getData(`http://localhost:3000/posts?id=${id}&_embed=comments`)
  .then(array => {
    edituikits.drawedit(array, locationtodraw, id);
  });

editapi.getData("http://localhost:3000/tags").then(array => {
  edituikits.drawtags(array);
});

editapi.getData("http://localhost:3000/authors/").then(array => {
  edituikits.drawAuthor(array);
});

let save = document.getElementById("save");
save.addEventListener("click", e => {
  const validateinputs = new Validation();
  if (validateinputs.validationofInputs()) {
    let Update = put.GetDatatoUpdate(id);
    let actuallikes = document.getElementById("likes").value;
    Update.likes = actuallikes;
    editapi
      .updateById(`http://localhost:3000/posts/${id}`, Update)
      .then(alert("Updated info"))
      .then(location.reload());
  }
});

edituikits.changeAutor();
edituikits.addtagsToDom();
