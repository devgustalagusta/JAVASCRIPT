function PhoneNumber(phoneNumberString){
    const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "")
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
    this.number = fixedString.match(/(?<=\)).+/)[0]
}

console.log(new PhoneNumber('+55 (85) 4235-2343'))
console.log(new PhoneNumber('+0 (812) 4235-2343faf-esf83'))