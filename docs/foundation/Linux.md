# Linux

## 目录结构

### `/`

根目录

### `/bin`

bin是Binary的缩写，这个目录是对UNIX系统习惯的沿袭，存放着使用者最经常使用的普通命令，包括大部分基础的Unix命令。例如：cp,ls,cat

### `/boot`

这里存放的是启动LINUX时使用的一些核心文件，包括一些连接文件以及镜像文件,如果使用的是grub这个开机管理程式，则还会存在/boot/grub/这个目录。

### `/dev`

device的缩写，存放linux的外部设备,其中/dev/null 是个黑洞

* `/dev/hd[a-t]` IDE设备
* `/dev/sd[a-z]` SCSI设备
* `/dev/fd[0-7]` 标准软驱
* `/dev/md[0-31]` 软raid设备
* `/dev/loop[0-7]` 本地回环设备
* `/dev/ram[0-15]` 内存
* `/dev/null` 无限数据接收设备,相当于黑洞
* `/dev/zero` 无限零资源
* `/dev/tty[0-63]` 虚拟终端
* `/dev/ttyS[0-3]` 串口
* `/dev/lp[0-3]` 并口
* `/dev/console` 控制台
* `/dev/fb[0-31]` framebuffer
* `/dev/cdrom` => /dev/hdc
* `/dev/modem` => /dev/ttyS[0-9]
* `/dev/pilot` => /dev/ttyS[0-9]
* /`dev/random` 随机数设备
* `/dev/urandom` 随机数设备

### `/etc`

系统管理所需要的配置文件和子文件 一般来说一个程序启动，如果需要读取一些配置文件的话，它会首先读取当前用户家目录的配置文件，如果存在就使用;如果不存在它就到/etc下读取全局的配置文件进而启动程序。

| 目录                                         | 描述|
| :------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /etc/rc，/etc/rc.d，/etc/rc*.d               | 启动、或改变运行级时运行的scripts或scripts的目录.                                                                                                                          |
| /etc/hosts                                   | 本地域名解析文件|
| /etc/sysconfig/network                       | IP、掩码、网关、主机名配置|
| /etc/resolv.conf                             | DNS服务器配置|
| /etc/fstab                                   | 开机自动挂载系统，所有分区开机都会自动挂载|
| /etc/inittab                                 | 设定系统启动时Init进程将把系统设置成什么样的runlevel及加载相关的启动文件配置|
| /etc/exports                                 | 设置NFS系统用的配置文件路径|
| /etc/init.d                                  | 这个目录来存放系统启动脚本|
| /etc/profile, /etc/csh.login, /etc/csh.cshrc | 全局系统环境配置变量|
| /etc/issue                                   | 认证前的输出信息，默认输出版本内核信息|
| /etc/motd                                    | 设置认证后的输出信息，|
| /etc/mtab                                    | 当前安装的文件系统列表.由scripts初始化，并由mount 命令自动更新.需要一个当前安装的文件系统的列表时使用，例如df 命令|
| /etc/group                                   | 类似/etc/passwd ，但说明的不是用户而是组.|
| /etc/passwd                                  | 用户数据库，其中的域给出了用户名、真实姓名、家目录、加密的口令和用户的其他信息.|
| /etc/shadow                                  | 在安装了影子口令软件的系统上的影子口令文件.影子口令文件将/etc/passwd 文件中的加密口令移动到/etc/shadow 中，而后者只对root可读.这使破译口令更困难.|
| /etc/sudoers                                 | 可以sudo命令的配置文件|
| /etc/syslog.conf                             | 系统日志参数配置|
| /etc/login.defs                              | 设置用户帐号限制的文件|
| /etc/securetty                               | 确认安全终端，即哪个终端允许root登录.一般只列出虚拟控制台，这样就不可能(至少很困难)通过modem或网络闯入系统并得到超级用户特权.|
| /etc/printcap                                | 类似/etc/termcap ，但针对打印机.语法不同.|
| /etc/shells                                  | 列出可信任的shell.chsh 命令允许用户在本文件指定范围内改变登录shell.提供一台机器FTP服务的服务进程ftpd 检查用户shell是否列在 /etc/shells 文件中，如果不是将不允许该用户登录. |
| /etc/xinetd.d                                | 如果服务器是通过xinetd模式运行的，它的脚本要放在这个目录下。有些系统没有这个目录，比如Slackware，有些老的版本也没有。在Redhat Fedora中比较新的版本中存在。                 |
| /etc/opt/                                    | /opt/的配置文件|
| /etc/X11/                                    | X_Window系统(版本11)的配置文件|
| /etc/sgml/                                   | SGML的配置文件|
| /etc/xml/                                    | XML的配置文件|
| /etc/skel/                                   | 默认创建用户时，把该目录拷贝到家目录下|

### `/home`

用户的主目录。比如说有个用户叫wang，那他的主目录就是/home/wang。

### `/lib`

这个目录里存放着系统最基本的动态链接共享库，其作用类似于Windows里的dll文件。几乎所有的应用程序都需要用到这些共享库。

### `/lost+found`

这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。

### `/media`

linux系统会自动识别一些设备，例如U盘、光驱等等，当识别后，linux会把识别的设备挂载到这个目录下。

### `/opt`

可选的附加应用程序，这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。

### `/mnt`

这个目录是空的，系统提供这个目录是让用户临时挂载别的文件系统。我们可以将光驱挂载在/mnt/上，然后进入该目录就可以查看光驱里的内容了。

在远古时期，这个目录的用途与/media相同啦。 只是有了/media之后，这个目录就用来暂时挂载用了。

一般来说，我们最好在/mnt目录下面多建立几个子目录，挂载的时候挂载到这些子目录上面，因为通常我们可能不仅仅是挂载一个设备吧?

### `/proc`

这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。也就是说，这个目录的内容不在硬盘上而是在内存里。

| /proc/meminfo     | 查看内存信息                                                            |
| :---------------- | :---------------------------------------------------------------------- |
| /proc/loadavg     | 还记得 top 以及 uptime 吧？没错！上头的三个平均数值就是记录在此！       |
| /proc/uptime      | 就是用 uptime 的时候，会出现的资讯啦！                                  |
| /proc/cpuinfo     | 关于处理器的信息，如类型、厂家、型号和性能等。                          |
| /proc/cmdline     | 加载 kernel 时所下达的相关参数！查阅此文件，可了解系统是如何启动的！    |
| /proc/filesystems | 目前系统已经加载的文件系统罗！                                          |
| /proc/interrupts  | 目前系统上面的 IRQ 分配状态。                                           |
| /proc/ioports     | 目前系统上面各个装置所配置的 I/O 位址。                                 |
| /proc/kcore       | 这个就是内存的大小啦！好大对吧！但是不要读他啦！                        |
| /proc/modules     | 目前我们的 Linux 已经加载的模块列表，也可以想成是驱动程序啦！           |
| /proc/mounts      | 系统已经挂载的数据，就是用 mount 这个命令呼叫出来的数据啦！             |
| /proc/swaps       | 到底系统挂加载的内存在哪里？呵呵！使用掉的 partition 就记录在此啦！     |
| /proc/partitions  | 使用 fdisk -l 会出现目前所有的 partition 吧？在这个文件当中也有纪录喔！ |
| /proc/pci         | 在 PCI 汇流排上面，每个装置的详细情况！可用 lspci 来查阅！              |
| /proc/version     | 核心的版本，就是用 uname -a 显示的内容啦！                              |
| /proc/bus/*       | 一些汇流排的装置，还有 U盘的装置也记录在此喔！                          |

### `/root`

root的home

### `/sbin`

s就是Super User的意思，也就是说这里存放的是一些系统管理员使用的系统管理程序。如shutdown，reboot，用于启动系统，修复系统。

### `/srv`

srv就是service的缩写，是一些网路服务启动之后，这些服务所需要取用的资料目录。

常见的服务例如WWW, FTP等等。

### `/sys`

录类似/proc目录，里面是设备和系统的信息。这是linux2.6内核的一个很大的变化。该目录下安装了2.6内核中新出现的一个文件系统 sysfs 。

### `/tmp`

这个目录包含系统和用户创建的临时文件。所有用户对该目录都有读和写的权限，不过可能对别人的文件没有权限。重要数据请不要存放在/tmp目录中，因为很多系统会在启动时清空/tmp目录，甚至是经常性地清理这个目录里的旧文件。

### `/var`

变量文件夹，var表示变量。这个目录下可以找到内容可能增长的文件。包括 - 系统日志文件（/var/log）、包和数据库文件（/var/lib）、电子邮件（/var/mail）、打印队列（/var/spool）、锁文件（/var/lock）、多次重新启动需要的临时文件（/var/tmp）等（你可能会注意到这里有一个子目录/var/tmp，和/tmp不同的是，系统不会在启动时 清空它。）

| 目录                     | 描述                                                                                                                                                                                |
| :----------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /var/log/message         | 日志信息，按周自动轮询                                                                                                                                                              |
| /var/spool/cron/root     | 定时器配置文件目录，默认按用户命名                                                                                                                                                  |
| /var/log/secure          | 记录登陆系统存取信息的文件，不管认证成功还是认证失败都会记录                                                                                                                        |
| /var/log/wtmp            | 记录登陆者信息的文件，last,who,w命令信息来源于此                                                                                                                                    |
| /var/spool/clientmqueue/ | 当邮件服务未开启时，所有应发给系统管理员的邮件都将堆放在此                                                                                                                          |
| /var/spool/mail/         | 邮件目录                                                                                                                                                                            |
| /var/tmp                 | 比/tmp 允许的大或需要存在较长时间的临时文件. (虽然系统管理员可能不允许/var/tmp 有很旧的文件.)                                                                                       |
| /var/lib                 | 系统正常运行时要改变的文件.                                                                                                                                                         |
| /var/local               | /usr/local 中安装的程序的可变数据(即系统管理员安装的程序).注意，如果必要，即使本地安装的程序也会使用其他/var 目录，例如/var/lock .                                                  |
| /var/lock                | 锁定文件.许多程序遵循在/var/lock 中产生一个锁定文件的约定，以支持他们正在使用某个特定的设备或文件.其他程序注意到这个锁定文件，将不试图使用这个设备或文件.                           |
| /var/log/                | 各种程序的Log文件，特别是login (/var/log/wtmp log所有到系统的登录和注销) 和syslog (/var/log/messages 里存储所有核心和系统程序信息. /var/log 里的文件经常不确定地增长，应该定期清除. |
| /var/run                 | 保存到下次引导前有效的关于系统的信息文件.例如， /var/run/utmp 包含当前登录的用户的信息.                                                                                             |
| /var/cache/              | 应用程序缓存数据。这些数据是在本地生成的一个耗时的I/O或计算结果。应用程序必须能够再生或恢复数据。缓存的文件可以被删除而不导致数据丢失。                                             |

### `/usr`

这是个最庞大的目录，我们要用到的很多应用程序和文件几乎都存放在这个目录下。  
注意：usr是Unix Software Resource的缩写， 也就是Unix操作系统软件资源所放置的目录

| 目录         | 描述                                                                                                                                                                                                                                                                                                                                             |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /usr/X11R6   | 存放X-Windows的目录                                                                                                                                                                                                                                                                                                                              |
| /usr/bin     | 存放着许多用户自己安装的应用程序                                                                                                                                                                                                                                                                                                                 |
| /usr/sbin    | 存放一些用户安装的系统管理的必备命令。例如:dhcpd、httpd、imap、in.*d、inetd、lpd、named、netconfig、nmbd、samba、sendmail、squid、swap、tcpd、tcpdump等。                                                                                                                                                                                        |
| /usr/doc     | 这就是LINUX文档的大本营                                                                                                                                                                                                                                                                                                                          |
| /usr/include | 存放着LINUX下开发和编译应用程序需要的头文件                                                                                                                                                                                                                                                                                                      |
| /usr/lib     | 存放一些常用的动态链接共享库和静态档案库                                                                                                                                                                                                                                                                                                         |
| /usr/local   | 安装本地程序的一般默认路径例如，一个可执行文件被安装，安装实质就是复制到了/usr/local/bin下面；所需要依赖的库文件（如果有）被安装到了/usr/local/lib目录下；相应的头文件（如果有）被安装到了/usr/local/include中。也就是说，如果择了这个默认路径作为软件的安装路径，被安装的软件的所有文件都限制在这个目录中，其中的子目录就相应于根目录的子目录。 |
| /usr/man     | 是帮助文档目录                                                                                                                                                                                                                                                                                                                                   |
| /usr/src     | LINUX开放的源代码，就存在这个目录                                                                                                                                                                                                                                                                                                                |

## 判断linux系统

```shell
# 系统版本
cat /etc/os-release
# 内核版本
cat /proc/version
```

## 获取自身公网ip

```shell
curl ifconfig.me
curl icanhazip.com
curl ip.me

```

## yum

### 源文件操作

位置：`/etc/yum.repos.d`  
文件: `xxx.repo`  
修改以后运行： `yum clean all && yum makecache`
[源配置文档](https://developer.aliyun.com/mirror/)

### 常用命令

| 说明                       | 命令                       |
| :------------------------- | :------------------------- |
| 列出所有可更新的软件清单： | yum check-update           |
| 更新所有软件               | yum update                 |
| 仅安装指定的软件           | yum install <package_name> |
| 仅更新指定的软件           | yum update <package_name>  |
| 列出所有可安裝的软件       | yum list                   |
| 已安装的包                 | yum list installed         |
| 删除软件包                 | yum remove <package_name>  |
| 查找软件                   | yum search keyword       |
| 清除缓存                   | yum clean all              |
| 更新缓存                   | yum makecache              |

## apt

### apt源

源文件位置 `/etc/apt/source.list`  
修改以后运行 `apt update`  
[源配置文档](https://developer.aliyun.com/mirror/)

* Ubuntu 22.04：jammy
* Ubuntu 20.04：focal
* Ubuntu 18.04：bionic
* Ubuntu 16.04：xenial

### apt常用命令

| 说明                                   | 命令                            |
| :------------------------------------- | :------------------------------ |
| 同步系统上的软件包列表                 | apt update                      |
| 升级所有软件                           | apt upgrade                     |
| 列出可更新的软件包及版本信息           | apt list --upgradeable          |
| 升级软件包，升级前先删除需要更新软件包 | apt full-upgrade                |
| 升级某个包                             | apt install package_a package_b |
| 更新软件                               | apt update xxx                  |
| 显示软件包具体信息                     | apt show xxx                    |
| 删除软件                               | apt remove xxx                  |
| 清理不再使用的依赖和库文件             | apt autoremove                  |
| 移除软件包及配置文件                   | apt purge xxx                   |
| 查找软件包                             | apt search xxx                  |
| 列出所有已安装的包                     | apt list --installed            |
| 列出所有已安装的包的版本信息           | apt list --all-versions         |

apt upgrade 更新所有包
apt list --installed 查看所有已安装的包
apt search redis 查看可安装的包

## 同步时间

```shell
timedatectl status|grep 'Time zone'
#设置硬件时钟调整为与本地时钟一致
timedatectl set-local-rtc 1
#设置时区为上海
timedatectl set-timezone Asia/Shanghai
#安装ntpdate
yum -y install ntpdate
#同步时间 http://www.ntp.org.cn获取
ntpdate -u cn.ntp.org.cn
#同步完成后, date命令查看时间是否正确
date

#创建crontab任务
crontab -e
#添加定时任务
*/20 * * * * /usr/sbin/ntpdate cn.ntp.org.cn > /dev/null 2>&1
```

## 文件及字符串查找

```shell

# 搜索一个文件的内容 -n = number
grep  -n "ssl" /etc/nginx/nginx.conf

# 搜索文件夹下所有文件的内容 -r 递归
grep -rn "ssl" /etc/nginx

# 搜索文件夹下所有文件的内容,并指定文件类型
grep -rn --include="*.conf" "ssl" /etc/nginx

# 查找文件
find / -type f -name nginx.conf
# 查找某个后缀的文件
find / -type f -name "*.txt"

# 查找文件夹
find / -type d -name nginx
```

## 进程和端口号查找

```shell
# 根据端口号获取pid
lsof -i:pid
#找出非监听端口
netstat -ntp | grep ":22"
#找出监听端口
netstat -ntpl | grep ":22"
# 先获取pid,再根据pid查看信息
ps aux | grep nginx
cd /proc/${pid}
```

| 文件        | 说明                                                                                    | 使用          |
| :---------- | :-------------------------------------------------------------------------------------- | :------------ |
| arch_status | 空文件                                                                                  |               |
| cgroup      | 可以获取一个进程属于哪些控制组的信息。                                                  |               |
| cmdline     | 保存进程的完整命令行                                                                    | cat cmdline   |
| comm        | 进程的comm值，即与进程关联的命令名                                                      |               |
| cwd         | 执行命令的时候所在的目录                                                                | readlink cwd  |
| exe         | 软链接到实际可执行文件                                                                  | readlink exe  |
| fd          | 包含进程打开的每个文件的软连接                                                          | cd fd, ls -la |
| io          | 进程io信息统计                                                                          | cat io        |
| oom_score   | 选择OOM-killer进程而提供给该进程的当前分数。得分越高，意味着该流程更有可能被oom杀手选中 | cat oom_score |
| sessionid   | sessionid                                                                               | cat sessionid |
| status      | 内存、进程等相关信息                                                                    | cat status    |

## tar和zip

| 参数 | 作用                |
| :--- | :------------------ |
| -c   | 创建新的文件 create |
| -v   | 详细输出            |
| -f   | 指定归档文件的名称  |
| -x   | 解压                |
| -z   | 使用gzip来压缩      |
| -r   | 追加文件到压缩包    |

```shell

# 打包
tar -cvf archive.tar file1 file2 directory
tar -zcvf archive.tar.gz file1 file2 directory
gzip file.txt
# 追加到打包
tar -rvf archive.tar newfile
# 解压
tar -xvf 1.tar
tar -zxvf 1.tar.gz
gzip -d file.txt.gz
# 解压到指定目录
tar -zxvf 1.tar.gz -C /tmp


```

## 其他操作

### 查看当前路径下所有目录的大小

```shell
du -h /home --max-depth=1 | sort
```

### 查看磁盘、分区和卷组

```shell
lsblk -fp
```

### 计算小于某个日期的所有文件的大小之和

```shell
find . -type f ! -newermt 2021-10-01 -exec du -b {} \; | awk '{total+=$1} END {printf "%.2f GB\n", total/1024/1024/1024}'
```

### 打包日期范围内的所有文件

```shell
find . -type f -newermt 2021-01-01 ! -newermt 2022-01-01 -exec tar -rvf archive2021.tar {} \;
```

### 删除日期范围内的所有文件

```shell
find /data/images/shebao -type f -newermt "2000-01-01" ! -newermt "2020-01-01" -exec rm {} \;

```

### 移动某个日期范围内的文件到新目录

```shell
find /data/images/shebao -type f -newermt "2000-01-01" ! -newermt "2020-01-01" -exec mv {} /home/tmp/shebao-before-2020 \;
```
