let locationtodraw='singlepost';
const editapi = new HttpRequest();
const edituikits = new UiKit();
let id = window.location.search.substring(1);
editapi.getData(`http://localhost:3000/posts?id=${id}&_embed=comments`)
.then(array=>edituikits.drawedit(array,locationtodraw,id))
