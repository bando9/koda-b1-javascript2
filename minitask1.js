// TODO : buat flowchart program hitung nilai dg proses (MAX, MIN, AVERAGE)
// TODO : buat program (implementasi spreads operator)

const numbers1 = [5, 3, 1, 29, 30];
const numbers2 = [12, 32, 4, 9, 81];

const numbers = [...numbers1, ...numbers2];

// * MAX

let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  const current = numbers[i];
  if (current > max) {
    max = current;
  }
}
console.log(`nilai terbesar: ${max}`);

// * MIN
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  const current = numbers[i];
  if (current < min) {
    min = current;
  }
}
console.log(`nilai terkecil: ${min}`);

// * AVERAGE

let total = 0;
for (let i = 1; i < numbers.length; i++) {
  let current = numbers[i];
  total += current;
}
let average = total / numbers.length;
console.log(`nilai rata": ${average}`);
