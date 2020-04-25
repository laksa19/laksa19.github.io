### MYQR | QR Code scanner for login hotspot MikroTik

#### Cara pakai

1. Tambahkan button di login.html

```html
<button onclick="window.location='https://laksa19.github.io/myqr';">QR Code</button>
```
2. Tambahkan script berikut di MikroTik via Terminal.

```
/ip hotspot walled-garden ip
add action=accept comment="Mikhmon QR Code Scanner" disabled=no dst-host=laksa19.github.io

```
3. Centang HTTP PAP di hotspot server profile.

![HTTPS PAP MikroTik](./img/myqr-http-pap.png "HTTPS PAP MikroTik")

>_QR Code Scanner hanya bisa dipakai pada browser yang memiliki hak akses kamera._

![MYQR | QR code scanner](./img/myqr.jpg "MyQR | QR code scanner")


Powered by [webqr.com](//webqr.com)

