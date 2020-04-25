### Fitur Mikhmon

#### Add Hotspot User

Anda bisa menambahakan username dan password hotspot secara manual.
Bisa juga ditambahakan batasan waktu dan data (Time Limit, Data Limit).

1. Time Limit = Limit Uptime (_penhitungan berhenti jika user log out_).
2. Data limit = Limit Bytes Total


#### Generate Hotspot Users

Anda bisa membuat user hotspot secara otomatis sesuai dengan jumlah yang diinginkan (max 500 user dan panjang username max 8 karakter, untuk sekali generate dan bisa diulangi).

Berikut pilihan **user mode** pada saat generate.

1. Username & Password.
2. Username = Password.

Selain itu bisa juga menambahkan Prefix, Time Limit dan Data Limit, serta comment.

#### User Profile

User profile hotspot mikrotik dapat dibuat dengan menambahkan **validity** dan dua pilihan mode expired _Remove_ dan _Notice_.

1. Remove / Remove & Record : User dihapus setelah masa berlaku habis.
2. Notice / Notice & Record : User tidak dihapus setelah masa berlaku habis.

>Record : menyimpan data user yang telah login.

Tersedia juga Price dan User Lock.

1. Price terdiri dari 2 item, Price : data masuk ke penjualan dan Selling Price : Harga yang tampil di voucher.
2. User Lock : User hotspot hanya bisa dipakai oleh device yang pernama kali login, dengan mengunci mac address device tersebut.

_*Nama user profile tidak bisa menggunakan spasi, tanda baca dan karakter spesial lainnya kecuali `-`_.

