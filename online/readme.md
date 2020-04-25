## MIKHMON ONLINE
### PERMASALAHAN dan PENANGANAN

### Permasalahan 1. 
#### Mikhmon Online tidak terkoneksi seperti di gambar berikut.
![online6](https://raw.githubusercontent.com/laksa19/laksa19.github.io/master/img/online6.png)
![online1](https://raw.githubusercontent.com/laksa19/laksa19.github.io/master/img/online1.png)

### Penanganan 1.

1. Pastikan isian di Session Settings sudah benar, contoh seperti gambar berikut.
![online2](https://raw.githubusercontent.com/laksa19/laksa19.github.io/master/img/online2.png)

2. Pastikan VPN Mikhmon Online / Gukotunnel sudah terkoneksi (R).
![online5](https://raw.githubusercontent.com/laksa19/laksa19.github.io/master/img/online5.png)

### Permasalahan 2
#### Akses lambat dan Kode Error 504
![online3](https://raw.githubusercontent.com/laksa19/laksa19.github.io/master/img/online3.png)
#### Permasalahan akses lambat dan kode error 504 muncul biasanya disebabkan oleh beberapa faktor berikut.

1. VPN tidak terkoneksi dalam hal ini adalah L2TP koneksi default untuk Mikhmon Online. Hal ini bisa terjadi disebabkan oleh gangguan di ISP, baik gangguan jaringan, atau sengaja diblok oleh ISP. Selain itu, bisa juga settingan Mikrotik Anda tidak mengijinkan untuk koneksi L2TP. Silakan cek settingan Mikrotiknya atau hubungi teknisi masing-masing. *Konenksi internet yang lancar tidak menjamin koneksi untuk L2TP atau service VPN lainnya lancar juga, semua tergantung pada ISP masing-masing.

2. Mikrotik sedang bekerja keras. CPU Mikrotiknya sedang menangani banyak tugas sehingga penggunaan mencapai > 70%. Ini biasa terjadi pada Mikrotik yang CPUnya hanya memiliki 1 core dengan clock-speed rendah sehingga tidak dapat memproses permintaan data dari Mikhmon.

3. Data yang diproses terlalu banyak. Mikhmon ditulis dalam program PHP yang mana menggunakan settingan default 30 detik untuk megeksekusi sebuah perintah. Apabila melewati batas tersebut makan prosesnya akan dihentikan. Lantas data apa yang dimaksud terlalubanyak diproses? Data yang dimaksud adalah data penjualan baik yang tampil di Dashboard maupun menu Report. Data penjualan yang terlalu banyak ini juga menandakan bahwa usaha Anda sudah Jooss Guandoss.

### Penanganan 2
1. Jika koneksi L2TP gukotunnel tidak terkoneksi, Anda dapat berpindah koneksi ke OVPN. Kalau sudah terkoneksi yang OVPN yang L2TP harus di disable, pakai salah satu saja. Panduan untuk koneksi OVPN klik [di sini](https://drive.google.com/file/d/10QxPYIgJM31xxw0auTuy0SobCG-dBYo8/view?usp=sharing)

2. Maksimalkan Settingan Mikrotik Anda. Hubungi jasa setting Mikrotik yang Handal.

3. Disable Live Report di Session Settings, agar aplikasi tidak memuat data penjualan di Dashboard. Cek Penanganan 1 no. 1 untuk letak Live Report.

4. Setelah VPN terkoneksi, bersihkan cookie browser Anda agar dapat login kembali ke aplikasi. 
