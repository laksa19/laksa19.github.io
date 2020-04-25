### Mikhmon Blog

#### User Hotspot terhapus setelah reboot. 

Kenapa user hotspot yang sudah saya generate tiba-tiba hilang setelah reboot atau mati listrik?

Penyebab :
* Minim free HDD. Pastikan memiliki ruang cukup jika ingin generate banyak user.
* Kerusakan pada hardware. Terdeteksi bad blocks pada HDD.

Penjelasan :

Ketika generate user dilakukan dan Mikrotik minim free HDD, maka data user akan dialihkan ke RAM. Yang mana RAM tidak seperti HDD hanya dapat menyimpan data sementara selama Mikrotik masih dalam posisi ON. Setelah reboot, otomatis data yang ada di RAM akan hilang termasuk didalamnya user hotspot.
Kerusakan hardware (HDD) ini sama halnya seperti di PC. Jika sudah terkena bad blocks atau bad sectors maka HDD tidak akan bisa bekerja secara normal.

Penanganan :

Jangan menggunakan tamplete hotspot yang memakan banyak resource, agar HDD internal cukup untuk menampung data user hotspot . Jika menggunakan RB yang mempunyai slot microsd atau port usb, sebaiknya template hotspot disimpan di media penyimpanan tersebut.
Jika terindikasi kerusakan hardware sebaiknya ganti RB Anda.

Semoga bermanfaat.
