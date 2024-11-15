# systemctl

## go的service配置

```shell
[Unit]
Description=OA的golang后台程序
#After=mysqld.service redis.service

[Service]
User=root
Group=root
ExecStart=/home/code/main
Restart=on-failure
WorkingDirectory=/home/code
StandardOutput=null
StandardError=null
[Install]
WantedBy=multi-user.target
```

## 日志

## 常用指令

```shell
# 启动服务
systemctl start test
# 关闭服务
systemctl stop test
# 重启
systemctl restart test
# 开机启动
systemctl enable test
systemctl disable test
systemctl is-enabled test
# 查看服务
systemctl status test
systemctl is-active test 
systemctl list-units
# 干掉服务
systemctl kill test
# 加载配置文件
systemctl daemon-reload
```

## 基础知识

### unit文件位置

`优先级高的会覆盖低的`
| 路径                    | 说明                                                                                                                    | 优先级 |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------- | :----- |
| /etc/systemd/system     | 与安装的 RPM 软件包一起分发的 systemd 单元文件                                                                          | 低     |
| /run/systemd/system     | 在运行时创建的 systemd 单元文件。该目录优先于安装了的服务单元文件的目录                                                 | 中     |
| /usr/lib/systemd/system | 使用 systemctl enable 命令创建的 systemd 单元文件，以及为扩展服务添加的单元文件。这个目录优先于带有运行时单元文件的目录 |   高   |

```shell
System Unit Search Path  
       /etc/systemd/system.control/*  
       /run/systemd/system.control/*  
       /run/systemd/transient/*  
       /run/systemd/generator.early/*  
       /etc/systemd/system/*  
       /etc/systemd/system.attached/*  
       /run/systemd/system/*  
       /run/systemd/system.attached/*  
       /run/systemd/generator/*  
       ...  
       /usr/lib/systemd/system/*  
       /run/systemd/generator.late/*  

User Unit Search Path
       ~/.config/systemd/user.control/*
       $XDG_RUNTIME_DIR/systemd/user.control/*
       $XDG_RUNTIME_DIR/systemd/transient/*
       $XDG_RUNTIME_DIR/systemd/generator.early/*
       ~/.config/systemd/user/*
       $XDG_CONFIG_DIRS/systemd/user/*
       /etc/systemd/user/*
       $XDG_RUNTIME_DIR/systemd/user/*
       /run/systemd/user/*
       $XDG_RUNTIME_DIR/systemd/generator/*
       $XDG_DATA_HOME/systemd/user/*
       $XDG_DATA_DIRS/systemd/user/*
       ...
       /usr/lib/systemd/user/*
       $XDG_RUNTIME_DIR/systemd/generator.late/*

```

## unit文件类型

| 系统资源类型 | 单元文件扩展名 | 单元文件描述                                                                              |
| :----------- | :------------- | :---------------------------------------------------------------------------------------- |
| Service      | .service       | 最常见Unit 文件类型，封装守护进程的启动、停止、重启和重载操作，也就是一直讲的服务         |
| Target       | .target        | 定义 target 信息及依赖关系，一般仅包含 Unit 段                                            |
| Device       | .device        | 对于 /dev 目录下的硬件设备，主要用于定义设备之间的依赖关系                                |
| Mount        | .mount         | 定义文件系统的挂载点，可以替代过去的 /etc/fstab 配置文件                                  |
| Automount    | .automount     | 用于控制自动挂载文件系统，相当于 SysV-init 的 autofs 服务                                 |
| Path         | .path          | 用于监控指定目录或文件的变化，并触发其它 Unit 运行                                        |
| Scope        | .scope         | 这种 Unit 文件不是用户创建的，而是 Systemd 运行时产生的，描述一些系统服务的分组信息       |
| Slice        | .slice         | 用于表示一个 CGroup 的树                                                                  |
| Snapshot     | .snapshot      | 用于表示一个由 systemctl snapshot 命令创建的 Systemd Units 运行状态快照，可以切回某个快照 |
| Socket       | .socket        | 监控来自于系统或网络的数据消息                                                            |
| Swap         | .swap          | 定义一个用户做虚拟内存的交换分区                                                          |
| Timer        | .timer         | 用于配置在特定时间触发的任务，替代了 Crontab 的功能                                       |

## unit文件字段详解

总共有三个部分`[Unit]`、`[Service]`、`[Install]`

### [Unit]

`单元文件可能包含 [Unit] 部分，该部分携带有关单元的通用信息，该信息不依赖于单元类型`  

### [Service]

`Type=simple`

```shell

```

### [Install]

| 选项            | 描述                                                                                                             |
| :-------------- | :--------------------------------------------------------------------------------------------------------------- |
| Alias           | 为这个单元提供空格分开的额外名称列表。除 systemctl enable 以外，多数systemctl 命令可使用别名而不是实际的单元名称 |
| RequiredBy      | 依赖于这个单元的单元列表。当启用此单元时，在 RequiredBy 中列出的单元会获得对这个单元的一个 Require 依赖项        |
| WantedBy        | 依赖于这个单元的单位列表。当启用这个单元时，在 WantedBy 中列出的单元会得到一个 Want 依赖项                       |
| Also            | 指定要随这个单元一起安装或卸载的单元列表                                                                         |
| DefaultInstance | 仅限于实例化单元，这个选项指定启用单位的默认实例                                                                 |
