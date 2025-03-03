import{_ as e,c as a,a as s,o as n}from"./app-o9ryrlfX.js";const l={};function i(d,t){return n(),a("div",null,t[0]||(t[0]=[s(`<h1 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h1><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2><h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span><code>/</code></span></a></h3><p>根目录</p><h3 id="bin" tabindex="-1"><a class="header-anchor" href="#bin"><span><code>/bin</code></span></a></h3><p>bin是Binary的缩写，这个目录是对UNIX系统习惯的沿袭，存放着使用者最经常使用的普通命令，包括大部分基础的Unix命令。例如：cp,ls,cat</p><h3 id="boot" tabindex="-1"><a class="header-anchor" href="#boot"><span><code>/boot</code></span></a></h3><p>这里存放的是启动LINUX时使用的一些核心文件，包括一些连接文件以及镜像文件,如果使用的是grub这个开机管理程式，则还会存在/boot/grub/这个目录。</p><h3 id="dev" tabindex="-1"><a class="header-anchor" href="#dev"><span><code>/dev</code></span></a></h3><p>device的缩写，存放linux的外部设备,其中/dev/null 是个黑洞</p><ul><li><code>/dev/hd[a-t]</code> IDE设备</li><li><code>/dev/sd[a-z]</code> SCSI设备</li><li><code>/dev/fd[0-7]</code> 标准软驱</li><li><code>/dev/md[0-31]</code> 软raid设备</li><li><code>/dev/loop[0-7]</code> 本地回环设备</li><li><code>/dev/ram[0-15]</code> 内存</li><li><code>/dev/null</code> 无限数据接收设备,相当于黑洞</li><li><code>/dev/zero</code> 无限零资源</li><li><code>/dev/tty[0-63]</code> 虚拟终端</li><li><code>/dev/ttyS[0-3]</code> 串口</li><li><code>/dev/lp[0-3]</code> 并口</li><li><code>/dev/console</code> 控制台</li><li><code>/dev/fb[0-31]</code> framebuffer</li><li><code>/dev/cdrom</code> =&gt; /dev/hdc</li><li><code>/dev/modem</code> =&gt; /dev/ttyS[0-9]</li><li><code>/dev/pilot</code> =&gt; /dev/ttyS[0-9]</li><li>/<code>dev/random</code> 随机数设备</li><li><code>/dev/urandom</code> 随机数设备</li></ul><h3 id="etc" tabindex="-1"><a class="header-anchor" href="#etc"><span><code>/etc</code></span></a></h3><p>系统管理所需要的配置文件和子文件 一般来说一个程序启动，如果需要读取一些配置文件的话，它会首先读取当前用户家目录的配置文件，如果存在就使用;如果不存在它就到/etc下读取全局的配置文件进而启动程序。</p><table><thead><tr><th style="text-align:left;">目录</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">/etc/rc，/etc/rc.d，/etc/rc*.d</td><td style="text-align:left;">启动、或改变运行级时运行的scripts或scripts的目录.</td></tr><tr><td style="text-align:left;">/etc/hosts</td><td style="text-align:left;">本地域名解析文件</td></tr><tr><td style="text-align:left;">/etc/sysconfig/network</td><td style="text-align:left;">IP、掩码、网关、主机名配置</td></tr><tr><td style="text-align:left;">/etc/resolv.conf</td><td style="text-align:left;">DNS服务器配置</td></tr><tr><td style="text-align:left;">/etc/fstab</td><td style="text-align:left;">开机自动挂载系统，所有分区开机都会自动挂载</td></tr><tr><td style="text-align:left;">/etc/inittab</td><td style="text-align:left;">设定系统启动时Init进程将把系统设置成什么样的runlevel及加载相关的启动文件配置</td></tr><tr><td style="text-align:left;">/etc/exports</td><td style="text-align:left;">设置NFS系统用的配置文件路径</td></tr><tr><td style="text-align:left;">/etc/init.d</td><td style="text-align:left;">这个目录来存放系统启动脚本</td></tr><tr><td style="text-align:left;">/etc/profile, /etc/csh.login, /etc/csh.cshrc</td><td style="text-align:left;">全局系统环境配置变量</td></tr><tr><td style="text-align:left;">/etc/issue</td><td style="text-align:left;">认证前的输出信息，默认输出版本内核信息</td></tr><tr><td style="text-align:left;">/etc/motd</td><td style="text-align:left;">设置认证后的输出信息，</td></tr><tr><td style="text-align:left;">/etc/mtab</td><td style="text-align:left;">当前安装的文件系统列表.由scripts初始化，并由mount 命令自动更新.需要一个当前安装的文件系统的列表时使用，例如df 命令</td></tr><tr><td style="text-align:left;">/etc/group</td><td style="text-align:left;">类似/etc/passwd ，但说明的不是用户而是组.</td></tr><tr><td style="text-align:left;">/etc/passwd</td><td style="text-align:left;">用户数据库，其中的域给出了用户名、真实姓名、家目录、加密的口令和用户的其他信息.</td></tr><tr><td style="text-align:left;">/etc/shadow</td><td style="text-align:left;">在安装了影子口令软件的系统上的影子口令文件.影子口令文件将/etc/passwd 文件中的加密口令移动到/etc/shadow 中，而后者只对root可读.这使破译口令更困难.</td></tr><tr><td style="text-align:left;">/etc/sudoers</td><td style="text-align:left;">可以sudo命令的配置文件</td></tr><tr><td style="text-align:left;">/etc/syslog.conf</td><td style="text-align:left;">系统日志参数配置</td></tr><tr><td style="text-align:left;">/etc/login.defs</td><td style="text-align:left;">设置用户帐号限制的文件</td></tr><tr><td style="text-align:left;">/etc/securetty</td><td style="text-align:left;">确认安全终端，即哪个终端允许root登录.一般只列出虚拟控制台，这样就不可能(至少很困难)通过modem或网络闯入系统并得到超级用户特权.</td></tr><tr><td style="text-align:left;">/etc/printcap</td><td style="text-align:left;">类似/etc/termcap ，但针对打印机.语法不同.</td></tr><tr><td style="text-align:left;">/etc/shells</td><td style="text-align:left;">列出可信任的shell.chsh 命令允许用户在本文件指定范围内改变登录shell.提供一台机器FTP服务的服务进程ftpd 检查用户shell是否列在 /etc/shells 文件中，如果不是将不允许该用户登录.</td></tr><tr><td style="text-align:left;">/etc/xinetd.d</td><td style="text-align:left;">如果服务器是通过xinetd模式运行的，它的脚本要放在这个目录下。有些系统没有这个目录，比如Slackware，有些老的版本也没有。在Redhat Fedora中比较新的版本中存在。</td></tr><tr><td style="text-align:left;">/etc/opt/</td><td style="text-align:left;">/opt/的配置文件</td></tr><tr><td style="text-align:left;">/etc/X11/</td><td style="text-align:left;">X_Window系统(版本11)的配置文件</td></tr><tr><td style="text-align:left;">/etc/sgml/</td><td style="text-align:left;">SGML的配置文件</td></tr><tr><td style="text-align:left;">/etc/xml/</td><td style="text-align:left;">XML的配置文件</td></tr><tr><td style="text-align:left;">/etc/skel/</td><td style="text-align:left;">默认创建用户时，把该目录拷贝到家目录下</td></tr></tbody></table><h3 id="home" tabindex="-1"><a class="header-anchor" href="#home"><span><code>/home</code></span></a></h3><p>用户的主目录。比如说有个用户叫wang，那他的主目录就是/home/wang。</p><h3 id="lib" tabindex="-1"><a class="header-anchor" href="#lib"><span><code>/lib</code></span></a></h3><p>这个目录里存放着系统最基本的动态链接共享库，其作用类似于Windows里的dll文件。几乎所有的应用程序都需要用到这些共享库。</p><h3 id="lost-found" tabindex="-1"><a class="header-anchor" href="#lost-found"><span><code>/lost+found</code></span></a></h3><p>这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。</p><h3 id="media" tabindex="-1"><a class="header-anchor" href="#media"><span><code>/media</code></span></a></h3><p>linux系统会自动识别一些设备，例如U盘、光驱等等，当识别后，linux会把识别的设备挂载到这个目录下。</p><h3 id="opt" tabindex="-1"><a class="header-anchor" href="#opt"><span><code>/opt</code></span></a></h3><p>可选的附加应用程序，这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。</p><h3 id="mnt" tabindex="-1"><a class="header-anchor" href="#mnt"><span><code>/mnt</code></span></a></h3><p>这个目录是空的，系统提供这个目录是让用户临时挂载别的文件系统。我们可以将光驱挂载在/mnt/上，然后进入该目录就可以查看光驱里的内容了。</p><p>在远古时期，这个目录的用途与/media相同啦。 只是有了/media之后，这个目录就用来暂时挂载用了。</p><p>一般来说，我们最好在/mnt目录下面多建立几个子目录，挂载的时候挂载到这些子目录上面，因为通常我们可能不仅仅是挂载一个设备吧?</p><h3 id="proc" tabindex="-1"><a class="header-anchor" href="#proc"><span><code>/proc</code></span></a></h3><p>这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。也就是说，这个目录的内容不在硬盘上而是在内存里。</p><table><thead><tr><th style="text-align:left;">/proc/meminfo</th><th style="text-align:left;">查看内存信息</th></tr></thead><tbody><tr><td style="text-align:left;">/proc/loadavg</td><td style="text-align:left;">还记得 top 以及 uptime 吧？没错！上头的三个平均数值就是记录在此！</td></tr><tr><td style="text-align:left;">/proc/uptime</td><td style="text-align:left;">就是用 uptime 的时候，会出现的资讯啦！</td></tr><tr><td style="text-align:left;">/proc/cpuinfo</td><td style="text-align:left;">关于处理器的信息，如类型、厂家、型号和性能等。</td></tr><tr><td style="text-align:left;">/proc/cmdline</td><td style="text-align:left;">加载 kernel 时所下达的相关参数！查阅此文件，可了解系统是如何启动的！</td></tr><tr><td style="text-align:left;">/proc/filesystems</td><td style="text-align:left;">目前系统已经加载的文件系统罗！</td></tr><tr><td style="text-align:left;">/proc/interrupts</td><td style="text-align:left;">目前系统上面的 IRQ 分配状态。</td></tr><tr><td style="text-align:left;">/proc/ioports</td><td style="text-align:left;">目前系统上面各个装置所配置的 I/O 位址。</td></tr><tr><td style="text-align:left;">/proc/kcore</td><td style="text-align:left;">这个就是内存的大小啦！好大对吧！但是不要读他啦！</td></tr><tr><td style="text-align:left;">/proc/modules</td><td style="text-align:left;">目前我们的 Linux 已经加载的模块列表，也可以想成是驱动程序啦！</td></tr><tr><td style="text-align:left;">/proc/mounts</td><td style="text-align:left;">系统已经挂载的数据，就是用 mount 这个命令呼叫出来的数据啦！</td></tr><tr><td style="text-align:left;">/proc/swaps</td><td style="text-align:left;">到底系统挂加载的内存在哪里？呵呵！使用掉的 partition 就记录在此啦！</td></tr><tr><td style="text-align:left;">/proc/partitions</td><td style="text-align:left;">使用 fdisk -l 会出现目前所有的 partition 吧？在这个文件当中也有纪录喔！</td></tr><tr><td style="text-align:left;">/proc/pci</td><td style="text-align:left;">在 PCI 汇流排上面，每个装置的详细情况！可用 lspci 来查阅！</td></tr><tr><td style="text-align:left;">/proc/version</td><td style="text-align:left;">核心的版本，就是用 uname -a 显示的内容啦！</td></tr><tr><td style="text-align:left;">/proc/bus/*</td><td style="text-align:left;">一些汇流排的装置，还有 U盘的装置也记录在此喔！</td></tr></tbody></table><h3 id="root" tabindex="-1"><a class="header-anchor" href="#root"><span><code>/root</code></span></a></h3><p>root的home</p><h3 id="sbin" tabindex="-1"><a class="header-anchor" href="#sbin"><span><code>/sbin</code></span></a></h3><p>s就是Super User的意思，也就是说这里存放的是一些系统管理员使用的系统管理程序。如shutdown，reboot，用于启动系统，修复系统。</p><h3 id="srv" tabindex="-1"><a class="header-anchor" href="#srv"><span><code>/srv</code></span></a></h3><p>srv就是service的缩写，是一些网路服务启动之后，这些服务所需要取用的资料目录。</p><p>常见的服务例如WWW, FTP等等。</p><h3 id="sys" tabindex="-1"><a class="header-anchor" href="#sys"><span><code>/sys</code></span></a></h3><p>录类似/proc目录，里面是设备和系统的信息。这是linux2.6内核的一个很大的变化。该目录下安装了2.6内核中新出现的一个文件系统 sysfs 。</p><h3 id="tmp" tabindex="-1"><a class="header-anchor" href="#tmp"><span><code>/tmp</code></span></a></h3><p>这个目录包含系统和用户创建的临时文件。所有用户对该目录都有读和写的权限，不过可能对别人的文件没有权限。重要数据请不要存放在/tmp目录中，因为很多系统会在启动时清空/tmp目录，甚至是经常性地清理这个目录里的旧文件。</p><h3 id="var" tabindex="-1"><a class="header-anchor" href="#var"><span><code>/var</code></span></a></h3><p>变量文件夹，var表示变量。这个目录下可以找到内容可能增长的文件。包括 - 系统日志文件（/var/log）、包和数据库文件（/var/lib）、电子邮件（/var/mail）、打印队列（/var/spool）、锁文件（/var/lock）、多次重新启动需要的临时文件（/var/tmp）等（你可能会注意到这里有一个子目录/var/tmp，和/tmp不同的是，系统不会在启动时 清空它。）</p><table><thead><tr><th style="text-align:left;">目录</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">/var/log/message</td><td style="text-align:left;">日志信息，按周自动轮询</td></tr><tr><td style="text-align:left;">/var/spool/cron/root</td><td style="text-align:left;">定时器配置文件目录，默认按用户命名</td></tr><tr><td style="text-align:left;">/var/log/secure</td><td style="text-align:left;">记录登陆系统存取信息的文件，不管认证成功还是认证失败都会记录</td></tr><tr><td style="text-align:left;">/var/log/wtmp</td><td style="text-align:left;">记录登陆者信息的文件，last,who,w命令信息来源于此</td></tr><tr><td style="text-align:left;">/var/spool/clientmqueue/</td><td style="text-align:left;">当邮件服务未开启时，所有应发给系统管理员的邮件都将堆放在此</td></tr><tr><td style="text-align:left;">/var/spool/mail/</td><td style="text-align:left;">邮件目录</td></tr><tr><td style="text-align:left;">/var/tmp</td><td style="text-align:left;">比/tmp 允许的大或需要存在较长时间的临时文件. (虽然系统管理员可能不允许/var/tmp 有很旧的文件.)</td></tr><tr><td style="text-align:left;">/var/lib</td><td style="text-align:left;">系统正常运行时要改变的文件.</td></tr><tr><td style="text-align:left;">/var/local</td><td style="text-align:left;">/usr/local 中安装的程序的可变数据(即系统管理员安装的程序).注意，如果必要，即使本地安装的程序也会使用其他/var 目录，例如/var/lock .</td></tr><tr><td style="text-align:left;">/var/lock</td><td style="text-align:left;">锁定文件.许多程序遵循在/var/lock 中产生一个锁定文件的约定，以支持他们正在使用某个特定的设备或文件.其他程序注意到这个锁定文件，将不试图使用这个设备或文件.</td></tr><tr><td style="text-align:left;">/var/log/</td><td style="text-align:left;">各种程序的Log文件，特别是login (/var/log/wtmp log所有到系统的登录和注销) 和syslog (/var/log/messages 里存储所有核心和系统程序信息. /var/log 里的文件经常不确定地增长，应该定期清除.</td></tr><tr><td style="text-align:left;">/var/run</td><td style="text-align:left;">保存到下次引导前有效的关于系统的信息文件.例如， /var/run/utmp 包含当前登录的用户的信息.</td></tr><tr><td style="text-align:left;">/var/cache/</td><td style="text-align:left;">应用程序缓存数据。这些数据是在本地生成的一个耗时的I/O或计算结果。应用程序必须能够再生或恢复数据。缓存的文件可以被删除而不导致数据丢失。</td></tr></tbody></table><h3 id="usr" tabindex="-1"><a class="header-anchor" href="#usr"><span><code>/usr</code></span></a></h3><p>这是个最庞大的目录，我们要用到的很多应用程序和文件几乎都存放在这个目录下。<br> 注意：usr是Unix Software Resource的缩写， 也就是Unix操作系统软件资源所放置的目录</p><table><thead><tr><th style="text-align:left;">目录</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">/usr/X11R6</td><td style="text-align:left;">存放X-Windows的目录</td></tr><tr><td style="text-align:left;">/usr/bin</td><td style="text-align:left;">存放着许多用户自己安装的应用程序</td></tr><tr><td style="text-align:left;">/usr/sbin</td><td style="text-align:left;">存放一些用户安装的系统管理的必备命令。例如:dhcpd、httpd、imap、in.*d、inetd、lpd、named、netconfig、nmbd、samba、sendmail、squid、swap、tcpd、tcpdump等。</td></tr><tr><td style="text-align:left;">/usr/doc</td><td style="text-align:left;">这就是LINUX文档的大本营</td></tr><tr><td style="text-align:left;">/usr/include</td><td style="text-align:left;">存放着LINUX下开发和编译应用程序需要的头文件</td></tr><tr><td style="text-align:left;">/usr/lib</td><td style="text-align:left;">存放一些常用的动态链接共享库和静态档案库</td></tr><tr><td style="text-align:left;">/usr/local</td><td style="text-align:left;">安装本地程序的一般默认路径例如，一个可执行文件被安装，安装实质就是复制到了/usr/local/bin下面；所需要依赖的库文件（如果有）被安装到了/usr/local/lib目录下；相应的头文件（如果有）被安装到了/usr/local/include中。也就是说，如果择了这个默认路径作为软件的安装路径，被安装的软件的所有文件都限制在这个目录中，其中的子目录就相应于根目录的子目录。</td></tr><tr><td style="text-align:left;">/usr/man</td><td style="text-align:left;">是帮助文档目录</td></tr><tr><td style="text-align:left;">/usr/src</td><td style="text-align:left;">LINUX开放的源代码，就存在这个目录</td></tr></tbody></table><h2 id="判断linux系统" tabindex="-1"><a class="header-anchor" href="#判断linux系统"><span>判断linux系统</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 系统版本</span></span>
<span class="line"><span class="token function">cat</span> /etc/os-release</span>
<span class="line"><span class="token comment"># 内核版本</span></span>
<span class="line"><span class="token function">cat</span> /proc/version</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取自身公网ip" tabindex="-1"><a class="header-anchor" href="#获取自身公网ip"><span>获取自身公网ip</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> ifconfig.me</span>
<span class="line"><span class="token function">curl</span> icanhazip.com</span>
<span class="line"><span class="token function">curl</span> ip.me</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yum" tabindex="-1"><a class="header-anchor" href="#yum"><span>yum</span></a></h2><h3 id="源文件操作" tabindex="-1"><a class="header-anchor" href="#源文件操作"><span>源文件操作</span></a></h3><p>位置：<code>/etc/yum.repos.d</code><br> 文件: <code>xxx.repo</code><br> 修改以后运行： <code>yum clean all &amp;&amp; yum makecache</code><a href="https://developer.aliyun.com/mirror/" target="_blank" rel="noopener noreferrer">源配置文档</a></p><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h3><table><thead><tr><th style="text-align:left;">说明</th><th style="text-align:left;">命令</th></tr></thead><tbody><tr><td style="text-align:left;">列出所有可更新的软件清单：</td><td style="text-align:left;">yum check-update</td></tr><tr><td style="text-align:left;">更新所有软件</td><td style="text-align:left;">yum update</td></tr><tr><td style="text-align:left;">仅安装指定的软件</td><td style="text-align:left;">yum install &lt;package_name&gt;</td></tr><tr><td style="text-align:left;">仅更新指定的软件</td><td style="text-align:left;">yum update &lt;package_name&gt;</td></tr><tr><td style="text-align:left;">列出所有可安裝的软件</td><td style="text-align:left;">yum list</td></tr><tr><td style="text-align:left;">已安装的包</td><td style="text-align:left;">yum list installed</td></tr><tr><td style="text-align:left;">删除软件包</td><td style="text-align:left;">yum remove &lt;package_name&gt;</td></tr><tr><td style="text-align:left;">查找软件</td><td style="text-align:left;">yum search keyword</td></tr><tr><td style="text-align:left;">清除缓存</td><td style="text-align:left;">yum clean all</td></tr><tr><td style="text-align:left;">更新缓存</td><td style="text-align:left;">yum makecache</td></tr></tbody></table><h2 id="apt" tabindex="-1"><a class="header-anchor" href="#apt"><span>apt</span></a></h2><h3 id="apt源" tabindex="-1"><a class="header-anchor" href="#apt源"><span>apt源</span></a></h3><p>源文件位置 <code>/etc/apt/source.list</code><br> 修改以后运行 <code>apt update</code><br><a href="https://developer.aliyun.com/mirror/" target="_blank" rel="noopener noreferrer">源配置文档</a></p><ul><li>Ubuntu 22.04：jammy</li><li>Ubuntu 20.04：focal</li><li>Ubuntu 18.04：bionic</li><li>Ubuntu 16.04：xenial</li></ul><h3 id="apt常用命令" tabindex="-1"><a class="header-anchor" href="#apt常用命令"><span>apt常用命令</span></a></h3><table><thead><tr><th style="text-align:left;">说明</th><th style="text-align:left;">命令</th></tr></thead><tbody><tr><td style="text-align:left;">同步系统上的软件包列表</td><td style="text-align:left;">apt update</td></tr><tr><td style="text-align:left;">升级所有软件</td><td style="text-align:left;">apt upgrade</td></tr><tr><td style="text-align:left;">列出可更新的软件包及版本信息</td><td style="text-align:left;">apt list --upgradeable</td></tr><tr><td style="text-align:left;">升级软件包，升级前先删除需要更新软件包</td><td style="text-align:left;">apt full-upgrade</td></tr><tr><td style="text-align:left;">升级某个包</td><td style="text-align:left;">apt install package_a package_b</td></tr><tr><td style="text-align:left;">更新软件</td><td style="text-align:left;">apt update xxx</td></tr><tr><td style="text-align:left;">显示软件包具体信息</td><td style="text-align:left;">apt show xxx</td></tr><tr><td style="text-align:left;">删除软件</td><td style="text-align:left;">apt remove xxx</td></tr><tr><td style="text-align:left;">清理不再使用的依赖和库文件</td><td style="text-align:left;">apt autoremove</td></tr><tr><td style="text-align:left;">移除软件包及配置文件</td><td style="text-align:left;">apt purge xxx</td></tr><tr><td style="text-align:left;">查找软件包</td><td style="text-align:left;">apt search xxx</td></tr><tr><td style="text-align:left;">列出所有已安装的包</td><td style="text-align:left;">apt list --installed</td></tr><tr><td style="text-align:left;">列出所有已安装的包的版本信息</td><td style="text-align:left;">apt list --all-versions</td></tr></tbody></table><p>apt upgrade 更新所有包 apt list --installed 查看所有已安装的包 apt search redis 查看可安装的包</p><h2 id="同步时间" tabindex="-1"><a class="header-anchor" href="#同步时间"><span>同步时间</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">timedatectl status<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&#39;Time zone&#39;</span></span>
<span class="line"><span class="token comment">#设置硬件时钟调整为与本地时钟一致</span></span>
<span class="line">timedatectl set-local-rtc <span class="token number">1</span></span>
<span class="line"><span class="token comment">#设置时区为上海</span></span>
<span class="line">timedatectl set-timezone Asia/Shanghai</span>
<span class="line"><span class="token comment">#安装ntpdate</span></span>
<span class="line">yum <span class="token parameter variable">-y</span> <span class="token function">install</span> ntpdate</span>
<span class="line"><span class="token comment">#同步时间 http://www.ntp.org.cn获取</span></span>
<span class="line">ntpdate <span class="token parameter variable">-u</span> cn.ntp.org.cn</span>
<span class="line"><span class="token comment">#同步完成后, date命令查看时间是否正确</span></span>
<span class="line"><span class="token function">date</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#创建crontab任务</span></span>
<span class="line"><span class="token function">crontab</span> <span class="token parameter variable">-e</span></span>
<span class="line"><span class="token comment">#添加定时任务</span></span>
<span class="line">*/20 * * * * /usr/sbin/ntpdate cn.ntp.org.cn <span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件及字符串查找" tabindex="-1"><a class="header-anchor" href="#文件及字符串查找"><span>文件及字符串查找</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token comment"># 搜索一个文件的内容 -n = number</span></span>
<span class="line"><span class="token function">grep</span>  <span class="token parameter variable">-n</span> <span class="token string">&quot;ssl&quot;</span> /etc/nginx/nginx.conf</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 搜索文件夹下所有文件的内容 -r 递归</span></span>
<span class="line"><span class="token function">grep</span> <span class="token parameter variable">-rn</span> <span class="token string">&quot;ssl&quot;</span> /etc/nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 搜索文件夹下所有文件的内容,并指定文件类型</span></span>
<span class="line"><span class="token function">grep</span> <span class="token parameter variable">-rn</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;*.conf&quot;</span> <span class="token string">&quot;ssl&quot;</span> /etc/nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查找文件</span></span>
<span class="line"><span class="token function">find</span> / <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> nginx.conf</span>
<span class="line"><span class="token comment"># 查找某个后缀的文件</span></span>
<span class="line"><span class="token function">find</span> / <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.txt&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查找文件夹</span></span>
<span class="line"><span class="token function">find</span> / <span class="token parameter variable">-type</span> d <span class="token parameter variable">-name</span> nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进程和端口号查找" tabindex="-1"><a class="header-anchor" href="#进程和端口号查找"><span>进程和端口号查找</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 根据端口号获取pid</span></span>
<span class="line"><span class="token function">lsof</span> <span class="token parameter variable">-i:pid</span></span>
<span class="line"><span class="token comment">#找出非监听端口</span></span>
<span class="line"><span class="token function">netstat</span> <span class="token parameter variable">-ntp</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;:22&quot;</span></span>
<span class="line"><span class="token comment">#找出监听端口</span></span>
<span class="line"><span class="token function">netstat</span> <span class="token parameter variable">-ntpl</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;:22&quot;</span></span>
<span class="line"><span class="token comment"># 先获取pid,再根据pid查看信息</span></span>
<span class="line"><span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> nginx</span>
<span class="line"><span class="token builtin class-name">cd</span> /proc/<span class="token variable">\${pid}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">文件</th><th style="text-align:left;">说明</th><th style="text-align:left;">使用</th></tr></thead><tbody><tr><td style="text-align:left;">arch_status</td><td style="text-align:left;">空文件</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">cgroup</td><td style="text-align:left;">可以获取一个进程属于哪些控制组的信息。</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">cmdline</td><td style="text-align:left;">保存进程的完整命令行</td><td style="text-align:left;">cat cmdline</td></tr><tr><td style="text-align:left;">comm</td><td style="text-align:left;">进程的comm值，即与进程关联的命令名</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">cwd</td><td style="text-align:left;">执行命令的时候所在的目录</td><td style="text-align:left;">readlink cwd</td></tr><tr><td style="text-align:left;">exe</td><td style="text-align:left;">软链接到实际可执行文件</td><td style="text-align:left;">readlink exe</td></tr><tr><td style="text-align:left;">fd</td><td style="text-align:left;">包含进程打开的每个文件的软连接</td><td style="text-align:left;">cd fd, ls -la</td></tr><tr><td style="text-align:left;">io</td><td style="text-align:left;">进程io信息统计</td><td style="text-align:left;">cat io</td></tr><tr><td style="text-align:left;">oom_score</td><td style="text-align:left;">选择OOM-killer进程而提供给该进程的当前分数。得分越高，意味着该流程更有可能被oom杀手选中</td><td style="text-align:left;">cat oom_score</td></tr><tr><td style="text-align:left;">sessionid</td><td style="text-align:left;">sessionid</td><td style="text-align:left;">cat sessionid</td></tr><tr><td style="text-align:left;">status</td><td style="text-align:left;">内存、进程等相关信息</td><td style="text-align:left;">cat status</td></tr></tbody></table><h2 id="tar和zip" tabindex="-1"><a class="header-anchor" href="#tar和zip"><span>tar和zip</span></a></h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">-c</td><td style="text-align:left;">创建新的文件 create</td></tr><tr><td style="text-align:left;">-v</td><td style="text-align:left;">详细输出</td></tr><tr><td style="text-align:left;">-f</td><td style="text-align:left;">指定归档文件的名称</td></tr><tr><td style="text-align:left;">-x</td><td style="text-align:left;">解压</td></tr><tr><td style="text-align:left;">-z</td><td style="text-align:left;">使用gzip来压缩</td></tr><tr><td style="text-align:left;">-r</td><td style="text-align:left;">追加文件到压缩包</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token comment"># 打包</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-cvf</span> archive.tar file1 file2 directory</span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> archive.tar.gz file1 file2 directory</span>
<span class="line"><span class="token function">gzip</span> file.txt</span>
<span class="line"><span class="token comment"># 追加到打包</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-rvf</span> archive.tar newfile</span>
<span class="line"><span class="token comment"># 解压</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> <span class="token number">1</span>.tar</span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> <span class="token number">1</span>.tar.gz</span>
<span class="line"><span class="token function">gzip</span> <span class="token parameter variable">-d</span> file.txt.gz</span>
<span class="line"><span class="token comment"># 解压到指定目录</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> <span class="token number">1</span>.tar.gz <span class="token parameter variable">-C</span> /tmp</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他操作" tabindex="-1"><a class="header-anchor" href="#其他操作"><span>其他操作</span></a></h2><h3 id="查看当前路径下所有目录的大小" tabindex="-1"><a class="header-anchor" href="#查看当前路径下所有目录的大小"><span>查看当前路径下所有目录的大小</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">du</span> <span class="token parameter variable">-h</span> /home --max-depth<span class="token operator">=</span><span class="token number">1</span> <span class="token operator">|</span> <span class="token function">sort</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="查看磁盘、分区和卷组" tabindex="-1"><a class="header-anchor" href="#查看磁盘、分区和卷组"><span>查看磁盘、分区和卷组</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">lsblk <span class="token parameter variable">-fp</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="计算小于某个日期的所有文件的大小之和" tabindex="-1"><a class="header-anchor" href="#计算小于某个日期的所有文件的大小之和"><span>计算小于某个日期的所有文件的大小之和</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token operator">!</span> <span class="token parameter variable">-newermt</span> <span class="token number">2021</span>-10-01 <span class="token parameter variable">-exec</span> <span class="token function">du</span> <span class="token parameter variable">-b</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{total+=$1} END {printf &quot;%.2f GB\\n&quot;, total/1024/1024/1024}&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="打包日期范围内的所有文件" tabindex="-1"><a class="header-anchor" href="#打包日期范围内的所有文件"><span>打包日期范围内的所有文件</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-newermt</span> <span class="token number">2021</span>-01-01 <span class="token operator">!</span> <span class="token parameter variable">-newermt</span> <span class="token number">2022</span>-01-01 <span class="token parameter variable">-exec</span> <span class="token function">tar</span> <span class="token parameter variable">-rvf</span> archive2021.tar <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="删除日期范围内的所有文件" tabindex="-1"><a class="header-anchor" href="#删除日期范围内的所有文件"><span>删除日期范围内的所有文件</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">find</span> /data/images/shebao <span class="token parameter variable">-type</span> f <span class="token parameter variable">-newermt</span> <span class="token string">&quot;2000-01-01&quot;</span> <span class="token operator">!</span> <span class="token parameter variable">-newermt</span> <span class="token string">&quot;2020-01-01&quot;</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="移动某个日期范围内的文件到新目录" tabindex="-1"><a class="header-anchor" href="#移动某个日期范围内的文件到新目录"><span>移动某个日期范围内的文件到新目录</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">find</span> /data/images/shebao <span class="token parameter variable">-type</span> f <span class="token parameter variable">-newermt</span> <span class="token string">&quot;2000-01-01&quot;</span> <span class="token operator">!</span> <span class="token parameter variable">-newermt</span> <span class="token string">&quot;2020-01-01&quot;</span> <span class="token parameter variable">-exec</span> <span class="token function">mv</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> /home/tmp/shebao-before-2020 <span class="token punctuation">\\</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,87)]))}const p=e(l,[["render",i],["__file","Linux.html.vue"]]),c=JSON.parse('{"path":"/foundation/Linux.html","title":"Linux","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[{"level":3,"title":"/","slug":"","link":"#","children":[]},{"level":3,"title":"/bin","slug":"bin","link":"#bin","children":[]},{"level":3,"title":"/boot","slug":"boot","link":"#boot","children":[]},{"level":3,"title":"/dev","slug":"dev","link":"#dev","children":[]},{"level":3,"title":"/etc","slug":"etc","link":"#etc","children":[]},{"level":3,"title":"/home","slug":"home","link":"#home","children":[]},{"level":3,"title":"/lib","slug":"lib","link":"#lib","children":[]},{"level":3,"title":"/lost+found","slug":"lost-found","link":"#lost-found","children":[]},{"level":3,"title":"/media","slug":"media","link":"#media","children":[]},{"level":3,"title":"/opt","slug":"opt","link":"#opt","children":[]},{"level":3,"title":"/mnt","slug":"mnt","link":"#mnt","children":[]},{"level":3,"title":"/proc","slug":"proc","link":"#proc","children":[]},{"level":3,"title":"/root","slug":"root","link":"#root","children":[]},{"level":3,"title":"/sbin","slug":"sbin","link":"#sbin","children":[]},{"level":3,"title":"/srv","slug":"srv","link":"#srv","children":[]},{"level":3,"title":"/sys","slug":"sys","link":"#sys","children":[]},{"level":3,"title":"/tmp","slug":"tmp","link":"#tmp","children":[]},{"level":3,"title":"/var","slug":"var","link":"#var","children":[]},{"level":3,"title":"/usr","slug":"usr","link":"#usr","children":[]}]},{"level":2,"title":"判断linux系统","slug":"判断linux系统","link":"#判断linux系统","children":[]},{"level":2,"title":"获取自身公网ip","slug":"获取自身公网ip","link":"#获取自身公网ip","children":[]},{"level":2,"title":"yum","slug":"yum","link":"#yum","children":[{"level":3,"title":"源文件操作","slug":"源文件操作","link":"#源文件操作","children":[]},{"level":3,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]}]},{"level":2,"title":"apt","slug":"apt","link":"#apt","children":[{"level":3,"title":"apt源","slug":"apt源","link":"#apt源","children":[]},{"level":3,"title":"apt常用命令","slug":"apt常用命令","link":"#apt常用命令","children":[]}]},{"level":2,"title":"同步时间","slug":"同步时间","link":"#同步时间","children":[]},{"level":2,"title":"文件及字符串查找","slug":"文件及字符串查找","link":"#文件及字符串查找","children":[]},{"level":2,"title":"进程和端口号查找","slug":"进程和端口号查找","link":"#进程和端口号查找","children":[]},{"level":2,"title":"tar和zip","slug":"tar和zip","link":"#tar和zip","children":[]},{"level":2,"title":"其他操作","slug":"其他操作","link":"#其他操作","children":[{"level":3,"title":"查看当前路径下所有目录的大小","slug":"查看当前路径下所有目录的大小","link":"#查看当前路径下所有目录的大小","children":[]},{"level":3,"title":"查看磁盘、分区和卷组","slug":"查看磁盘、分区和卷组","link":"#查看磁盘、分区和卷组","children":[]},{"level":3,"title":"计算小于某个日期的所有文件的大小之和","slug":"计算小于某个日期的所有文件的大小之和","link":"#计算小于某个日期的所有文件的大小之和","children":[]},{"level":3,"title":"打包日期范围内的所有文件","slug":"打包日期范围内的所有文件","link":"#打包日期范围内的所有文件","children":[]},{"level":3,"title":"删除日期范围内的所有文件","slug":"删除日期范围内的所有文件","link":"#删除日期范围内的所有文件","children":[]},{"level":3,"title":"移动某个日期范围内的文件到新目录","slug":"移动某个日期范围内的文件到新目录","link":"#移动某个日期范围内的文件到新目录","children":[]}]}],"git":{"updatedTime":1713431046000,"contributors":[{"name":"OldWitch","email":"demilich1990@gmail.com","commits":1,"url":"https://github.com/OldWitch"}]},"filePathRelative":"foundation/Linux.md"}');export{p as comp,c as data};
