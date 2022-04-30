### Template Voucher Mikhmon V4

Template Voucher Mikhmon
Mikhmon memiliki 3 jenis template voucher (Default, Thermal dan Small).
Default atau Small adalah template yang digunakan untuk print lebih dari satu voucher.
Thermal adalah template yang digunakan untuk print satu voucher (tujuan untuk printer thermal).


>Penting! Jangan langsung copy paste. Template ini perlu disesuaikan dengan kebutuhan masing-masing. Keterangan ada di template.

>Jika sudah yakin baru dimasukkan ke Mikhmon lewat menu Settings-> Template Editor.

----

### Variable

```js
%username% = username
%password% = password
%profile% = profile
%limitBytesTotal% = data limit
%limitUptime% = time limit
%validity% = validity
%price% = selling price
%comment% = comment
%#% = number
%dnsName% = dns name
%hotspotName% = hotspot name
%currency% = currency 
%qrCode% = qrcode 
%qrCodeRed% = qrcode red 
%qrCodeGreen% = qrcode green 
%qrCodeBlue% = qrcode blue 
%phone% = phone number
%logo% = logo
%timeStamp% = timestamp
```

#### Warna berbeda berdasarkan harga

Untuk membuat warna berdasarkan harga, tambahkan dan sesuaikan kode berikut di bagian bawah tempalte ROW. Lihat gambar.


```js
<script>
	var tcolor = {
	  1500 : "red",
	  2000 : "blue",	
	  3000 : "#33D4FF", //hex color code
	}

	$(".price").css("color",tcolor["%price%"]);
</script>
```

![](./img/voucherv4/setpricecolor.png) 


#### Default

![](./img/voucherv4/default.png) 

[![](./assets/img/download.png) Header](https://raw.githubusercontent.com/laksa19/laksa19.github.io/master/download/voucherv4/header.default.txt)
[![](./assets/img/download.png) Row](https://raw.githubusercontent.com/laksa19/laksa19.github.io/master/download/voucherv4/row.default.txt)
[![](./assets/img/download.png) Footer](https://raw.githubusercontent.com/laksa19/laksa19.github.io/master/download/voucherv4/footer.default.txt)

<div>
	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<!-- ads3 -->
	<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1716315177239884" data-ad-slot="4095402072"
	 data-ad-format="auto" data-full-width-responsive="true"></ins>
	<script>
		(adsbygoogle = window.adsbygoogle || []).push({});
	</script>
</div>

#### Default Small

![](./img/voucherv4/small.png) 

[![](./assets/img/download.png) Header](https://raw.githubusercontent.com/laksa19/laksa19.github.io/master/download/voucherv4/header.small.txt)
[![](./assets/img/download.png) Row](https://raw.githubusercontent.com/laksa19/laksa19.github.io/master/download/voucherv4/row.small.txt)
[![](./assets/img/download.png) Footer](https://raw.githubusercontent.com/laksa19/laksa19.github.io/master/download/voucherv4/footer.small.txt)

#### Default Thermal

![](./img/voucherv4/thermal.png)

[![](./assets/img/download.png) Header](https://raw.githubusercontent.com/laksa19/laksa19.github.io/master/download/voucherv4/header.thermal.txt)
[![](./assets/img/download.png) Row](https://raw.githubusercontent.com/laksa19/laksa19.github.io/master/download/voucherv4/row.thermal.txt)
[![](./assets/img/download.png) Footer](https://raw.githubusercontent.com/laksa19/laksa19.github.io/master/download/voucherv4/footer.thermal.txt)

#### Kangdo

![](./img/voucherv4/Kangdo.png)

[![](./assets/img/download.png) Header](https://raw.githubusercontent.com/laksa19/laksa19.github.io/master/download/voucherv4/header.kangdo.txt)
[![](./assets/img/download.png) Row](https://raw.githubusercontent.com/laksa19/laksa19.github.io/master/download/voucherv4/row.kangdo.txt)
[![](./assets/img/download.png) Footer](https://raw.githubusercontent.com/laksa19/laksa19.github.io/master/download/voucherv4/footer.kangdo.txt)

<div>
	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<!-- ads3 -->
	<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1716315177239884" data-ad-slot="4095402072"
	 data-ad-format="auto" data-full-width-responsive="true"></ins>
	<script>
		(adsbygoogle = window.adsbygoogle || []).push({});
	</script>
</div>


#### MKS Isber Nendi

![](./img/voucherv4/mksv.jpg) 

[![](./assets/img/download.png) Header](https://raw.githubusercontent.com/laksa19/laksa19.github.io/master/download/voucherv4/header.mks.txt)
[![](./assets/img/download.png) Row](https://raw.githubusercontent.com/laksa19/laksa19.github.io/master/download/voucherv4/row.mks.txt)
[![](./assets/img/download.png) Footer](https://raw.githubusercontent.com/laksa19/laksa19.github.io/master/download/voucherv4/footer.mks.txt)



