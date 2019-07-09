let locationtodraw='singlepost';
const apis = new Handler();
const uikits = new UiKit();
let id = window.location.search.substring(1);
apis.getPostbyId(id)
.then(array=>uikits.drawSinglePost(array,locationtodraw))
