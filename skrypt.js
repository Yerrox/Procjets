function odczytajCiasteczko(nazwa){
    let ciasteczka = document.cookie.split("; ");
    for (let i = 0; i < ciasteczka.length; i++) {
        let para = ciasteczka[i].split("=");
        if (para[0] === nazwa) {
            return para[1];
        }    
    }
    return null;
};

const outMisja = document.getElementById('out-ostatnia-misja');
const ostatniaMisja = odczytajCiasteczko("ostatniaMisja");
if (ostatniaMisja !== null) {
    outMisja.textContent = `Pamięć podręczna: Ostatnia misja to ${ostatniaMisja}.`;
}else{
    outMisja.textContent = "Brak danych o poprzednich logowaniach."
}

const bStart = document.getElementById('btn-start');
bStart.addEventListener('click', () => {
    const kodMisji = document.getElementById('kod-misji').value.trim();
    const poziomPaliwa = parseFloat(document.getElementById('poziom-paliwa').value);
    const liczbaSektorow = parseInt(document.getElementById('liczba-sektorow').value);

    if (kodMisji.length === 0 || isNaN(poziomPaliwa) || poziomPaliwa <= 0 || liczbaSektorow < 1 | liczbaSektorow > 10) {
        alert("BŁĄD KRYTYCZNY DANYCH");
        return;
    }

    
});