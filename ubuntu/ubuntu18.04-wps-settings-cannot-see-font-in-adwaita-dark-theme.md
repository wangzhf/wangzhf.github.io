
Ubuntu18.04安装WPS后，如果使用的系统主题是`Adwaita-dark`时，点击选项后，无法看清选项中的字体，可通过添加`-style 样式名`来调整。
所支持的样式有以下几种：
+ CDE
+ Cleanlooks
+ GTK+
+ Motif
+ Plastique
+ Windows

以word为例，打开`/usr/share/applications/wps-office-wps.desktop`文件，修改`Exec`行，添加`windows`样式：
```
Exec=/usr/bin/wps -style Windows %f
```
保存，重新打开word即可。

参考：[WPS (Kingsoft) Spreadsheets Interacts Oddly with Arc-dark #748](https://github.com/horst3180/arc-theme/issues/748)
