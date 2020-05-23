class Doctor{
    constructor(name,address,phone){
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    getName(){
        return this.name;
    }
    getAddress(){
        return this.address;
    }
}
module.exports = Doctor;
