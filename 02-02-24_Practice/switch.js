function SeasonChecker(getSeason) {
    const lowercaseMonth = getSeason.toLowerCase()
    const monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    let  month = monthNames.indexOf(lowercaseMonth)+1;
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log(`${getSeason} is Winter`);
            break;
        case 3:
        case 4:
        case 5:
            console.log(`${getSeason} is Spring`);
            break;
        case 6:
        case 7:
        case 8:
            console.log(`${getSeason} is Summer`);
            break;
        case 9:
        case 10:
        case 11:
            console.log(`${getSeason} is Autumn`);
            break;
        default:
            console.log(`${getSeason} is an invalid Month`);
            break;
    }
}

SeasonChecker('MaY');
SeasonChecker('DeCembER');
SeasonChecker('Satarday');
