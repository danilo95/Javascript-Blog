let locationtodraw='singlepost';
let commentslocation='coments';
const apis = new HttpRequest();
const uikits = new UiKit();
let id = window.location.search.substring(1);

apis.getData(`http://localhost:3000/posts?id=${id}`)
.then(array=>uikits.drawSinglePost(array,locationtodraw))

apis.getData(`http://localhost:3000/posts/${id}/comments`)
.then(array=>uikits.drawcoments(array,commentslocation))