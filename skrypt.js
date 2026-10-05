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

const outCel = document.getElementById('out-cel');
const outStatus = document.getElementById('out-status');
const outCzas = document.getElementById('out-czas');
const outSpalanie = document.getElementById('out-spalanie');


const bStart = document.getElementById('btn-start');
bStart.addEventListener('click', () => {
    const kodMisji = document.getElementById('kod-misji').value.trim();
    const poziomPaliwa = parseFloat(document.getElementById('poziom-paliwa').value);
    const liczbaSektorow = parseInt(document.getElementById('liczba-sektorow').value);

    if (kodMisji.length === 0 || isNaN(poziomPaliwa) || poziomPaliwa <= 0 || liczbaSektorow < 1 | liczbaSektorow > 10) {
        alert("BŁĄD KRYTYCZNY DANYCH");
        return;
    }

    const podzialka = kodMisji.split("-");

    try {
        if (podzialka !== 3) {
            awariaDeszyfratora();
        } else if(podzialka === 3){
            const cel = podzialka[1].toUpperCase();
            outCel.textContent = cel;
        }
    } catch (blad) {
        console.log("Naruszenie protokołu: " + blad.message);
        if (outCel !== null) {
            outCel.textContent = "BŁĄD KRYPTONIMU";
        }
    }


    let teraz = new Date();
    let godziny = teraz.getHours();
    let minuty = teraz.getMinutes();
    let sekundy = teraz.getSeconds();

    outCzas.textContent = `${godziny}:${minuty}:${sekundy}`;

});