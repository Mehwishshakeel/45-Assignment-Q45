"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function creat_car(manufacture, model, optional) {
    return {
        manufacture,
        model,
        ...optional
    };
}
const my_car = creat_car("Toyota", "Corolla", { Color: "Black", Year: 2020 });
console.log(my_car);
