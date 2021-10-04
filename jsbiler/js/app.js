const cars = [
  {
    id: 1,
    brand: "audi",
    model: "a4",
    engine: "V 2.0",
    img: "https://cdn.mandesager.dk/wp-content/uploads/2020/01/Audi-A4-Avant_1.jpg",
  },

  {
    id: 2,
    brand: "skoda",
    model: "Fabia",
    engine: "V 1.4 Combi",
    img: "https://billeder.weblook.dk/photos/attachments/1538/7685505.jpg?width=540&height=367&maxheight=367&mode=crop&scale=upscalecanvas&bgcolor=black&quality=70",
  },

  {
    id: 3,
    brand: "BMW",
    model: "M 240I",
    engine: "V 3.6",
    img: "https://www.bmw.dk/content/dam/bmw/common/all-models/m-series/bmw-m240i-xdrive-coupe/onepager/bmw-2-series-m240i-xdrive-coupe-onepager-sp-desktop.jpg.asset.1623080249947.jpg",
  },

  {
    id: 4,
    brand: "Seat",
    model: "Leon Cupra",
    engine: "V 2.0",
    img: "https://fdm.dk/sites/default/files/styles/hero_xsmall/public/2020-03/Cupra-Formentor-for2.jpg?h=28dfee17&itok=0Qg4rW1B",
  },

  {
    id: 5,
    brand: "Seat",
    model: "Leon Cupra5D",
    engine: "V 3.0",
    img: "https://www.cupraofficial.dk/content/dam/public/cupra-website/cars/cupra-range/leon/overview/content-box-gallery-petrol-power/x-large/cupra-leon-5d-visible-exhaust-pipes.jpg",
  },
];

function carList() {
  for (let i = 0; i < cars.length; i++) {
    let carListData = document.querySelector(".car-list");
    const infos = Object.values(cars[i]);
    console.log(infos);

    carListData.innerHTML += `<div class='card'><div class='card-image'> <img src="${infos[4]}"></img></div><div class='card-title'><h4>${infos[1]}</h4></div></div>`;
  }
}

carList();

fetch("https://javascript.webexam-mcdm.dk/api/images")
  .then(function (res) {
    return res.json();
  })

  .then((resData) => {
    const carData = document.getElementById("api-data-cars");

    for (let i = 0; i < resData.length; i++) {
      const dataApi = Object.values(resData[i]);
      console.log(carData);

      carData.innerHTML += `<div class='card'><div class='card-image'> <img src="${dataApi[2]}"></img></div><div class='card-title'><h4>${dataApi[1]}</h4></div></div>`;
    }
  });

fetch("https://javascript.webexam-mcdm.dk/api/contacts",{
  method: "POST",
  body: JSON.stringify({
    phone: "lorem ipsum",
    message: "lorem ipsum",
  })}
