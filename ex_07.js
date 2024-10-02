function createCity(country, cityName) {
    country.push([cityName, []]);
}
function createHousing(country, cityName, housingName) {
    for (let city of country) {
        if (city[0] === cityName) {
            city[1].push([housingName, []]);
            return;
        }
    }
    console.log(`Failure to get city: ${cityName}`);
}
function addCharacteristics(country, cityName, housingName, ...characteristics) {
    for (let city of country) {
        if (city[0] === cityName) {
            for (let house of city[1]) {
                if (house[0] === housingName) {
                    house[1] = characteristics;
                    return;
                }
            }
            console.log(`Failure to get housing: ${housingName} in city ${cityName}`);
            return;
        }
    }
    console.log(`Failure to get city: ${cityName}`);
}

function getCharacteristicsOfHousing(country, cityName, housingName) {
    for (let city of country) {
        if (city[0] === cityName) {
            for (let house of city[1]) {
                if (house[0] === housingName) {
                    return house[1];
                }
            }
            console.log(`Failure to get housing: ${housingName} in city ${cityName}`);
            return null;
        }
    }
    console.log(`Failure to get city: ${cityName}`);
    return null;
}
let country = [];
createCity(country, "Nantes");
createHousing(country, "Nantes", "Apartment1");
addCharacteristics(country, "Nantes", "Apartment1", "100m2", "2 bathrooms", "Red paint", "14 rue Arthur III");

console.log(getCharacteristicsOfHousing(country, "Nantes", "Apartment1")); // ["100m2", "2 bathrooms", "Red paint", "14 rue Arthur III"]
console.log(country); // [["Nantes", [["Apartment1", ["100m2", "2 bathrooms", "Red paint", "14 rue Arthur III"]]]]]
