### Persiapan Instalasi

#### Setting NTP Server di SNTP Client MikroTik

>System -> SNTP Client

NTP server dapat diperoleh di situs berikut,
1. [NTPPOOL.ORG](https://www.ntppool.org/)
2. [GOOGLE PUBLIC NTP](https://developers.google.com/time/)
3. [NIST Internet Time Servers](https://tf.nist.gov/tf-cgi/servers.cgi)

![SNTP Client](./img/sntp-client.jpg "SNTP Client")

----

### Instalasi

#### Tutorial Singkat Mikhmon + Webserver
1. [Download](./?mikhmon/v3/download "Download Mikhmon V3") dan extract [mikhmonv3ws.zip].
2. Jalankan [MikhmonServer] / Run as administrator.
3. Klik Open Mikhmon atau buka http://127.0.0.1 di browser (disarankan menggunakan Google Chrome).
4. Login menggunakan user password default 
	```bash
	Username : mikhmon 
	Password : 1234
	```
5. Klik Add Router
7. Isikan IP, user dan password MikroTik, kemudian save dan klik Connect untuk tes koneksi ke MikroTik.

	>IP bisa menggunakan ip yang di ether1, cek dari Winbox : `ip->address->ether1`

9. Buat User Profile baru, atau update User Profile lama dengan memilih Expired Mode. Sesuikan dengan kebutuhan.
10. User Profile sudah siap, selanjutnya sudah bisa add user atau generate user dan cetak voucher.

[![](./assets/img/video.png) Video Panduan](https://youtu.be/xfZdZDjQp-g)

<div>
	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<!-- ads3 -->
	<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1716315177239884" data-ad-slot="4095402072"
	 data-ad-format="auto" data-full-width-responsive="true"></ins>
	<script>
		(adsbygoogle = window.adsbygoogle || []).push({});
	</script>
</div>

#### Install Mikhmon Android "Termux"

#### Panduan Install Mikhmon di Android via Termux

1. Install Termux PlayStore.
	>Munculkan CTRL di Termux : Tekan volume up + q

2. Jalankan command berikut di Termux


 - Ganti repo

```bash
termux-change-repo
```
![repo1](./img/termux_1.jpg "repo1")

 - Centang semua repo (main, game dan science)
		
![repo2](./img/termux_2.jpg "repo2")		
		
 - Pilih repo (Mirrors by Tsinghua)

![repo3](./img/termux_3.jpg "repo3")	

 - Lanjut ke command  berikut

```bash
pkg update && pkg upgrade -y
```
```bash
pkg install curl
```
```bash
curl -o install-mikhmon https://laksa19.github.io/install-mikhmon.txt
```
```bash
chmod +x install-mikhmon
```
```bash
./install-mikhmon
```

3. Buka url http://127.0.0.1:8080 di browser Anda.

```bash
Command
Start Mikhmon : ./start-mikhmon
Update Mikhmon : ./update-mikhmon
Remove Mikhmon : ./remove-mikhmon
```
[![](./assets/img/video.png) Video Panduan](https://youtu.be/fvjCGlIAwqg)

----

#### Install Mikhmon Android "AWebServer"

https://www.youtube.com/watch?v=1bMUMnUzvXg


#### Pembuatan User Hotspot

1. Validity = Masa Aktif, waktu akan terus berjalan dipakai mautun tidak dipakai sejak login.
2. Time lImit = Durasi, batas penggunaan semalama masa aktif, waktunya akan berhenti jika user logout.

Jika ingin membuat user dengan validity 30 hari, sukup buat user profile dengan validity 30d. Kemudian generate adatu add user dengan user profile tersebut. Time limit tidak perlu diisi.

Pembuatan user dengan validity dan time limit idealnya time limit lebih kecil dari validity. 
>Contoh membuat user dengan time limit 7 hari dan masa aktif 30 hari, maka bisa add user adau generate user dengan time limit 7d dan memilih user profile yang memiliki validity 30d.

[![](./assets/img/video.png) Video Panduan](https://www.youtube.com/watch?v=bNyfz-0fvGQ)

<div>
	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<!-- ads3 -->
	<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1716315177239884" data-ad-slot="4095402072"
	 data-ad-format="auto" data-full-width-responsive="true"></ins>
	<script>
		(adsbygoogle = window.adsbygoogle || []).push({});
	</script>
</div>


#### Quick Print / Print BT

Quick Print salah satu fitur Mikhmon yang memanfaatkan Thermal Printer Bluetooth.
Untuk menggunakan fitur ini diperlukan aplikasi tambahan yang tersedian di Play Store Android.
Nama aplikasinya _Quick Printer (ESC Post Print)_. Panduan penggunaannya bisa klik link video panduan.

[![](./assets/img/video.png) Video Panduan](https://www.youtube.com/watch?v=KGAsHU0qOBA)

#### Menampilkan Expired User di Laman Status Hotspot (status.html). `Tempalate hotspo4, hotspot5, hotspot6.`
 
* Server Mikhmon harus dalam keadaan aktif.
* Perhatikan protocol yang digunakan https / http.
* Untuk server local yang menggunakan PC atau Android biasanya menggunakan protocol http.

Perhatikan pada gambar bagian yang diberi tanda

![](./img/session-name.png) ![](./img/expv3.png)

Session Name dapat dilihat di Session Settings (Settings->Session Settings).
```javascript
var SessionName = "wifijoss";
```

Jika menggunakan server local, ganti 
```javascript
var url = "https://subdomain.mikhmon.online/status/status.php?name=";
``` 
menjadi IP server di mana Mikhmon diinstall 

```javascript
var url = "http://192.168.1.10/status/status.php?name=";
```

#### Laman Cek Status User.

```html
<a href="http://ip-server-mikhmon/status/?session=SessionName">Status Voucher</a>
```

Ganti `SessionName` dengan Session Name di Mikhmon Anda.
