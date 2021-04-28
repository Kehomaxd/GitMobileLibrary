//@kehomaxd
import {Mobile} from "../Repaso2/Mobile";
import {MobileLibrary} from "./mobileLibrary";

let cel1 = new Mobile ("Redmi Note 8T", "M1908C3XG", "Xiaomi", 8, "Blue", true, 5, 180);
let cel2 = new Mobile ("Nokia 3210", "Unknow", "Nokia",  1, "Yellow", false, 0, 12);
let cel3  = new Mobile ("Pixel 4a", "Unknow", "Google", 6, "Black", true, 2, 390);  
let cel4 = new Mobile ("PearPhoneXT", "N03X1573", "PearPhone", 16, "green", true, 3, 200);
let allCel = [cel1, cel2, cel3, cel4];
let library = new MobileLibrary("Alfredo", "Hollywood", allCel, );
 

// console.log(library.totalPriceCalculation());
library.printLibrary(library);

console.log(library.getLocation());
console.log(cel4.getColor());
console.log(library.getName());

console.log(cel2.getSDsize());
console.log(library.getMobiles());
