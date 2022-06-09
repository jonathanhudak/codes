(self.webpackChunkhudak_codes=self.webpackChunkhudak_codes||[]).push([[25],{1390:function(t,n,e){e(5743),t.exports=function(){"use strict";var t=1e3,n=6e4,e=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},M={s:v,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var r=12*(e.year()-n.year())+(e.month()-n.month()),i=n.clone().add(r,f),s=e-i<0,u=n.clone().add(r+(s?-1:1),f);return+(-(r+(e-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",p={};p[g]=y;var D=function(t){return t instanceof _},S=function t(n,e,r){var i;if(!n)return g;if("string"==typeof n){var s=n.toLowerCase();p[s]&&(i=s),e&&(p[s]=e,i=s);var u=n.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=n.name;p[a]=n,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,n){if(D(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new _(e)},O=M;O.l=S,O.i=D,O.w=function(t,n){return w(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var _=function(){function y(t){this.$L=S(t.locale,null,!0),this.parse(t)}var v=y.prototype;return v.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(O.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return e?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return O},v.isValid=function(){return!(this.$d.toString()===l)},v.isSame=function(t,n){var e=w(t);return this.startOf(n)<=e&&e<=this.endOf(n)},v.isAfter=function(t,n){return w(t)<this.startOf(n)},v.isBefore=function(t,n){return this.endOf(n)<w(t)},v.$g=function(t,n,e){return O.u(t)?this[n]:this.set(e,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,n){var e=this,r=!!O.u(n)||n,h=O.p(t),l=function(t,n){var i=O.w(e.$u?Date.UTC(e.$y,n,t):new Date(e.$y,n,t),e);return r?i:i.endOf(a)},$=function(t,n){return O.w(e.toDate()[t].apply(e.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(n)),e)},m=this.$W,y=this.$M,v=this.$D,M="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,y):l(0,y+1);case o:var g=this.$locale().weekStart||0,p=(m<g?m+7:m)-g;return l(r?v-p:v+(6-p),y);case a:case d:return $(M+"Hours",0);case u:return $(M+"Minutes",1);case s:return $(M+"Seconds",2);case i:return $(M+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,n){var e,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(e={},e[a]=h+"Date",e[d]=h+"Date",e[f]=h+"Month",e[c]=h+"FullYear",e[u]=h+"Hours",e[s]=h+"Minutes",e[i]=h+"Seconds",e[r]=h+"Milliseconds",e)[o],$=o===a?this.$D+(n-this.$W):n;if(o===f||o===c){var m=this.clone().set(d,1);m.$d[l]($),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},v.set=function(t,n){return this.clone().$set(t,n)},v.get=function(t){return this[O.p(t)]()},v.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),m=function(t){var n=w(l);return O.w(n.date(n.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return m(1);if($===o)return m(7);var y=(d={},d[s]=n,d[u]=e,d[i]=t,d)[$]||1,v=this.$d.getTime()+r*y;return O.w(v,this)},v.subtract=function(t,n){return this.add(-1*t,n)},v.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=e.weekdays,f=e.months,h=function(t,e,i,s){return t&&(t[e]||t(n,r))||i[e].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=e.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(e.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(e.weekdaysMin,this.$W,o,2),ddd:h(e.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(t,n){return n||$[t]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,d,l){var $,m=O.p(d),y=w(r),v=(y.utcOffset()-this.utcOffset())*n,M=this-y,g=O.m(this,y);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(M-v)/6048e5,$[a]=(M-v)/864e5,$[u]=M/e,$[s]=M/n,$[i]=M/t,$)[m]||M,l?g:O.a(g)},v.daysInMonth=function(){return this.endOf(f).$D},v.$locale=function(){return p[this.$L]},v.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=S(t,n,!0);return r&&(e.$L=r),e},v.clone=function(){return O.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},y}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),w.extend=function(t,n){return t.$i||(t(n,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=D,w.unix=function(t){return w(1e3*t)},w.en=p[g],w.Ls=p,w.p={},w}()},2593:function(t,n,e){e(5743),t.exports=function(){"use strict";return function(t,n,e){t=t||{};var r=n.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(t,n,e,i){return r.fromToBase(t,n,e,i)}e.en.relativeTime=i,r.fromToBase=function(n,r,s,u,a){for(var o,f,h,c=s.$locale().relativeTime||i,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],l=d.length,$=0;$<l;$+=1){var m=d[$];m.d&&(o=u?e(n).diff(s,m.d,!0):s.diff(n,m.d,!0));var y=(t.rounding||Math.round)(Math.abs(o));if(h=o>0,y<=m.r||!m.r){y<=1&&$>0&&(m=d[$-1]);var v=c[m.l];a&&(y=a(""+y)),f="string"==typeof v?v.replace("%d",y):v(y,r,m.l,h);break}}if(r)return f;var M=h?c.future:c.past;return"function"==typeof M?M(f):M.replace("%s",f)},r.to=function(t,n){return s(t,n,this,!0)},r.from=function(t,n){return s(t,n,this)};var u=function(t){return t.$u?e.utc():e()};r.toNow=function(t){return this.to(u(this),t)},r.fromNow=function(t){return this.from(u(this),t)}}}()},5837:function(t,n,e){e(2109)({global:!0},{globalThis:e(7854)})},5743:function(t,n,e){e(5837)},25:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return f}});var r=e(7294),i=e(2593),s=e.n(i),u=e(1390),a=e.n(u);function o(t){var n=t.Element,e=void 0===n?"span":n,i=t.children;return r.createElement(e,{className:"text--secondary"},i)}function f(t){var n=t.dateTime;return r.createElement(o,null,a()().from(n,!0)," ago")}a().extend(s())}}]);
//# sourceMappingURL=25-1437d485777295ce9f3c.js.map