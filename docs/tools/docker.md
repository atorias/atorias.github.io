# docker

## redis7.2

使用 [配置文件](./redis.conf)

```docker
docker run -p 6379:6379 --name redis72 
-v C:\Users\Administrator\Desktop\docker_data\redis72\redis.conf:/etc/redis/redis.conf 
-v C:\Users\Administrator\Desktop\docker_data\redis72\data:/data:rw 
--privileged=true 
-d redis redis-server /etc/redis/redis.conf 
--appendonly yes
```

## mysql

```docker
docker run -p 3306:3306 --name mysql8.3.0 
-v C:\Users\Administrator\Desktop\docker_data\mysql8.3.0/mysql-files:/var/lib/mysql-files 
-v C:\Users\Administrator\Desktop\docker_data\mysql8.3.0/conf:/etc/mysql/conf.d 
-v C:\Users\Administrator\Desktop\docker_data\mysql8.3.0/logs:/var/log/mysql 
-v C:\Users\Administrator\Desktop\docker_data\mysql8.3.0/data:/var/lib/mysql 
-e MYSQL_ROOT_PASSWORD=root 
-d mysql:latest
```

## ubuntu 20.04

image `ecpe4s/ubuntu20.04:latest`

```docker
docker  run -it  --name ubuntu20.04 ecpe4s/ubuntu20.04:latest
```

## centos

```shell
# 创建网络
docker network create atlas
# 创建容器
docker run --privileged=true -it --name xxx -v xxx:xxx --network atlas imagename:tag
# 提交容器为image
docker commit container_id imagename:tag
```

## docker-compose.yaml

```shell
version: "3.8"
# 定义服务ubuntu,mysql,redis
# php-fpm和php-cli可以选着1个安装，看项目，2个一起安装也可以

services:

  redis:
    image: redis:7.2.4
    container_name: lnmp_redis
    build: ./redis
    volumes:
      - ./redis/redis.conf/:/etc/redis.conf:ro
      - ./redis/data:/usr/local/redis/data
      - ./redis/redis.log:/usr/local/redis/redis.log
    environment:
      - TZ=Asia/Shanghai
    ports:
      - "6379:6379"
    command: [ "redis-server", "/etc/redis.conf" ]

  mysql:
    image: mysql:8.0
    container_name: lnmp_mysql
    volumes:
      - ./mysql/conf.d:/etc/mysql/my.cnf:ro
      - ./mysql/data:/var/lib/mysql
      - ./mysql/log:/data/mysql/logs
    environment:
      - MYSQL_ROOT_PASSWORD=root
      - TZ=Asia/Shanghai
#    platform: linux/x86_64 #针对mac M1芯片
    ports:
      - "3306:3306"


networks:
  frontend:
  backend:

```
