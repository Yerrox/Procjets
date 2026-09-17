const b = document.querySelector('.panel-wejscia button');
b.addEventListener('click', () =>{
    const ciagZnakow = document.getElementById('sygnal').value.trim();

    if (ciagZnakow.length < 15) {
        alert('Błąd: Sygnału jest zbyt krótki!');
        return;
    }

    const wielkieLiteryPole = document.getElementById('out-wielkie');
    const piatyZnakPole = document.getElementById('out-znak-ascii');
    const pozycjaInfPole = document.getElementById('out-indeks');
    const wycinekPole = document.getElementById('out-wycinek');
    const filtracjaPole = document.getElementById('out-podmiana');
    const drugieSlowoPole = document.getElementById('out-slowo');

    const zmiana1 = ciagZnakow.toUpperCase();
    wielkieLiteryPole.innerText = zmiana1;

    const znak5 = ciagZnakow.charAt(4);
    const znakAscii = ciagZnakow.charCodeAt(4);
    piatyZnakPole.textContent = `Znak: ${znak5}, ASCII: ${znakAscii}`;

    const fraza = ciagZnakow.toUpperCase().indexOf('INF');
    pozycjaInfPole.innerText = fraza;

    const wycinekZdania = ciagZnakow.substring(4, 11);
    wycinekPole.textContent = wycinekZdania;

    const podmianka = ciagZnakow.replace(/0/g, '0');

    filtracjaPole.innerText = podmianka;

    const separacja = ciagZnakow.split(" ");

    const drugieSlowo = separacja[1];
    drugieSlowoPole.innerText = drugieSlowo;


});