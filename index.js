import countryData from './static/data.country.json' assert {type: 'json'};

function LikeByName(name){
    const filtered = countryData.filter((prop) => {
        return prop.name && prop.name.toLowerCase().includes(name.toLowerCase());
    });

    return filtered;
}

function LikeByAlpha2(alpha2){
    const filtered = countryData.filter((prop) => {
        return prop.alpha2 && prop.alpha2.toLowerCase().includes(alpha2.toLowerCase());
    });

    return filtered;
}

function LikeByAlpha3(alpha3){
    const filtered = countryData.filter((prop) => {
        return prop.alpha3 && prop.alpha3.toLowerCase().includes(alpha3.toLowerCase());
    });

    return filtered;
}

function LikeByNumeric(numeric){
    const filtered = countryData.filter((prop) => {
        return prop.numeric && prop.numeric.toLowerCase().includes(numeric.toLowerCase());
    });

    return filtered;
}

function findOneByName(name){
    return countryData.find(prop => {
        return prop.name.toLocaleLowerCase() == name.toLocaleLowerCase();
    });
}

function findOneByAlpha2(alpha2){
    return countryData.find(prop => {
        return prop.alpha2.toLocaleLowerCase() == alpha2.toLocaleLowerCase();
    });
}

function findOneByAlpha3(alpha3){
    return countryData.find(prop => {
        return prop.alpha3.toLocaleLowerCase() == alpha3.toLocaleLowerCase();
    });
}

function findOneByNumeric(numeric){
    return countryData.find(prop => {
        return prop.numeric.toLocaleLowerCase() == numeric.toLocaleLowerCase();
    });
}

export default { 
    LikeByName,
    LikeByAlpha2,
    LikeByAlpha3,
    LikeByNumeric,
    findOneByName,
    findOneByAlpha2,
    findOneByAlpha3,
    findOneByNumeric,
}