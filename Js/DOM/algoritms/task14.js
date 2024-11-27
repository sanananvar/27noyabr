function reseptQiymetlendirme(maddelerinSayi, yagliMaddelerinSayi) {
    let çətinlik;
    let sağlamlıqDərəcəsi;

    if (maddelerinSayi > 10) {
        çətinlik = "Çətin";
        sağlamlıqDərəcəsi = yagliMaddelerinSayi > 3 ? "Sağlam deyil" : "Sağlam";
    } else if (maddelerinSayi >= 5 && maddelerinSayi <= 10) {
        çətinlik = "Orta";
        sağlamlıqDərəcəsi = yagliMaddelerinSayi >= 1 && yagliMaddelerinSayi <= 3 ? "Orta Sağlam" : "Sağlam";
    } else {
        çətinlik = "Asan";
        sağlamlıqDərəcəsi = yagliMaddelerinSayi === 0 ? "Sağlam" : "Sağlam deyil";
    }

    return {
        çətinlik: çətinlik,
        sağlamlıqDərəcəsi: sağlamlıqDərəcəsi
    };
}

console.log(reseptQiymetlendirme(maddelerinSayi, yagliMaddelerinSayi));
