
//function to calculate the value 1 and value 2
// export function Ans() {
//     //convert the inp value to number 
//     let V1 = Number(this.Value1)
//     let V2 = Number(this.Value2)
//     var Answer;
//     //check operation condition
//     if (this.add) {
//         Answer = V1 + V2
//     } else if (this.sub) {
//         Answer = V1 - V2;
//     } else if (this.multi) {
//         Answer = V1 * V2;
//     } else if (this.dev) {
//         Answer = V1 / V2;
//     }
//     return Answer;
// }

//function to show the warning alert if value 1 and value 2 contain somthing that's not number
export function showAlert(){
    if(this.V1Alert === true || this.V2Alert === true){
        return 1
    }
    return 0
}

//make the btn disable if the value1 or value2 empty
export function isBtnValid() {
    if (this.Value1 === '' || this.Value2 === '') {
        return 0
    }
    return 1
}