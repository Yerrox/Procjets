const rejestrAmplitud = new Array();

const btn = document.getElementById('btn-zapisz');
btn.addEventListener('click', () => {

    const rejonWys = document.getElementById('rejon').value;
    const amplituda = parseFloat(document.getElementById('amplituda').value);
    const czas = parseInt(document.getElementById('czas').value, 10);

    if (rejonWys === '' || isNaN(amplituda) || isNaN(czas)) {
        alert('Błąd wprowadzania: Uzupełnij poprawnie wszystkie parametry.');
        return;
    }

    rejestrAmplitud.push(amplituda);

    const energiaSkumulowana = amplituda * czas;

    const cialoTabeli = document.querySelector('table tbody');
    const nowyWiersz = `<tr><td>${rejonWys}</td><td>${amplituda}</td><td>${energiaSkumulowana}</td></tr>`;

    cialoTabeli.innerHTML += nowyWiersz;

    let wskaznikZdarzen = 0;
    for (let i = 0; i < rejestrAmplitud.length; i++) {
        const elementy = rejestrAmplitud[i];
        
        if (elementy >= 5) {
            wskaznikZdarzen++;
        }
    }

    const p = document.getElementById('statystyki');
    p.innerText = `Zajerestrowano łącznie ${rejestrAmplitud.length} wstrząsów. Zdarzenia krytyczne ${wskaznikZdarzen}`;
});