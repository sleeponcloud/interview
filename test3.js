function getUniqueNumber (items) { 
    const uniqueNumber = items.filter((item, index, arr) => arr.indexOf(item) === arr.lastIndexOf(item));
    console.log(uniqueNumber);
} 
    