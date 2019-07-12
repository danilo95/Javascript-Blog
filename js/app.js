let maincontent = "maincontentpost";
let lastcontent = "contenthere";
const api = new HttpRequest();
const uikit = new UiKit();

api
  .getData("http://localhost:3000/posts?_sort=id&_order=desc&_start=3&_end=11")
  .then(array => uikit.drawPost(array, maincontent));

api
  .getData("http://localhost:3000/posts?_sort=id&_order=desc&_limit=3")
  .then(array => uikit.drawPost(array, lastcontent));

api
  .getData("http://localhost:3000/tags")
  .then(array => uikit.drawfilterbytags(array));

let selectitem = document.getElementById("mytagsplace");
selectitem.addEventListener("click", e => {
  let livesearchvalue = (document.getElementById("livesearch").value = "");
  if (e.target.tagName == "SPAN") {
    api
      .getData(`http://localhost:3000/posts?tags_like=${e.target.id}&_sort=id&_order=desc`)
      .then(array => uikit.drawPost(array, maincontent));
  }
});

let livesearch = document.getElementById("livesearch");
livesearch.addEventListener("keyup", e => {
  let livesearchvalue = document.getElementById("livesearch").value;
  if(document.getElementById("livesearch").value==""){
    api
  .getData("http://localhost:3000/posts?_sort=id&_order=desc&_start=3&_end=11")
  .then(array => uikit.drawPost(array, maincontent));
  }else{
  api
    .getData(`http://localhost:3000/posts?title_like=${livesearchvalue}&_sort=id&_order=desc`)
    .then(array => uikit.drawPost(array, maincontent)); }
});
