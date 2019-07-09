let locationtodraw='singlepost';
const apis = new HttpRequest();
const uikits = new UiKit();
let id = window.location.search.substring(1);
apis.getData(`http://localhost:3000/posts?id=${id}&_embed=comments`)
.then(array=>uikits.drawSinglePost(array,locationtodraw))
