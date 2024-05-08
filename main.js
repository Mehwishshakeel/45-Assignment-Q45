"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// manufacturer name (string), a model name (string)
function storeCarInfo(manufacturer, modelName, ...options) {
    // Create an object 
    let carInfo = {
        // Setting the manufacturer property to the provided manufacturer name
        manufacturer: manufacturer,
        // Setting the modelName property to the provided model name
        modelName: modelName
    };
    // Iterate over each option provided
    for (let option of options) {
        // Set the property in the carInfo object corresponding to the key provided in the option tuple
        // to the value provided in the option tuple
        carInfo[option[0]] = option[1];
    }
    // Return the carInfo object containing all the car information
    return carInfo;
}
let car1 = storeCarInfo('Toyota', 'Corolla', ['color', 'black'], ['year', 2017]);
console.log(car1);
