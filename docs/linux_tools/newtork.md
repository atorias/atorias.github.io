# 连接wifi

## networkmanager

### 具体操作

```bash
# 查看无限设备是否被识别
nmcli device
# 列出可用的wifi网络
nmcli device wifi list
# 连接wifi
nmcli device wifi connect "<wifi名称>" password "<wifi密码>"
# 查看连接状态
nmcli device status
# 保存网络自动连接
nmcli connection modify "<连接名称>" connection.autoconnect yes
# 断开连接
nmcli connection down "MyWiFiNetwork"
```
