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

console.log(
  `Struk dicetak untuk ${name} (${email}) dengan total tagihan  Rp ${totalHarga.toLocaleString("id-ID")},-`,
);
