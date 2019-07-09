let maincontent='maincontentpost'; 
let lastcontent='contenthere'; 
const api = new Handler();
const uikit = new UiKit();

api.getPosts()
.then(array=>uikit.drawPost(array,maincontent));

api.get3LastPosts()
.then(array=>uikit.drawPost(array,lastcontent));

uikit.callDelete();



    