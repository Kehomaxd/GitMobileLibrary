//@kehomaxd



export class Mobile {

    private name:string;
    private model:string;
    private trademark:string;
    private sdSize:number;
    private color:string;
    private is5G:boolean;
    private cameraNum: number;
    private price:number;

    constructor(namePrm:string, modelPrm:string, trademarkPrm:string, sdSizePrm:number, colorPrm:string, is5GPrm:boolean, cameraNumPrm:number, pricePrm:number){

        this.name = namePrm;
        this.model = modelPrm;
        this.trademark = trademarkPrm;
        this.sdSize = sdSizePrm;
        this.color = colorPrm;
        this.is5G = is5GPrm;
        this.cameraNum = cameraNumPrm;
        this.price = pricePrm;

    }

    public getName():string{
        return this.name;
    }
    public getModel():string{
        return this.model
    }
    public getTrademark():string{
        return this.trademark;
    }
    public getSDsize():number{
        return this.sdSize;    
    }
    public getColor():string{
        return this.color;    
    }
    public get():boolean{
        return this.is5G;
    }
    public getCameraNum():number{
        return this.cameraNum;    
    }
    public getPrice():number{
        return this.price;
    }


    setName(change:string){
        this.name = change;
    }
    setModel(change:string){
        this.model = change;
    }
    setTrademark(change:string){
        this.trademark = change;
    }
    setSDsize(change:number){
        this.sdSize = change;
    }
    setColor(change:string){
        this.color = change;
    }
    setIs5G(change:boolean){
        this.is5G = change;
    }
    setCameraNum(change:number){
        this.cameraNum = change;
    }
    setPrice(change:number){
        this.price = change;
    }

    public printMobile(){

        console.log (`The characteristics of the mobile are:\n
        Nombre: ${this.name}\n
        Modelo: ${this.model}\n
        Marca: ${this.trademark}\n
        Memoria: ${this.sdSize}G\n
        Color: ${this.color}\n
        Es 5G: ${this.is5G}\n
        Tiene: ${this.cameraNum} camaras
        El precio es de: $${this.price}` )

    }
}
