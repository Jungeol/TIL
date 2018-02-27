# Setting ubuntu notebook
## vsync
Create /etc/X11/xorrg.conf.d/20-intel.conf
```
Section "Device"
   Identifier  "Intel Graphics"
   Driver      "intel"
   Option      "TearFree"    "true"
EndSection
```
install tlp
```
sudo apt install tlp
sudo tlp start
```
install powertop
```
sudo apt install powertop
sudo powertop --calibrate
```
한/영 and 한자
```
$sudo apt install gnome-tweak-tool
#입력 -> 한국어 한/영 한자키 설정
```
