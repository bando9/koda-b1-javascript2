const dataPembeli = {
  name: "Bando",
  email: "bando@gmail.com",
  address: "Bogor",
};

const detailPesanan = [
  {
    productName: "minyak SunCo 500ml",
    slug: "minyak-sunco-500ml",
    sku: "KTCN-1",
    price: 11000,
    quantity: 3,
  },
  {
    productName: "minyak bimoli 500ml",
    slug: "minyak-bimoli-500ml",
    sku: "KTCN-2",
    price: 13000,
    quantity: 1,
  },
];

let fakturPembayaran = {
  ...dataPembeli,
  ...detailPesanan,
  statusPembayaran: "Lunas",
  totalHarga: null,
};

console.log(fakturPembayaran);

let { name, email, price, quantity, totalHarga } = fakturPembayaran;

totalHarga = calculateTotalPrice(price, quantity);

fakturPembayaran = { ...fakturPembayaran, totalHarga };

// showFakturPembayaran(name, email, totalHarga);

// * Function
function showFakturPembayaran(name, email, totalHarga) {
  console.log(
    `Struk dicetak untuk ${name} (${email}) dengan total tagihan  Rp ${totalHarga.toLocaleString("id-ID")},-`,
  );
}

function calculateTotalPrice(price, quantity) {
  return price * quantity;
}
