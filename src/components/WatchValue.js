//functions to check if the value inp by user in string or any scpecial characters that're nor number

export function Value1(newVal){
    //check if the inp is NaN
    if(isNaN(newVal)){ 
        return this.showAlert = true; // make the alert appear
    } 
    // else if(newVal !== ''){
    //     return this.isFormValid= true
    // }  
    else {
        // this.isFormValid= false
        return this.showAlert = false; //make the alert disappear
    }
}
export function Value2(newVal){
    if(isNaN(newVal)){ 
        return this.showAlert = true;
    } 
    // else if(newVal !== ''){
    //     return this.isFormValid= true
    // }  
    else {
        // this.isFormValid= false
        return this.showAlert = false; 
    }
}