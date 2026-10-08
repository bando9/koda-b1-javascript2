// * Buat object lingkaran dengan properti jari-jari serta dua method terpisah: luas() dan keliling(). README berisi penjelasan cara kerja, bukan flowchart.  Buat ringkasan() yang memanggil dua method tersebut.

const circle = {
  r: 5,
  PI: 3.14,
  luas: function () {
    return this.PI * this.r * this.r;
  },
  keliling: function () {
    return 2 * this.PI * this.r;
  },
  ringkasan: (obj = circle) =>
    `Luas: ${obj.luas()}, Keliling: ${obj.keliling()}`,
};

console.log(circle.ringkasan());
