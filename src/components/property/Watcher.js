
//check if the Value1 contain things that's not number
export function WatchValue1(newVal) {
    //check if the inp is NaN
    if (isNaN(newVal)) {
        return this.V1Alert = true; // make the alert appear
    } else {
        return this.V1Alert = false; //make the alert disappear
    }
}

//check if the Value1 contain things that's not number
export function WatchValue2(newVal) {
    if (isNaN(newVal)) {
        return this.V2Alert = true;
    } else {
        return this.V2Alert = false;
    }
}

//funcion to switch the light mod and dark mode
export function Switch() {
    if (this.Switch) {
        this.MainID = 'MainID';
        this.ContainerID = 'ContainerID'
    }
    else {
        this.MainID = ''
        this.ContainerID = ''
    }
}
