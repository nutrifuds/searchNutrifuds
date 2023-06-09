class DataSource {
  static searchClub(keyword) {
    return fetch(`https://4r5lltxu.api.sanity.io/v2021-10-21/data/query/production?query=*%5Btitle%20match%20%22${keyword}%22%5D%7B%0A%20%20title%2C%0A%22imgurl%22%3A%20imgurl.asset-%3Eurl%0A%7D%0A%0A`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.result) {
            console.log(responseJson.result[0].title)
            return Promise.resolve(responseJson.result);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}

export default DataSource;
