# git

## 安装git

```shell
yum info git
yum remove git
yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel
yum install  gcc perl-ExtUtils-MakeMaker
wget https://github.com/git/git/archive/v2.9.2.tar.gz #https://github.com/git/git/releases 从这里找
tar zxf git-2.9.2.tar.gz ..
cd git-2.9.2
make prefix=/usr/local/git all
make prefix=/usr/local/git install
echo "export PATH=$PATH:/usr/local/git/bin" >> /etc/bashrc
source /etc/bashrc
```

## 保存密码（慎用）

```shell
git config --global credential.helper store
```

## 设置代理proxy

```shell
git config --global http.proxy http://127.0.0.1:1080
git config --global https.proxy http://127.0.0.1:1080
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## 设置git clone以后自动把LF转化为CRLF

```shell
git config --global core.autocrlf true
```

## 去掉已追踪的文件

```shell
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```

## 推送一个版本

```shell
git tag -a v1.0-before-major-change -m "需求变更前最终版本"
git push origin v1.0-before-major-change
```
