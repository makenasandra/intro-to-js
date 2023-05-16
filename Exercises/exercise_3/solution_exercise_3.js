const obj = {
  longStringProperty: 'longStringPropertynm',
  shortstringProperty: 'ciao',
  booleanProperty: true,
  numberProperty: 10,
  longStringProperty2: 'longStringPropertynm2'
}

function longStrings(obj) {
  let longArr = [];
  for (let prop in obj) {
    if (typeof obj[prop] === "string" && obj[prop].length > 5) {
      longArr.push(prop);
    }
  }
  return longArr;
}

  
console.log(longStrings(obj));