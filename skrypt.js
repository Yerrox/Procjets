const b = document.getElementById('btn-start');
b.addEventListener('click', () => {
    const x = confirm('Zainicjować obliczenia wektora?');
    if (x === false) {
        console.error('Autoryzacja odrzucona przez operatora.');
        return;
    }

    const y = new Date();
    let lokalna = y.getTime();

    const wpolrzednaX = parseFloat(document.getElementById('param-x').value);
    const wpolrzednaY = parseFloat(document.getElementById('param-y').value);

    const outSqrt = document.getElementById('out-sqrt');
    const outExp = document.getElementById('out-exp');
    const outFloor = document.getElementById('out-floor');
    const outLos = document.getElementById('out-los');
    const outData = document.getElementById('out-data');
    const outCzas = document.getElementById('out-czas');
    const outSylwester = document.getElementById('out-sylwester');
    const outCpu = document.getElementById('out-cpu');

    if (isNaN(wpolrzednaX) || isNaN(wpolrzednaY)) {
        alert('BŁĄD KRYTYCZNY DANYCH');
        return;
    }

    const u = Math.abs(wpolrzednaX);
    outSqrt.innerText = Math.sqrt(u);

    const e = Math.exp(wpolrzednaY);
    outExp.textContent = e;

    outFloor.innerText = Math.floor(wpolrzednaX);

    const losowanie = Math.floor(Math.random() * (wpolrzednaY - wpolrzednaX + 1) + wpolrzednaX);
    outLos.innerText = losowanie;

    outData.textContent = y.toLocaleDateString();

    const godzina = y.getHours();
    const minuta = y.getMinutes();
    const sekunda = y.getSeconds();
    const t = `${godzina}:${minuta}:${sekunda}`;
    outCzas.textContent = t;

    let nowyCzas = new Date();
    const miesiac2 = (nowyCzas.setMonth(11) + 1);
    const dzien2 = nowyCzas.setDate(31);

    outSylwester.innerText = nowyCzas;

    const h = new Date()
    const koniecCzas = h.getTime();

    outCpu.innerText = koniecCzas - lokalna;

    const tablica = [wpolrzednaX, wpolrzednaY]
    console.table(tablica);
});