import{_ as e,c as l,a,o as d}from"./app-Dpaj_H73.js";const n={};function r(s,t){return d(),l("div",null,t[0]||(t[0]=[a('<h1 id="正则" tabindex="-1"><a class="header-anchor" href="#正则"><span>正则</span></a></h1><h2 id="cheat" tabindex="-1"><a class="header-anchor" href="#cheat"><span>cheat</span></a></h2><table><thead><tr><th style="text-align:left;">\\d</th><th style="text-align:left;">[0-9]</th></tr></thead><tbody><tr><td style="text-align:left;">\\D</td><td style="text-align:left;">[^\\d]</td></tr><tr><td style="text-align:left;">\\w</td><td style="text-align:left;">[a-zA-Z0-9_]</td></tr><tr><td style="text-align:left;">\\W</td><td style="text-align:left;">[^\\w]</td></tr><tr><td style="text-align:left;">\\s</td><td style="text-align:left;">[ \\f\\n\\r\\t\\v]</td></tr><tr><td style="text-align:left;">\\S</td><td style="text-align:left;">[^\\s]</td></tr><tr><td style="text-align:left;">.</td><td style="text-align:left;">[^\\n]</td></tr><tr><td style="text-align:left;">*</td><td style="text-align:left;">&gt;=0个</td></tr><tr><td style="text-align:left;">?</td><td style="text-align:left;">0个或1个</td></tr><tr><td style="text-align:left;">+</td><td style="text-align:left;">&gt;=1</td></tr><tr><td style="text-align:left;">^</td><td style="text-align:left;">必须以xx开头 例如：^\\d必须以数字开头</td></tr><tr><td style="text-align:left;">|</td><td style="text-align:left;">或者 (a|b)</td></tr><tr><td style="text-align:left;">$</td><td style="text-align:left;">必须以xx结束 \\d$</td></tr><tr><td style="text-align:left;">[]</td><td style="text-align:left;">[abc123] 包含里面任意一个</td></tr><tr><td style="text-align:left;">[^]</td><td style="text-align:left;">[^abc123] 不包含里面任意一个</td></tr><tr><td style="text-align:left;">{n}</td><td style="text-align:left;">n个</td></tr><tr><td style="text-align:left;">{---}</td><td style="text-align:left;">&gt;----------------------------------------------------------个</td></tr><tr><td style="text-align:left;">{n,m}</td><td style="text-align:left;">n&gt;= x &gt;= m</td></tr><tr><td style="text-align:left;">.*?</td><td style="text-align:left;">非贪婪模式匹配尽可能少的字符 <strong>aabab</strong> 匹配到<strong>aab</strong>和<strong>ab</strong></td></tr><tr><td style="text-align:left;">.+?</td><td style="text-align:left;">a.+?b来匹配ababccaab 结果是 abab aab</td></tr><tr><td style="text-align:left;">(?!\\d)</td><td style="text-align:left;">非字符串</td></tr></tbody></table><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>example</span></a></h2><table><thead><tr><th style="text-align:left;">非零开头的最多带两位小数的数字</th><th style="text-align:left;">^([1-9][0-9]*)+(.[0-9]{1,2})?$</th></tr></thead><tbody><tr><td style="text-align:left;">带1-2位小数的正数或负数</td><td style="text-align:left;">^(-)?\\d+(.\\d{1,2})$</td></tr><tr><td style="text-align:left;">中文</td><td style="text-align:left;">^[\\u4e00-\\u9fa5]{1,5}$</td></tr></tbody></table><h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档"><span>文档</span></a></h2><table><thead><tr><th style="text-align:left;">序号</th><th style="text-align:left;">链接</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:left;"><a href="https://deerchao.cn/tutorials/regex/regex.htm" target="_blank" rel="noopener noreferrer">正则表达式30分钟入门教程</a></td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;"><a href="https://www.jb51.net/tools/zhengze.htm" target="_blank" rel="noopener noreferrer">正则表达式在线测试</a></td></tr></tbody></table>',7)]))}const g=e(n,[["render",r],["__file","regex.html.vue"]]),x=JSON.parse('{"path":"/foundation/regex.html","title":"正则","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"cheat","slug":"cheat","link":"#cheat","children":[]},{"level":2,"title":"example","slug":"example","link":"#example","children":[]},{"level":2,"title":"文档","slug":"文档","link":"#文档","children":[]}],"git":{"updatedTime":1713431046000,"contributors":[{"name":"OldWitch","email":"demilich1990@gmail.com","commits":1,"url":"https://github.com/OldWitch"}]},"filePathRelative":"foundation/regex.md"}');export{g as comp,x as data};