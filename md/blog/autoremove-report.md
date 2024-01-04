### Mikhmon Blog

#### Autoremove Report

Script berikut difungsikan untuk menghapus otomatis data penjualan menggunakan "Scheduler".

Buat scheduler `System --> Scheduler` dengan
* Name : `autoremove-report`
* Interval : `1d 00:00:00`
* On event sebagai berikut [pakai salah satu sesuai versi Router OS]

  
<div>
	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<!-- ads3 -->
	<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1716315177239884" data-ad-slot="4095402072"
	 data-ad-format="auto" data-full-width-responsive="true"></ins>
	<script>
		(adsbygoogle = window.adsbygoogle || []).push({});
	</script>
</div>

### ROS v6.xx - v7.9
```
:local date [ /system clock get date ];
:local montharrayA ( "jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec" );
:local montharrayB ("oct","nov","dec" );
:local day [:tonum [:pick $date 4 6 ]];
:local month [ :pick $date 0 3 ];
:local year [ :pick $date 7 11 ];
:local monthint ([ :find $montharrayA $month] + 1);
:local monthlast  ( $monthint - 3);
:if ($day > 9) do={
:if ( $monthlast > 0 ) do={
:local mmm "$[:pick $montharrayA ($monthlast - 1)]";
:local monthdell "$mmm$year";
/sys scr rem [find where owner=$monthdell];
}
:if ( $monthlast < 1) do={
:local mkey ([$monthint - $monthlast ])
:local mmm "$[:pick $montharrayB ($mkey - 1)]";
:local y  ($year - 1);
:local monthdell "$mmm$y";
/sys scr rem [find where owner=$monthdell];
}
}
```


### ROS v7.10 - v7.xx
```
:local date [ /system clock get date ];
:local montharrayA ( "jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec" );
:local montharrayB ("oct","nov","dec" );
:local day  [:tonum [:pick $date 8 11]];
:local year [:tonum [:pick $date 0 4]];
:local monthint [:tonum [:pick $date 5 7]];
:local monthlast  ( $monthint - 3);
:if ($day > 9) do={
:if ( $monthlast > 0 ) do={
:local mmm "$[:pick $montharrayA ($monthlast - 1)]";
:local monthdell "$mmm$year";
/sys scr rem [find where owner=$monthdell];
}
:if ( $monthlast < 1) do={
:local mkey ([$monthint - $monthlast ])
:local mmm "$[:pick $montharrayB ($mkey - 1)]";
:local y  ($year - 1);
:local monthdell "$mmm$y";
/sys scr rem [find where owner=$monthdell];
}
}
```


Cara kerja:

Scheduler dijalankan tiap hari, yang mana melakukan pengecekan terhadap tanggal. Jika tanggal > 9 maka script untuk menghapus data penjualan akan berjalan.
Data yang dihapus adalah data penjualan 3 bulan sebelumnya. 

Contoh:

**Jika sekarang bulan Januari 2023, maka data yang dihapus adalah data penjualan bulan Oktober 2022**.


#### Peringatan

Jangan lupa melakukan backup MikroTik terlebih dahulu, untuk menghindari hal-hal yang tidak diinginkan.


<div>
	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<!-- ads3 -->
	<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1716315177239884" data-ad-slot="4095402072"
	 data-ad-format="auto" data-full-width-responsive="true"></ins>
	<script>
		(adsbygoogle = window.adsbygoogle || []).push({});
	</script>
</div>



