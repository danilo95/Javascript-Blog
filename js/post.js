class Post {
    constructor() {
      this.title=document.getElementById('title');
      this.subtitle=document.getElementById('subtitle');
      this.imageurl=document.getElementById('image');
      this.author=document.getElementById('author');
      this.body=document.getElementById('body');
      this.tags=document.getElementById('tags');
      this.likes=0;
      this.createDate = new Date()

    }

    
    GetDatatoUpdate(id) {
      let date=this.giveDateFormat();
      let update={
"id": id,
"title": this.title.value,
"subTitle": this.subtitle.value,
"image": this.imageurl.value,
"body": this.body.value,
"createDate":date ,
"likes": this.likes,
"author": this.author.dataset.id,
"tags" : this.tags.dataset.id
      }
     
     return update;  
    }

    giveDateFormat(){
      const year = this.createDate.getFullYear().toString();
      const month = (this.createDate.getMonth()+1);
      const day = this.createDate.getDate();
     return this.createDate = `${year}/${ this.addzeros(month)}/${ this.addzeros(day)}`;
      
  }
  addzeros(date){
    return date<=9 ?  `0${date}`: date.toString(); 
  }

}