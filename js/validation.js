class Validation{

validationofInputs(){

  let title = document.getElementById("title").value
  let subtitle = document.getElementById("subtitle").value
  let imageurl = document.getElementById("image").value
  let author = document.getElementById("author").value
  let body = document.getElementById("body").value
  let tags = document.getElementById("tags").value
  if(title==null || title==""){
    alert('title cant be null or empty');
    document.getElementById("title").focus();
  }
  else if(subtitle==null || subtitle==""){
    alert('subtitle cant be null or empty');
    document.getElementById("subtitle").focus();
  }
  else if(imageurl==null || imageurl==""){
    alert('Give us the url of a image');
    document.getElementById("image").focus();
  }
  else if(author==null || author==""){
    alert('author cant be null or empty');
    document.getElementById("author").focus();
  }
  else if(body==null || body==""){
    alert('body cant be null or empty');
    document.getElementById("body").focus();
  }
  else if(tags==null || tags==""){
    alert('tags cant be null or empty');
    document.getElementById("tags").focus();
  }
  else{
    if(this.validURL(imageurl)){
return true;
    }else{
      alert('Format of url not valid')
    }
  }
}

validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ 
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
    '(\\#[-a-z\\d_]*)?$','i'); 
   
    return !!pattern.test(str);
}

}