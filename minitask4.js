// * Implementasikan hitung luas dan keliling lingkaran memakai callback; jelaskan alur passing function, pemanggilan callback, dan return pada README.
//* Tambahkan flowchart

const PI = 3.14;

function calculateCircle(r, cb, cba) {
  const isCalculateLuas = false;

  if (isCalculateLuas) {
    return cb(r);
  } else {
    return cba(r);
  }
}

function luas(numb) {
  const L = PI * numb * numb;
  return `Luas: ${L}`;
}

function keliling(numb) {
  const K = 2 * PI * numb;
  return `Keliling: ${K}`;
}

console.log(calculateCircle(5, luas, keliling));
