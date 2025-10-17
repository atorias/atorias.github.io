# audit日志

## 安装

```shell
 apt install auditd audispd-plugins -y
```

## 启动

```shell
systemctl enable auditd # 开机启动
systemctl start auditd # 启动
systemctl status auditd # 查看状态
```

## 设置规则 audit.rules

### 规则配置文件地址

```/etc/audit/rules.d/audit.rules```

### 规则配置精简版

```shell
## ===============================
## Linux Audit - 精简版规则模板
## ===============================

## 清空旧规则
-D

## 性能调优
-b 8192
--backlog_wait_time 60000
-f 1

## ---- 登录与身份验证 ----
-w /var/log/lastlog -p wa -k logins
-w /etc/passwd -p wa -k passwd_changes
-w /etc/shadow -p wa -k shadow_changes
-w /etc/sudoers -p wa -k sudoers_changes
-w /etc/ssh/sshd_config -p wa -k ssh_config

## ---- 关键配置文件 ----
-w /etc/hostname -p wa -k hostname_changes
-w /etc/hosts -p wa -k hosts_changes
-w /etc/resolv.conf -p wa -k dns_changes

## ---- 命令执行 ----
-a always,exit -F arch=b64 -S execve -k exec
-a always,exit -F arch=b32 -S execve -k exec

## ---- 系统时间与模块 ----
-a always,exit -F arch=b64 -S adjtimex,settimeofday,clock_settime -k time_change
-a always,exit -F arch=b64 -S init_module,delete_module -k kernel_module

## ---- 审计配置自身 ----
-w /etc/audit/ -p wa -k audit_config
-w /var/log/audit/ -p wa -k audit_log

## ---- 结束标志 ----
-e 2

```

### 规则配置完整版（负载大）

```shell
## ===============================
## Linux 系统安全审计规则模板
## ===============================

## ---- 1. 记录系统启动与关机事件 ----
-w /sbin/shutdown -p x -k system_shutdown
-w /sbin/reboot -p x -k system_reboot
-w /sbin/poweroff -p x -k system_poweroff

## ---- 2. 登录与认证事件 ----
-w /var/log/lastlog -p wa -k logins
-w /var/run/faillock -p wa -k logins
-w /var/log/faillog -p wa -k logins
-w /etc/securetty -p wa -k securetty_changes

## ---- 3. 用户与组管理 ----
-w /etc/passwd -p wa -k passwd_changes
-w /etc/group -p wa -k group_changes
-w /etc/shadow -p wa -k shadow_changes
-w /etc/gshadow -p wa -k gshadow_changes
-w /etc/sudoers -p wa -k sudoers_changes

## ---- 4. SSH 与系统安全配置 ----
-w /etc/ssh/sshd_config -p wa -k ssh_config
-w /etc/pam.d/ -p wa -k pam_config
-w /etc/login.defs -p wa -k login_defs

## ---- 5. 网络配置变化 ----
-w /etc/hosts -p wa -k network_config
-w /etc/sysconfig/network-scripts/ -p wa -k network_scripts
-w /etc/resolv.conf -p wa -k dns_changes

## ---- 6. 记录所有执行命令 ----
-a always,exit -F arch=b64 -S execve -k exec
-a always,exit -F arch=b32 -S execve -k exec

## ---- 7. root 用户活动 ----
-w /root/ -p wa -k root_activity
-w /var/log/sudo.log -p wa -k sudo_log

## ---- 8. 文件权限变更 ----
-a always,exit -F arch=b64 -S chmod,chown,fchmod,fchown,lchown -k perm_mod
-a always,exit -F arch=b32 -S chmod,chown,fchmod,fchown,lchown -k perm_mod

## ---- 9. 监控关键目录修改 ----
-w /etc/ -p wa -k etc_changes
-w /var/www/ -p wa -k web_changes
-w /home/ -p wa -k home_changes
-w /var/log/ -p wa -k log_changes
-w /opt/ -p wa -k opt_changes

## ---- 10. 账户与权限变更 ----
-w /etc/security/ -p wa -k security_config
-w /var/log/secure -p wa -k secure_log

## ---- 11. 内核参数与模块加载 ----
-w /etc/sysctl.conf -p wa -k sysctl_changes
-a always,exit -F arch=b64 -S init_module,delete_module -k kernel_module
-a always,exit -F arch=b32 -S init_module,delete_module -k kernel_module

## ---- 12. 审计系统自身配置 ----
-w /etc/audit/ -p wa -k audit_config
-w /var/log/audit/ -p wa -k audit_log

## ---- 13. 系统时间修改 ----
-a always,exit -F arch=b64 -S adjtimex,settimeofday,clock_settime -k time_change
-a always,exit -F arch=b32 -S adjtimex,settimeofday,clock_settime -k time_change
-w /etc/localtime -p wa -k time_change

## ---- 14. 账户策略文件 ----
-w /etc/login.defs -p wa -k login_defs
-w /etc/security/limits.conf -p wa -k limits_conf
-w /etc/security/pwquality.conf -p wa -k pwquality_conf

## ---- 15. 审计规则加载完毕 ----
-e 2

```

### 加载生效

```shell
sudo augenrules --load
sudo systemctl restart auditd
sudo auditctl -l  # 查看已生效规则
```

## 查看日志

```shell
tail -f /var/log/audit/audit.log # 实时查看
ausearch -k ssh_config # 根据关键字查询（例如 ssh_config 修改）
aureport -k # 格式化输出
aureport -f 
aureport -au
```

## 可选配置优化（/etc/audit/auditd.conf）

```shell
log_file = /var/log/audit/audit.log
max_log_file = 50
max_log_file_action = ROTATE
space_left_action = SYSLOG
```
