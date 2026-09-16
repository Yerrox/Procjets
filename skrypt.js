const rejestrZuzycia = new Array();

const b = document.getElementById('btn');
b.addEventListener('click', () =>{
    
    const f = document.forms['form'];
    const nazwaSprzetu = f['sprzet'].value.trim();
    const poborMocy = parseFloat(f['pobor'].value);
    const czas = parseFloat(f['czas'].value);

    if (isNaN(poborMocy) || isNaN(czas)) {
        alert('BŁĄD! Niepoprawne dane.');
        return;
    }

    const zuzycieEnergii = (poborMocy * czas) / 1000;

    rejestrZuzycia.push(zuzycieEnergii);

    const cialoTabeli = document.querySelector('table tbody');
    const nowyWiersz = `<tr><td> ${nazwaSprzetu} </td><td> ${zuzycieEnergii} </td><td> ${zuzycieEnergii > 5 ? 'WYSOKIE' : 'W NORMIE'} </td></tr>`;

    cialoTabeli.innerHTML += nowyWiersz;

    let akumulator = 0;
    for (let i = 0; i < rejestrZuzycia.length; i++) {
        const element = rejestrZuzycia[i];
        akumulator += element;
    }

    const p = document.getElementById('wynik');
    p.textContent = `Zarejestrowano ${rejestrZuzycia.length} urządzeń. Całkowite zużycie: ${akumulator} kWh.`;
});