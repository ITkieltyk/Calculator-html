// Import stylesheets
import './style.css';

// Write Javascript code!

function dodawanie(a, b) {
  return a + b;
}

function odejmowanie(a, b) {
  return a - b;
}

function mnozenie(a, b) {
  return a * b;
}

function dzielenie(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    window.alert('Dzielenie przez 0 jest niedopuszczalne!');
    return 'Dzielenie przez 0 jest niedopuszczalne!';
  }
}

function resztaZdzielenia(a, b) {
  if (b !== 0) {
    return a % b;
  } else {
    window.alert('Dzielenie przez 0 jest niedopuszczalne!');
    return 'Dzielenie przez 0 jest niedopuszczalne!';
  }
}

function calculate(dzialanie, a, b) {
  switch (dzialanie) {
    case 1:
      console.log('Wybrałeś dodawanie dwóch argumentów');
      const wynik1 = dodawanie(a, b);
      console.log(`Wynik działania to: ${wynik1}`);
      return wynik1;
      break;
    case 2:
      console.log('Wybrałeś odejmownie dwóch argumentów');
      const wynik2 = odejmowanie(a, b);
      console.log(`Wynik działania to: ${wynik2}`);
      return wynik2;
      break;
    case 3:
      console.log('Wybrałeś mnożenie dwóch argumentów');
      const wynik3 = mnozenie(a, b);
      console.log(`Wynik działania to: ${wynik3}`);
      return wynik3;
      break;
    case 4:
      console.log('Wybrałeś dzielenie dwóch argumentów');
      const wynik4 = dzielenie(a, b);
      console.log(`Wynik działania to: ${wynik4}`);
      return wynik4;
      break;
    case 5:
      console.log('Wybrałeś resztę z dzielenia dwóch argumentów');
      const wynik5 = resztaZdzielenia(a, b);
      console.log(`Wynik działania to: ${wynik5}`);
      return wynik5;
      break;
    default:
      console.log(
        'Wybrałeś zły argument działania, argumenty działania to: 1. dodawanie, 2. odejmowanie, 3. mnożenie, 4. dzielenie, 5. reszta z dzielenia. Spróbuj jeszcze raz. '
      );
      return 'Wybrałeś zły argument działania, argumenty działania to: 1. dodawanie, 2. odejmowanie, 3. mnożenie, 4. dzielenie, 5. reszta z dzielenia. Spróbuj jeszcze raz.';
  }
}

function kalkulatorHTML() {
  // const form = document.getElementById('form1');
  // const dane = new FormData(form);
  // const wartosci = Object.values(dane);
  // const operacja = Number(wartosci[1]);
  // const arg1 = wartosci[2];
  // console.log(operacja);
  // console.log(arg1);

  // const arg2 = wartosci[3];
  // console.log(arg2);

  const operacja = Number(document.getElementById('operacja').value);
  const arg1 = Number(document.getElementById('arg1').value);
  const arg2 = Number(document.getElementById('arg2').value);

  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `<h2>Wynikiem działania jest: <br> <br>${calculate(
    operacja,
    arg1,
    arg2
  )}</h2>`;

  return calculate(operacja, arg1, arg2);
}

// console.log(calculate(1, 3, 4));

// console.log(calculate(2, 3, 4));

// console.log(calculate(3, 3, 4));

// console.log(calculate(4, 3, 4));

// console.log(calculate(5, 5, 3));

// console.log(calculate('dasd', 3, 4));

const obliczBtn = document.getElementById('oblicz');
obliczBtn.addEventListener('click', kalkulatorHTML);
