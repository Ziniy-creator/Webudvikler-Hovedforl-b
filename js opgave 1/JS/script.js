fetch("https://jsonplaceholder.typicode.com/todos/")
  .then(function (res) {
    return res.json();
  })

  .then(function (resData) {
    const apiData = document.querySelector(".api-data");
    document.querySelector(".api-data").innerHTML = `${resData[0].title} ${
      resData[0].id + " "
    }`;

    for (let i = 0; i < resData.length; i++) {
      apiData.innerHTML += `<li>${`${resData[i].id} ${resData[i].title}`} </li>`;
    }
  });
