type car={
     manufacture:string,
     model:string,
     [key:string]:any;
}
function creat_car(manufacture:string,model:string,optional:Record<string,any>):car{
  return{
    manufacture,
    model,
    ...optional
  }
}
const my_car:car=creat_car("Toyota","Corolla",{Color:"Black",Year:2020});
console.log(my_car);