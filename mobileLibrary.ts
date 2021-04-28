//@kehomaxd

import {Mobile} from "../Repaso2/Mobile";

export class MobileLibrary{

    private name:string;
    private location:string;
    private mobiles:Mobile[];
    private totalPrice:number;

    constructor(namePrm:string, locationPrm:string, mobilesPrm:Mobile[]){

        this.name = namePrm;
        this.location = locationPrm;
        this.mobiles = mobilesPrm; 
        this.totalPrice = this.totalPriceCalculation();

    }

    getName(){
        return this.name;
    }
    getLocation(){
        return this.location;
    }
    getMobiles(){
        return this.mobiles;
    }
    getTotal(){
        let i=0;
        do{
            this.totalPrice += this.mobiles[i].getPrice()
            i++
        }while(i<this.mobiles.length)
        return this.totalPrice;
    }

    setName(change){
        this.name = change;
    }
    setLocation(change){
        this.location = change;
    }   
    setMobiles(change){
        this.mobiles = change;
    }
    setTotal(change){
        this.totalPrice = change;
    }

    public totalPriceCalculation():number{
        let i=0;
        let totalPlus = 0;
        do{
            totalPlus += this.mobiles[i].getPrice();
            i++;
        }while(i<this.mobiles.length)
         return totalPlus;
    }



}