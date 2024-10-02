function caseInsensitiveCompare(housingtofind, housinglist) {
    return  housingtofind.toLowerCase() === housinglist.toLowerCase();
}
function findHousing(housingtofind, housinglist) {
    let ind = 0;
    while (ind < housinglist.length) {
        if (housingtofind.toLowerCase() === housinglist[ind].toLowerCase()) {
            return [ind, housinglist[ind]]
        }
      ind+=1;    
    }
    return null;
}
//Some code to display your function output: (you must modify it but /!\ do not deliver it /!\ ). Only deliver your function
displayResult(findHousing("igloo", ["Flat", "House", "Hut", "House", "Igloo"]))
