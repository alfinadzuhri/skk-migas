/*
    A. Data Barang dengan harga lebih besar dari 10000 diurut berdasarkan 
    Harga Satuan (Ascending)
*/
SELECT * FROM barang WHERE harga > 10000 ORDER BY harga ASC


/*
    B. Data pelanggan yang namanyan mengandung huruf "g" dengan alamat "BANDUNG"
*/
SELECT * FROM pelanggan WHERE nama LIKE '%g%' AND alamat = 'BANDUNG';


/*
    C. Data seluruh transaksi sesuai dengan tampilan sesuai dengan gambar
*/
SELECT t.kode AS "KODE", t.tanggal AS "TANGAL", 
p.nama AS "NAMA PELANGGAN", b.nama AS "NAMA BARANG", 
t.jumlah_barang AS "JUMLAH", b.harga AS "HARGA SATUAN", 
b.harga * t.jumlah_barang AS "TOTAL"
FROM transaksi t 
  JOIN pelanggan p ON t.kode_pelanggan = p.kode 
  JOIN barang b ON t.kode_barang = b.kode
  ORDER BY p.nama, t.tanggal


/*
    D. Data Rekap nama, jumlah, dan total harga pembelian sesuai dengan gambar
*/
SELECT p.nama AS "NAMA PELANGGAN", SUM(t.jumlah_barang) AS "JUMLAH", 
SUM(b.harga * t.jumlah_barang) AS "TOTAL" 
FROM transaksi t 
  JOIN pelanggan p ON t.kode_pelanggan = p.kode 
  JOIN barang b ON t.kode_barang = b.kode
  GROUP BY p.nama
  ORDER BY p.nama