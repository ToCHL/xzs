(self.webpackChunkxzs_docs=self.webpackChunkxzs_docs||[]).push([[810],{5737:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-8a14f834",path:"/guide/deploy.html",title:"6. 项目部署",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"6.1 集成部署",slug:"_6-1-集成部署",children:[]},{level:3,title:"6.2 前后端分离部署",slug:"_6-2-前后端分离部署",children:[]},{level:3,title:"6.3 docker部署",slug:"_6-3-docker部署",children:[]}],filePathRelative:"guide/deploy.md",git:{updatedTime:1626165247e3,contributors:[{name:"mindskip",email:"mindskip@qq.com",commits:4}]}}},3811:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>R});var e=a(6252);const l=(0,e.uE)('<h1 id="_6-项目部署" tabindex="-1"><a class="header-anchor" href="#_6-项目部署" aria-hidden="true">#</a> 6. 项目部署</h1><h3 id="_6-1-集成部署" tabindex="-1"><a class="header-anchor" href="#_6-1-集成部署" aria-hidden="true">#</a> 6.1 集成部署</h3><ul><li>分别在\\source\\vue\\xzs-student目录和source\\vue\\xzs-admin目录，执行前端打包命令</li></ul><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npm run build\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',4),p=(0,e.Wm)("li",null,"打包后的目录为student和admin",-1),t=(0,e.Wm)("li",null,"将文件放到\\source\\xzs\\src\\main\\resources\\static下，然后将java程序打包成jar包",-1),r=(0,e.Wm)("li",null,"修改application-prod.yml中的datasource和redis地址",-1),i=(0,e.Uk)("学生端访问地址为："),o={href:"http://ip:8000/student",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("http://ip:8000/student"),u=(0,e.Uk)("管理员端访问地址为："),d={href:"http://ip:8000/admin",target:"_blank",rel:"noopener noreferrer"},m=(0,e.Uk)("http://ip:8000/admin"),k=(0,e.Wm)("li",null,"执行下列命令，运行程序",-1),h=(0,e.uE)('<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>nohup java <span class="token operator">-</span><span class="token class-name">Duser</span><span class="token punctuation">.</span>timezone<span class="token operator">=</span><span class="token class-name">Asia</span><span class="token operator">/</span><span class="token class-name">Shanghai</span> <span class="token operator">-</span>jar <span class="token operator">-</span><span class="token class-name">Dspring</span><span class="token punctuation">.</span>profiles<span class="token punctuation">.</span>active<span class="token operator">=</span>prod  xzs<span class="token operator">-</span><span class="token number">3.3</span><span class="token number">.0</span><span class="token punctuation">.</span>jar  <span class="token operator">&gt;</span> start1<span class="token punctuation">.</span>log  <span class="token number">2</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span><span class="token number">1</span> <span class="token operator">&amp;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_6-2-前后端分离部署" tabindex="-1"><a class="header-anchor" href="#_6-2-前后端分离部署" aria-hidden="true">#</a> 6.2 前后端分离部署</h3>',2),b=(0,e.Wm)("li",null,"采用前后端分离方式部署，后端启动和部署方式1一样",-1),g=(0,e.Wm)("li",null,"前端采用nginx来装载静态页面,先创建/usr/local/xzs/web/目录，然后将打包后的student、admin放到此目录下",-1),v=(0,e.Wm)("li",null,"页面访问端口为8001，注意检查防火墙端口是否打开",-1),W=(0,e.Uk)("学生端访问地址为："),x={href:"http://ip:8001/student",target:"_blank",rel:"noopener noreferrer"},f=(0,e.Uk)("http://ip:8001/student"),_=(0,e.Uk)("管理员端访问地址为："),y={href:"http://ip:8001/admin",target:"_blank",rel:"noopener noreferrer"},z=(0,e.Uk)("http://ip:8001/admin"),w=(0,e.Wm)("li",null,"nginx配置如下：",-1),U=(0,e.uE)('<div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">listen</span>      <span class="token number">8001</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">server_name</span> xzs</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n        <span class="token directive"><span class="token keyword">root</span> /usr/local/xzs/web/</span><span class="token punctuation">;</span>\n        <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token directive"><span class="token keyword">location</span> /api/</span> <span class="token punctuation">{</span>\n       <span class="token directive"><span class="token keyword">proxy_pass</span>  http://localhost:8000</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_6-3-docker部署" tabindex="-1"><a class="header-anchor" href="#_6-3-docker部署" aria-hidden="true">#</a> 6.3 docker部署</h3>',2),j=(0,e.Wm)("li",null,"准备好centos服务器",-1),E=(0,e.Wm)("li",null,"先检查服务器端口、ip转发的是否配置正确，否则无法访问到docker内部",-1),q=(0,e.Wm)("li",null,"docker内部镜像已经安装了java、mysql、redis、nginx,均已配置好，无需其他操作",-1),C=(0,e.Wm)("li",null,"执行下列docker命令，拉取镜像，启动容器",-1),D=(0,e.Uk)("学生端访问地址为："),A={href:"http://ip:8001/student",target:"_blank",rel:"noopener noreferrer"},H=(0,e.Uk)("http://ip:8001/student"),L=(0,e.Uk)("管理员端访问地址为："),N={href:"http://ip:8001/admin",target:"_blank",rel:"noopener noreferrer"},O=(0,e.Uk)("http://ip:8001/admin"),P=(0,e.uE)('<div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code>docker pull  registry.cn-hangzhou.aliyuncs.com/mindskip/xzs:v3.3.0\ndocker run -d --name xzs --privileged -it  -d -p 8001:8001 -v /etc/localtime:/etc/localtime:ro  registry.cn-hangzhou.aliyuncs.com/mindskip/xzs:v3.3.0 /usr/sbin/init\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',1),R={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[l,(0,e.Wm)("ul",null,[p,t,r,(0,e.Wm)("li",null,[i,(0,e.Wm)("a",o,[c,(0,e.Wm)(a)])]),(0,e.Wm)("li",null,[u,(0,e.Wm)("a",d,[m,(0,e.Wm)(a)])]),k]),h,(0,e.Wm)("ul",null,[b,g,v,(0,e.Wm)("li",null,[W,(0,e.Wm)("a",x,[f,(0,e.Wm)(a)])]),(0,e.Wm)("li",null,[_,(0,e.Wm)("a",y,[z,(0,e.Wm)(a)])]),w]),U,(0,e.Wm)("ul",null,[j,E,q,C,(0,e.Wm)("li",null,[D,(0,e.Wm)("a",A,[H,(0,e.Wm)(a)])]),(0,e.Wm)("li",null,[L,(0,e.Wm)("a",N,[O,(0,e.Wm)(a)])])]),P],64)}}}}]);