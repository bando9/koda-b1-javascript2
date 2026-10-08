// * Combine (Penggabungan Data): Menggabungkan object dataPembeli dan detailPesanan menjadi satu object baru bernama fakturPembayaran menggunakan Spread Operator, sekaligus menambahkan properti baru statusPembayaran: "Lunas".

// * Extract (Ekstraksi Data): Mengambil spesifik properti nama, email, dan totalHarga dari object fakturPembayaran menggunakan Destructuring.

const dataPembeli = {
  name: "Bando",
  email: "bando@gmail.com",
  address: "Bogor",
};

const detailPesanan = {
  productName: "minyak SunCo 500ml",
  slug: "minyak-sunco-500ml",
  sku: "KTCN-1",
  price: 11000,
  quantity: 3,
};

const fakturPembayaran = {
  ...dataPembeli,
  ...detailPesanan,
  statusPembayaran: "Lunas",
};

const { name, email, price, quantity } = fakturPembayaran;
const totalPrice = price * quantity;

const newFakturPembayaran = {
  ...fakturPembayaran,
  totalHarga: totalPrice,
};

const { totalHarga } = newFakturPembayaran;

const formatedIDR = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
}).format(totalHarga);

console.log(
  `Struk dicetak untuk ${name} (${email}) dengan total tagihan ${formatedIDR}`,
);
