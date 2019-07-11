class HttpRequest {
  getData = url => {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response);
        }
        return response.json();
      })
      .then(result => {
        return result;
      })
      .catch(error => error);
  };

  deleteById = url => {
    return fetch(url, { method: "DELETE" })
      .then(response => {
        if (!response.ok) {
          throw new Error(response);
        }
        return response.json();
      })
      .then(result => {
        return result;
      })
      .catch(error => error);
  };

  updateById = (url, data) => {
    return fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response);
        }
        return response.json();
      })
      .then(result => {
        return result;
      })
      .catch(error => error);
  };

  createpost = (url, data) => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response);
        }
        return response.json();
      })
      .then(result => {
        return result;
      })
      .catch(error => error);
  };
}
