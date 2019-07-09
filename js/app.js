//import HttpRequest from "./httpRequest";

let maincontent='maincontentpost'; 
let lastcontent='contenthere'; 
const api = new HttpRequest();
const uikit = new UiKit();

api.getData('http://localhost:3000/posts?_sort=id&_order=desc&_start=3&_end=11')
.then(array=>uikit.drawPost(array,maincontent));

api.getData('http://localhost:3000/posts?_sort=id&_order=desc&_limit=3')
.then(array=>uikit.drawPost(array,lastcontent));
uikit.callDelete();



    