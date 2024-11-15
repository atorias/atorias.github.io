# php

## PHP安装

```shell
    1.  安装epel的yum源 
        yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
    2.  安装Remi的yum源
        yum install -y https://rpms.remirepo.net/enterprise/remi-release-7.rpm
    3.  安装yum-utils工具
        yum install -y yum-utils
    4.  先禁用所有php版本的yum下载源
        yum-config-manager --disable 'remi-php*'
    5.  启用php7.4源
        yum-config-manager --enable remi-php74
    6.  安装php 7.4
        yum install -y php php-devel
    7.  安装常用php扩展
        yum install php  php-cli php-fpm php-mysqlnd php-zip php-devel php-gd php-mcrypt php-mbstring php-curl php-xml php-pear php-bcmath php-json php-redis
```

## php-fpm.conf

```shell
#php-fpm.conf
    #第二部分，全局配置
    [global]
    ;pid = /var/log/php-fpm/php-fpm.pid #pid文件存放的位置
    ;error_log = /var/log/php-fpm/php-fpm.log #错误日志存放的位置
    ;log_level = error #日志级别, alert, error, warning, notice, debug
    rlimit_files = 65535 #php-fpm进程能打开的文件数
    events.mechanism = epoll #使用epoll事件模型处理请求

    # php-fpm.d/www.conf 错误日志
    php_flag[display_errors] = off
    ;php_admin_value[error_log] = /soft/log/php/php-www_error.log
    php_admin_flag[log_errors] = on

    # 将查询超过5s的连接记录至慢查询日志中
    request_slowlog_timeout = 5s
    slowlog = /var/log/php/slow.log
```

## php.ini

```shell
 #/etc/php.ini优化配置如下

post_max_size = 300M
upload_max_filesize = 300M
max_file_uploads = 20
memory_limit = 128M
date.timezone = Asia/Shanghai

expose_php = Off
display_errors = Off
error_reporting = E_ALL
log_errors = On
error_log = /var/log/php_error.log
```

## compose

### 安装

`官网:` <https://getcomposer.org/>

### 镜像管理

```shell

# 当前项目生效
composer config repo.packagist composer https://mirrors.aliyun.com/composer/

# 取消当前项目配置
composer config --unset repos.packagist

# 全局生效
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/

# 取消全局配置
composer config -g --unset repos.packagist

```

### 2. CRM镜像管理工具

`文档地址:` <https://github.com/slince/composer-registry-manager/blob/master/README-zh_CN.md>

```bash
# 安装
composer global require slince/composer-registry-manager

# 选择镜像
composer repo:ls

-- --------------- ------------------------------------------------
     composer        https://packagist.org
     phpcomposer     https://packagist.phpcomposer.com
     aliyun          https://mirrors.aliyun.com/composer
     tencent         https://mirrors.cloud.tencent.com/composer
     huawei          https://mirrors.huaweicloud.com/repository/php
     laravel-china   https://packagist.laravel-china.org
     cnpkg           https://php.cnpkg.org
     sjtug           https://packagist.mirrors.sjtug.sjtu.edu.cn
-- --------------- ------------------------------------------------
# 使用镜像
composer repo:use aliyun
```

## laravel

### service

```shell

    php artisan make:command AddService

 
 app\Console\Commands\AddService.php
  <?php

  namespace App\Console\Commands; 

  use Illuminate\Console\GeneratorCommand; 

  class AddService extends GeneratorCommand
  {
   /**
    - 控制台命令名称
    *

    - @var string
    */

   protected $name = 'make:service'; 
   /**
    - 控制台命令描述
    *

    - @var string
    */

   protected $description = 'Create a new service class'; 
   /**
    - 生成类的类型
    *

    - @var string
    */

   protected $type = 'Services'; 
   /**
    - 获取生成器的存根文件
    *

    - @return string
    */

   protected function getStub()
   {

    return __DIR__.'/stubs/service.stub';

   }

   /**
    - 获取类的默认命名空间
    *

    - @param string $rootNamespace
    - @return string
    */

   protected function getDefaultNamespace($rootNamespace)
   {

    return $rootNamespace.'\Services';

   }
  }
 
 创建 app/Console/Commands/Stubs/service.stub
  <?php

  namespace DummyNamespace; 

  class DummyClass
  {

  }
  
 app/Console/Kernel.php
  protected $commands = [] 
 
 protected $commands = [
   Commands\AddService::class
 ]; 
  

php artisan make:service MusicService
```

## laravel-eloquent-orm

### 一对一: 一个人只有一个身份证，一个身份证只属于一个人

```php

// App\User
public function identity_card(){
    return $this->hasOne('App\IdentityCard');
}

// App\IdentityCard
public function user(){
    return $this->belongsTo('App\User');
}
```

### 一对多：一篇文章可以有多个评论，一个评论只属于一篇文章

```php
// App\Article
public function comments(){
    return $this->hasMany('App\Comment');
}
 
// App\Comment
public function article(){
    return $this->belongsTo('App\Article');
}
```

### 多对多：一个人可以扮演多个角色，一个角色可以被多个人扮演

```php
// App\Role
public function users(){
    return $this->belongsToMany('App\User');
}

// App\User
public function roles(){
    return $this->belongsToMany('App\Role');
}
```

### 远程一对一：一个帖子属于一个作者，该作者就读一所学校。帖子可通过作者访问作者所在的学校

```php
# App\Thread
public function authorSchool()
{
    return $this->hasOneThrough('App\School', 'App\Author');
}
```

### 远程一对多：一个帖子属于一个作者，该作者写过很多书。帖子可通过作者访问作者写过的所有书籍

```php
# App\Thread
public function authorBook()
{
    return $this->hasManyThrough('App\Book', 'App\Author');
}
```

### 多态一对一：运营人员就一个图片，发布一篇博客或者一篇文章

```php
# App\Image
public function imageable()
{
    return $this->morphTo();
}

# App\Blog
public function image()
{
    return $this->morphOne('App\Image', 'imageable');
}

# App\Article
public function image()
{
    return $this->morphOne('App\Image', 'imageable');
}
```

### 多态一对多：文章可以接受多条评论，视频也可以接受多条评论

```php
# App\Comment
public function commentable()
{
    return $this->morphTo();
}

# App\Video
public function comments()
{
    return $this->morphMany('App\Comment', 'commentable');
}

# App\Article
public function comments()
{
    return $this->morphMany('App\Comment', 'commentable');
}
```

### 多态多对多：可以给一篇文章打上多个标签，也可以给一个视频打上多个标签。并且一个标签可以贴在多个文章上面。一个标签也可以贴在多个视频上

```php
# App\Tag
public function articles()
{
    return $this->morphedByMany('App\Article', 'taggable');
}

public function videos()
{
    return $this->morphedByMany('App\Video', 'taggable');
}

# App\Article
public function tags()
{
    return $this->morphToMany('App\Tag', 'taggable');
}

# App\Video
public function tags()
{
    return $this->morphToMany('App\Tag', 'taggable');
}
```

```php
关系 正向 反向
一对一 hasOne belongsTo
一对多 hasMany belongsTo
多对多 belongsToMany belongsToMany
远程一对一 hasOneThrough —
远程一对多 hasManyThrough —
多态一对一 morphTo morphOne
多态一对多 morphTo morphMany
多态多对多 morphedByMany morphToMany
一对一、一对多
```

## 增

```php
$comment = new App\Comment(['message' => 'A new comment.']);
$post = App\Post::find(1);
$post->comments()->save($comment);
// insert into `comments` (`message`, `post_id`, `updated_at`, `created_at`) values ('A new comment.', 1, '2019-09-19 03:59:48', '2019-09-19 03:59:48')

$post->comments()->saveMany([
    new App\Comment(['message' => 'A new comment.']),
    new App\Comment(['message' => 'Another comment.']),
]);

$comment = $post->comments()->create([
    'message' => 'A new comment.',
]);
// insert into `comments` (`message`, `post_id`, `updated_at`, `created_at`) values (A new comment., 1, 2019-09-19 04:07:43, 2019-09-19 04:07:43)
// 还可以使用 firstOrNew, firstOrCreate 和 updateOrCreate

$post->comments()->createMany([
    [
        'message' => 'A new comment.',
    ],
    [
        'message' => 'Another new comment.',
    ],
]);
```

## 改

```php
$post = App\Post::find(1);

$post->comments[0]->message = 'Message';
$post->comments[0]->name = 'Author Name';
$post->push();
// update `comments` set `message` = Message, `name` = Author Name, `comments`.`updated_at` = 2019-09-19 04:06:09 where `id` = 1
```

## belongsTo 建立模型关系

```php
$user = App\User::find(10);
$comment =  App\Comment::find(1);
$comment->user()->associate($user);
$comment->save();
```

## 删除模型关系

```php
$comment->account()->dissociate();
$comment->save();
```

## 默认模型

```php

# belongsTo, hasOne, hasOneThrough, 和 morphOne

public function user()
{

    return $this->belongsTo('App\User')->withDefault();

}

return $this->belongsTo('App\User')->withDefault([

    'name' => 'Guest Author',

]); 

return $this->belongsTo('App\User')->withDefault(function ($user, $post) {

    $user->name = 'Guest Author';

}); 

```

belongsTo 或者 belongsToMany
当 Comment 模型被更新时，您要自动「触发」父级 Article 模型的 updated_at 时间戳的更新

``` php
protected $touches = ['article'];
```
