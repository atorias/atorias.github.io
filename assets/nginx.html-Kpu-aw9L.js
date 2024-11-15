import{_ as s,c as a,d as e,o as i}from"./app-V1Yv81ZL.js";const p={};function l(t,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>nginx</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> /usr/local/src</span>
<span class="line"><span class="token function">wget</span> https://nginx.org/download/nginx-1.25.4.tar.gz</span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> nginx-1.25.4.tar.gz</span>
<span class="line"><span class="token function">mv</span> nginx-1.25.4 nginx</span>
<span class="line"><span class="token builtin class-name">cd</span> nginx</span>
<span class="line">./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx --pid-path<span class="token operator">=</span>/var/run/nginx/nginx.pid <span class="token punctuation">\\</span></span>
<span class="line">    --lock-path<span class="token operator">=</span>/var/lock/nginx.lock <span class="token punctuation">\\</span></span>
<span class="line">    --error-log-path<span class="token operator">=</span>/var/log/nginx/error.log <span class="token punctuation">\\</span></span>
<span class="line">    --http-log-path<span class="token operator">=</span>/var/log/nginx/access.log <span class="token punctuation">\\</span></span>
<span class="line">    --with-http_gzip_static_module <span class="token punctuation">\\</span></span>
<span class="line">    --http-client-body-temp-path<span class="token operator">=</span>/var/temp/nginx/client <span class="token punctuation">\\</span></span>
<span class="line">    --http-proxy-temp-path<span class="token operator">=</span>/var/temp/nginx/proxy <span class="token punctuation">\\</span></span>
<span class="line">    --http-fastcgi-temp-path<span class="token operator">=</span>/var/temp/nginx/fastcgi <span class="token punctuation">\\</span></span>
<span class="line">    --http-uwsgi-temp-path<span class="token operator">=</span>/var/temp/nginx/uwsgi <span class="token punctuation">\\</span></span>
<span class="line">    --http-scgi-temp-path<span class="token operator">=</span>/var/temp/nginx/scgi <span class="token punctuation">\\</span></span>
<span class="line">    --with-http_stub_status_module <span class="token punctuation">\\</span></span>
<span class="line">    --with-http_ssl_module <span class="token punctuation">\\</span></span>
<span class="line">    --with-openssl<span class="token operator">=</span>/usr/local/src/openssl</span>
<span class="line"></span>
<span class="line"><span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span></span>
<span class="line"><span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/nginx/sbin/nginx /usr/bin/nginx</span>
<span class="line">nginx <span class="token parameter variable">-V</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=s(p,[["render",l],["__file","nginx.html.vue"]]),r=JSON.parse('{"path":"/compile/nginx.html","title":"nginx","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1731657392000,"contributors":[{"name":"OldWitch","email":"demilich1990@gmail.com","commits":2,"url":"https://github.com/OldWitch"}]},"filePathRelative":"compile/nginx.md"}');export{o as comp,r as data};
