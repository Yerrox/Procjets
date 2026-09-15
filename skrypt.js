const tab = [];

const btn = document.getElementById('btn-dodaj');

btn.addEventListener('click', () => {

    const nazProdukt = document.getElementById('nazprodukt').value.trim();
    const sztuki = parseInt(document.getElementById('sztuk').value, 10);
    const cenaJed = parseFloat(document.getElementById('cena').value);
    
    if (isNaN(sztuki) || isNaN(cenaJed) ) {
        alert("BŁĄD! Podane dane są nieprawidłowe.");
        return;     
    }

    let wartoscCalkowita = sztuki * cenaJed;

    tab.push(wartoscCalkowita);

    const cialoTabeli = document.getElementsByTagName('tbody')[0];
    
    const noweWiersze = `<tr><td>${nazProdukt}</td></tr><tr><td>${sztuki}</td></tr><tr><td>${wartoscCalkowita}</td></tr>`;

    cialoTabeli.innerHTML += noweWiersze;

    let akumulator = 0;
    for (let i = 0; i < tab.length; i++) {
        const elementy = tab[i];
        akumulator += elementy;
    }

    const suma = document.getElementById('suma-wyjscie');
    if (suma) {
        suma.textContent = akumulator;
    }
});