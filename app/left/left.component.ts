import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

   // productName:string = 'Tshirt'; //api  Spring REST
   status:boolean = false;  // api
   productStatus:boolean = false;
   products:Product[] = [];
    discount:number=0;


    totalgrossamount:number=0;
        discountamount:number=0;
        netbillamount:number=0;
      gst:number=0;
        totalbill:number=0;
   constructor() { 
     this.products.push(this.p1)
     }
      p1:Product = {
       productName:'Tshirt',
       ammount:2800,
       units:2
     }
     getDiscount(disType:string)
     {
       console.log('inside getDiscount '+disType)
       if(disType=='15off' )
       {
          this.discount=15
       }
       else if(disType=='8off')
       {
         this.discount=8
       }
       else if(disType=='200ff')
       {
         this.discount=20
          
       }
       
     }
     doCalculate()
     {
      console.log('inside doCalculate ');
      
      let amount=2800;
      let quantity=2;
       this.totalgrossamount=(amount*quantity);
       this. discountamount=(this.totalgrossamount)*(this.discount/100);
       this. netbillamount=this.totalgrossamount-this.discountamount;
       this.gst=(this.netbillamount)*12/100;
       let totalbill=this.netbillamount+this.gst;
      
      
      
      console.log('total price   '+totalbill);
      
     }

     
  
 
   ngOnInit(): void {
 
   }
 
 }//end of class
 interface Product
 {
   productName:string;
   ammount:number;
   units:number
 }
