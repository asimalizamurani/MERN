function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 2000);
  });
}

fetchData()
.then((data) => {
    console.log(data)
    return data.toUpperCase()
})
.then((value) => {
    console.log(value)
})
.catch((err) => {
    console.error(err)
})
