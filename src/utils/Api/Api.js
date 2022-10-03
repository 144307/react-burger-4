export default class Api {
  // constructor(url) {
  //   this.url = url;
  // }

  getData(url) {
    return fetch(url).then((response) => response.json());
    // return fetch(url).then((response) => {console.log("API TEST ORDER RESPONSE", response)})
  }

  checkout(url) {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: ["60d3b41abdacab0026a733cc", "60d3b41abdacab0026a733cb"],
      }),
    }).then((response) => response.json());
  }
}

// fetch('http://example.com/movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));
