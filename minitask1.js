// TODO : buat flowchart program hitung nilai dg proses (MAX, MIN, AVERAGE)
// TODO : buat program (implementasi spreads operator)

// * MAX

const numbs = [5, 3, 1, 29, 30, 12, 32, 4, 9, 81];
let maxNumb = 0;

for (let i = 1; i <= numbs.length; i++) {
  let currentNumb = numbs[i - 1];
  let nextNumb = numbs[i];

  if (maxNumb < currentNumb) {
    maxNumb = currentNumb;
    console.log(`${maxNumb}`);
  }
  if (maxNumb > nextNumb) {
    console.log(`${maxNumb}`);
  } else {
    maxNumb = nextNumb;
    console.log(`${maxNumb}`);
  }
}

// * MIN

const newNumbs = [5, 38, 10, 29, 30, 12, 32, 4, 9, 81];
let minNumb = null;

for (let i = 1; i <= newNumbs.length; i++) {
  let currentNumb = newNumbs[i - 1];
  let nextNumb = newNumbs[i];

  if (typeof minNumb == "object") {
    minNumb = currentNumb;
    console.log(`${minNumb}`);
  } else if (minNumb > currentNumb) {
    minNumb = currentNumb;
    console.log(`${minNumb}`);
  } else if (minNumb > nextNumb) {
    minNumb = nextNumb;
    console.log(`${minNumb}`);
  } else {
    console.log(`${minNumb} els`);
  }
}
