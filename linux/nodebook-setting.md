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