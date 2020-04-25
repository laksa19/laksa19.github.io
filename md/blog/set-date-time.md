#### Set last Date & Time

Set last Date & Time:

Solusi untuk pengaturan jam dan tanggal agar tidak kembali ke tanggal default `jan/01/1970 00:00:00` setelah RB reboot atau listrik padam.

1. Buat script `System --> Script` dengan

* Name: `datetime`

	**On event** akan diisi otomatis oleh scheduler datetime

2. Buat scheduler `System --> Scheduler` dengan
* Name : `datetime`
* Interval : `00:05:00`
* On event sebagai berikut
```
:local date [sys clock get date]; 
:local time [/sys clock get time]; 
/sys scr set source="/sys clock set date=$date time=$time" [find where name=datetime];
```
3. Buat scheduler `System --> Scheduler` dengan
* Name : `datetime-startup`
* Start Time : `startup`
* Interval : `00:00:00`
* On event sebagai berikut
```
/sys scr run datetime
```

Cara kerja:

Scheduler akan menyimpan date dan time ke script datetime(1) setiap 5 menit, atau sesuai kebutuhan Anda, silakan ubah interval di scheduler datetime(2).
Ketika listrik padam kemudian Mikrotik dinyalakan kembali, maka date dan time akan dikembalikan sesuai data terakhir yang tersimpan di script datetime(1).
Dan selanjutnya akan update otomatis sesuai pengaturan di SNTP-Client.
Detail pengaturan pada gambar berikut.

![](./img/setdatetime.png)

<div>
	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<!-- ads3 -->
	<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1716315177239884" data-ad-slot="4095402072"
	 data-ad-format="auto" data-full-width-responsive="true"></ins>
	<script>
		(adsbygoogle = window.adsbygoogle || []).push({});
	</script>
</div>

Pastikan SNTP Client sudah aktif, agar jam dan tanggal segera update setelah terhubung internet.

`System -> SNTP Client`

NTP server dapat diperoleh di situs berikut,
1. [NTPPOOL.ORG](https://www.ntppool.org/)
2. [GOOGLE PUBLIC NTP](https://developers.google.com/time/)
3. [NIST Internet Time Servers](https://tf.nist.gov/tf-cgi/servers.cgi)

![SNTP Client](./img/sntp-client.jpg "SNTP Client")

