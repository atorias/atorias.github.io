import{_ as n,c as a,a as l,o as e}from"./app-Dpaj_H73.js";const i={};function c(t,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="zlib" tabindex="-1"><a class="header-anchor" href="#zlib"><span>zlib</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> <span class="token builtin class-name">cd</span> /usr/local/src/</span>
<span class="line"><span class="token function">wget</span> https://www.zlib.net/zlib-1.3.1.tar.gz</span>
<span class="line"><span class="token function">mv</span> zlib-1.3.1 zlib</span>
<span class="line"><span class="token builtin class-name">cd</span> zlib</span>
<span class="line">./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/zlib</span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-y</span> /etc/ld.so.conf.d/zlib.conf</span>
<span class="line"><span class="token function">touch</span> /etc/ld.so.conf.d/zlib.conf</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;/usr/local/zlib/lib&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/ld.so.conf.d/zlib.conf</span>
<span class="line">ldconfig <span class="token parameter variable">-v</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=n(i,[["render",c],["__file","zlib.html.vue"]]),r=JSON.parse('{"path":"/compile/zlib.html","title":"zlib","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1713431046000,"contributors":[{"name":"OldWitch","email":"demilich1990@gmail.com","commits":1,"url":"https://github.com/OldWitch"}]},"filePathRelative":"compile/zlib.md"}');export{o as comp,r as data};