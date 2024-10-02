function getHousesPrototype() {
    const maison = new Map();  
        maison.set('Apartment 75008', 90);
        maison.set('Apartment 94300', 105);
        maison.set('Apartment 92300', 140);
        maison.set('Apartment 75015', 65);
        return maison;
    }
console.log(getHousesPrototype());
