# windows

## 重装系统以后注意事项

### Antimalware Service Executable CPU占用高

#### 1. 排除设置

    病毒和威胁防护设置 - 管理设置 - 排除所有目录

#### 2. 软件直接关闭

[Defender_Control_2.1.0_Single.zip](softwares/Defender_Control_2.1.0_Single.zip)

### 关闭edge后台进程

    edge浏览器设置->系统和性能->启动增强关闭

## Windows为cmd/powershell设置代理

    设置代理
    netsh winhttp set proxy 127.0.0.1:7890
    取消代理
    netsh winhttp reset proxy
    查看代理
    netsh winhttp show proxy

## 无限延长更新时间

计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings
FlightSettingsMaxPauseDays DWORD32 十进制7000
