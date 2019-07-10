class HttpRequest {
  getData = (url) => { 
    return fetch(url)
    .then(response => { 
      if(!response.ok){
        throw new Error(response)
      }
      return response.json() 
    })
    .then(result=>{
      return result
     })
    .catch(error => error)  
  }

  deleteById = (url) => { 
    return fetch(url, { method: "DELETE" })
    .then(response => { 
      if(!response.ok){
        throw new Error(response)
      }
      return response.json() 
    })
    .then(result=>{
      return result
     })
    .catch(error => error)  
  }

  

  

  errorHandler = (error) => {
    switch(error.status){

    }
  }
}