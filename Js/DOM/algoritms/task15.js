function kreditUyğunluğu(yas, gelir) {
    if (yas >= 25 && yas <= 40 && gelir > 5000) {
        return "Müraciət uyğundur.";
    } else if (yas > 40 && gelir > 7000) {
        return "Müraciət uyğundur.";
    } else if (yas < 25 && gelir > 10000) {
        return "Müraciət uyğundur.";
    } else {
        return "Müraciət rədd edilir.";
    }
}

console.log(kreditUyğunluğu(yas, gelir));
