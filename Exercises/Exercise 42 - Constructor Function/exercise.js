function Smartphone( brand, name, price){
    this.brand = brand; //similar t0 brand: brand
    this.name = name; //similar to obj[name] = anme
    this.price = price;
}

let myPhone = new Smartphone("Apple", "Iphone14", "202000");
let latestPhone = new Smartphone ("Samsung", "S20", "20220");

console.log(myPhone);
console.log(latestPhone);