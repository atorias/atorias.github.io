# 人大金仓

## 文档

[人大金仓](https://help.kingbase.com.cn/v8.6.7.12/install-updata/install-windows/install-windows-3.html)

## docker 本地安装

### 下载docker镜像

<https://www.kingbase.com.cn/download.html>

### 导入镜像

```shell
docker load -i KingbaseES_V009R001C010B0004_x86_64_Docker.tar
```

### docker安装命令

```shell
docker run -tid --privileged \
-p 24321:54321 \
-v kingbase:/home/kingbase/userdata/ \
--restart=always \
-e NEED_START=yes  \
-e DB_USER=kingbase  \
-e DB_PASSWORD=123456 \
-e DB_MODE=oracle  \
--name kingbase  \
kingbase_v009r001c010b0004_single_x86:v1 /usr/sbin/init
```

### 检查安装是否正确

`sys_ctl -D /home/kingbase/userdata/data/ status`

### 检查和更新license

下载开发版授权文件
<https://www.kingbase.com.cn/download.html#authorization?authorcurrV=V9R1C10>
查看license信息

```shell

# 查看授权有效期
ksql -Ukingbase kingbase -c 'select get_license_info();' # 结果为90天
# 覆盖授权文件
docker cp ./license_4_V009R001C-开发版-365天.dat kingbase:/home/kingbase/userdata/etc/license.dat
# 变更文件权限
cd /home/kingbase/userdata/etc/
chown kingbase.kingbase /home/kingbase/userdata/etc/license.dat
chmod 644 /home/kingbase/userdata/etc/license.dat
ksql -Ukingbase kingbase -c 'select get_license_info();' # 结果为365天
```
