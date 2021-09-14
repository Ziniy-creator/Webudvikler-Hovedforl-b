let cars = [
  "Audi",
  "Seat",
  "VW",
  "Lamborgini",
  "Porsche",

  {
    skodaOctavia: {
      Brand: "skoda",
      Model: "Octavia",
      Engine: ["1.0 TSI", "1.5 TSI ACT", "2.0 TDI"],
    },
  },
];
let carsLength = cars.length;

skodaOctavia = {
  Brand: "skoda",
  Model: "Octavia",
  Engine: ["1.0 TSI", "1.5 TSI ACT", "2.0 TDI"],
};

for (let i = 0; i < carsLength; i++) {
  console.log(
    `${skodaOctavia.Brand} ${skodaOctavia.Model} ${skodaOctavia.Engine[2]}`
  );
}
