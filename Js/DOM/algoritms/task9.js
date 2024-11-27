function getMonthName(month) {
    if (month < 1 || month > 12) {
        return "invalid input";
    }

    let monthName;

    if (month === 1) {
        monthName = "Yanvar";
    } else if (month === 2) {
        monthName = "Fevral";
    } else if (month === 3) {
        monthName = "Mart";
    } else if (month === 4) {
        monthName = "Aprel";
    } else if (month === 5) {
        monthName = "May";
    } else if (month === 6) {
        monthName = "İyun";
    } else if (month === 7) {
        monthName = "İyul";
    } else if (month === 8) {
        monthName = "Avqust";
    } else if (month === 9) {
        monthName = "Sentyabr";
    } else if (month === 10) {
        monthName = "Oktyabr";
    } else if (month === 11) {
        monthName = "Noyabr";
    } else if (month === 12) {
        monthName = "Dekabr";
    }

    return monthName;
}

console.log(getMonthName(month))
