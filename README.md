# Penjelasan Minitask(2)

[here is file](./minitask3.js)

Cara kerja dari object tersebut:

- ketika membuat function di dalam object, perlu menggunakan `this` keyword untuk memanggil property di dalam scope object tersebut.
- contoh pada log yg menampilkan `ringkasan()`:
  - akan memanggil method ringkasan dari circle
  - `ringkasan()` akan memanggil property `luas()` dan `keliling()` yang berada dalam object circle.
  - `luas()` akan memanggil nilai PI dari property value milik PI didalam circle. begitu jg dg property r.
  - method keliling jg punya konsep yg sama seperti method luas
