const b = document.querySelector('.btn-dekoduj');

b.addEventListener('click', () => {
    const ciagZnakow = document.getElementById('sygnal').value.trim();

    if (ciagZnakow.length < 15) {
        alert('Błąd: Sygnał jest zbyt krótki!');
        return;
    }

    const wielkieLiteryPole = document.getElementById('out-wielkie');
    const piatyZnakPole = document.getElementById('out-znak-ascii');
    const pozycjaInfPole = document.getElementById('out-indeks');
    const wycinekPole = document.getElementById('out-wycinek');
    const filtracjaPole = document.getElementById('out-podmiana');
    const drugieSlowoPole = document.getElementById('out-slowo');

    const wielkiSygnal = ciagZnakow.toUpperCase();
    wielkieLiteryPole.innerText = wielkiSygnal;

    const znak5 = wielkiSygnal.charAt(4);
    const znakAscii = wielkiSygnal.charCodeAt(4);
    piatyZnakPole.textContent = `Znak: ${znak5}, ASCII: ${znakAscii}`;

    const fraza = wielkiSygnal.indexOf('INF');
    pozycjaInfPole.innerText = fraza;

    const wycinekZdania = wielkiSygnal.substring(4, 11);
    wycinekPole.textContent = wycinekZdania;

    const podmianka = wielkiSygnal.replace(/0/g, 'O');
    filtracjaPole.innerText = podmianka;

    const separacja = wielkiSygnal.split(" ");
    const drugieSlowo = separacja[1] ? separacja[1] : "";
    drugieSlowoPole.innerText = drugieSlowo;
});
