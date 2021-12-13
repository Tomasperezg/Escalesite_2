import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: "phoneNumber"
})

export class PhonePipe implements PipeTransform{
    transform(newNum) {

        let formatedNumber = ""
        let code = ""
        let numberSecOne = ""
        let numberSecTwo = "";
        let i = 0;

        for(; i < newNum.length; i ++){
            code = newNum.slice(0, 3);
            numberSecOne = newNum.slice(3, 6);
            numberSecTwo = newNum.slice(6, 10); 
            formatedNumber = "("+code+")"+numberSecOne+"-"+numberSecTwo;  
        }
        return formatedNumber;
       

    }
    
}
