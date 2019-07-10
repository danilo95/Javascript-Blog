let locationtodraw='singlepost';
const editapi = new HttpRequest();
const edituikits = new UiKit();
let id = window.location.search.substring(1);

editapi.getData(`http://localhost:3000/posts?id=${id}&_embed=comments`)
.then(array=>{edituikits.drawedit(array,locationtodraw,id)})


editapi.getData('http://localhost:3000/tags')
.then(array=>{edituikits.drawtags(array) })

editapi.getData('http://localhost:3000/authors/')
.then(array=>{edituikits.drawAuthor(array) })

let save= document.getElementById('save');
save.addEventListener('click',(e) => {console.log(1)})

