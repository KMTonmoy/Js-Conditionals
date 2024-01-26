const salary = 31001;
const isBCS = true;
const height = 78;
const hasCar = false;

height = 71;


// if (salary > 20000 &&  height > 66) {
//   console.log("Su--------Patro");
// } else {
//   console.log("Onno Patro Khuji");
// }

if (salary > 25000 || height > 7.2 || isBCS == true) {
  console.log("eso baba Kobul");
} else {
  console.log("Vag Tui Mokbul");
}

if (salary > 25000 && height > 7.2 && isBCS == true) {
  console.log("eso baba Kobul");
} else {
  console.log("Vag Tui Mokbul");
}

// ===========================Compleax Condition===============

if ((salary > 25000 && hasCar == true) || isBCS == true) {
  console.log("Tomar 14 Gisti Raji");
}

if ((salary > 25000 || hasCar == true) || isBCS == true) {
  console.log("Tomar 14 Gisti Raji");
}
