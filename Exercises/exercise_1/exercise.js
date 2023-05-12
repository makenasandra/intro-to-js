function printCarInfo(carInfo) {

    let latestCars = [];

    for (let index = 0; index < carInfo.length; index++) {
        if (carInfo[index].year >= 2000){
            latestCars.push(`${carInfo[index].brand} ${carInfo[index].model}`);
           
        }
        
    }

    return latestCars;
}

let mycar = [{brand: "Rolls-Royce", model:"Ghost", year:2019},
{brand: "VW", model:"400", year:1998},
{brand: "Benz", model:"C900", year:2022},
{brand: "Ford", model:"M34", year:1970}
];


console.log(printCarInfo(mycar));