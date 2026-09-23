const btn = document.getElementById('btn-weryfikuj');
btn.addEventListener('click', () => {
    const daneKlientaW = document.getElementById('dane-klienta').value.trim();
    const kodPromocyjnyW = document.getElementById('kod-promo').value.trim();
    const wartoscZamowienie = parseFloat(document.getElementById('wartosc').value);

    const poleStatus = document.getElementById('wynik-status');
    const poleIdentyfikator = document.getElementById('identyfikator');
    const poleKwota = document.getElementById('kwota');
    const poleCenzura = document.getElementById('kwota')

    if (daneKlientaW.length === 0 || isNaN(wartoscZamowienie) || wartoscZamowienie <= 0) {
        alert('BŁĄD: Wprowadź prawidłowe dane zamówienia.');
        return;
    }

    const trzyPierwszeZnaki = daneKlientaW.substring(0, 4);
    const wielkieLitery = trzyPierwszeZnaki.toUpperCase();

    const identyfikator = wielkieLitery + "-" + kodPromocyjnyW;
    poleIdentyfikator.textContent = identyfikator;

    const tablica = kodPromocyjnyW.split(" ");

    let akumulator = 0;
    for (let i = 0; i < tablica.length; i++) {
        const x = tablica[i];
        const znak = x.charCodeAt(0);

        if (znak === 50 || znak === 51) {
            akumulator++;
        }
    }

    if (kodPromocyjnyW.length === 5 && akumulator === 1) {
        
    }else if (kodPromocyjnyW.length !== 5 && akumulator !== 1)
});