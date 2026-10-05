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
const wierszSt = document.getElementById('wiersz-statusowy');
const listaKoordynatow = document.getElementById('lista-koordynatow');


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

    if (poziomPaliwa < 20.0) {
        wierszSt.style.backgroundColor = "#450a0a";
        outStatus.textContent = "KRYTYCZNY STAN PALIWA"
    }else{
        wierszSt.style.backgroundColor = "#064e3b";
        outStatus.textContent = "AUTORYZACJA POPRAWNA";
    }

    const spalanie = poziomPaliwa / liczbaSektorow;
    const wynikSpalania = Math.floor(spalanie);

    outSpalanie.textContent = wynikSpalania;

    listaKoordynatow.innerHTML = "";
    const rejestrSektorow = [];
    for (let i = 0; i < liczbaSektorow.length; i++) {
        const wylosowanaLiczba = Math.floor(Math.random() * (999 - 100 + 1) + 100)
        rejestrSektorow.push(wylosowanaLiczba);
        if (listaKoordynatow !== null) {
            listaKoordynatow.innerHTML = `<li>Sektor ${i + 1}: Koordynat ${wylosowanaLiczba}</li>`;
        }
    }

    let data = new Date();
    let nowa = data.setFullYear(data.getFullYear + 4);
    document.cookie = "ostatniaMisja=" + kodMisji + "; expires=" + nowa + "; path=/";
    
    console.table(rejestrSektorow);
});

const bFormat = document.getElementById('btn-format');
bFormat.addEventListener('click', () => {
    document.cookie = "ostatniaMisja=" + "; expires=Thu, 01 Jan 1970 00:00:00 GMT" + "; path=/";
    location.reload();
});