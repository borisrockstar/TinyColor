// TinyColor v0.9.12
// https://github.com/bgrins/TinyColor
// 2012-12-19, Brian Grinstead, MIT License

(function(e){function f(e,t){e=e?e:"";if(typeof e=="object"&&e.hasOwnProperty("_tc_id"))return e;var n=l(e),i=n.r,o=n.g,u=n.b,a=n.a,c=s(100*a)/100,p=n.format;return i<1&&(i=s(i)),o<1&&(o=s(o)),u<1&&(u=s(u)),{ok:n.ok,format:p,_tc_id:r++,alpha:a,toHsv:function(){var e=d(i,o,u);return{h:e.h*360,s:e.s,v:e.v,a:a}},toHsvString:function(){var e=d(i,o,u),t=s(e.h*360),n=s(e.s*100),r=s(e.v*100);return a==1?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+c+")"},toHsl:function(){var e=h(i,o,u);return{h:e.h*360,s:e.s,l:e.l,a:a}},toHslString:function(){var e=h(i,o,u),t=s(e.h*360),n=s(e.s*100),r=s(e.l*100);return a==1?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+c+")"},toHex:function(){return m(i,o,u)},toHexString:function(){return"#"+m(i,o,u)},toRgb:function(){return{r:s(i),g:s(o),b:s(u),a:a}},toRgbString:function(){return a==1?"rgb("+s(i)+", "+s(o)+", "+s(u)+")":"rgba("+s(i)+", "+s(o)+", "+s(u)+", "+c+")"},toPercentageRgb:function(){return{r:s(w(i,255)*100)+"%",g:s(w(o,255)*100)+"%",b:s(w(u,255)*100)+"%",a:a}},toPercentageRgbString:function(){return a==1?"rgb("+s(w(i,255)*100)+"%, "+s(w(o,255)*100)+"%, "+s(w(u,255)*100)+"%)":"rgba("+s(w(i,255)*100)+"%, "+s(w(o,255)*100)+"%, "+s(w(u,255)*100)+"%, "+c+")"},toName:function(){return y[m(i,o,u)]||!1},toFilter:function(){var e=m(i,o,u),n=e,r=Math.round(parseFloat(a)*255).toString(16),s=r,l=t&&t.gradientType?"GradientType = 1, ":"";if(secondColor){var c=f(secondColor);n=c.toHex(),s=Math.round(parseFloat(c.alpha)*255).toString(16)}return"progid:DXImageTransform.Microsoft.gradient("+l+"startColorstr=#"+N(r)+e+",endColorstr=#"+N(s)+n+")"},toString:function(e){e=e||this.format;var t=!1;return e==="rgb"&&(t=this.toRgbString()),e==="prgb"&&(t=this.toPercentageRgbString()),e==="hex"&&(t=this.toHexString()),e==="name"&&(t=this.toName()),e==="hsl"&&(t=this.toHslString()),e==="hsv"&&(t=this.toHsvString()),t||this.toHexString()}}}function l(e){var t={r:255,g:255,b:255},n=1,r=!1,i=!1;typeof e=="string"&&(e=L(e)),typeof e=="object"&&(e.hasOwnProperty("r")&&e.hasOwnProperty("g")&&e.hasOwnProperty("b")?(t=c(e.r,e.g,e.b),r=!0,i=String(e.r).substr(-1)==="%"?"prgb":"rgb"):e.hasOwnProperty("h")&&e.hasOwnProperty("s")&&e.hasOwnProperty("v")?(e.s=C(e.s),e.v=C(e.v),t=v(e.h,e.s,e.v),r=!0,i="hsv"):e.hasOwnProperty("h")&&e.hasOwnProperty("s")&&e.hasOwnProperty("l")&&(e.s=C(e.s),e.l=C(e.l),t=p(e.h,e.s,e.l),r=!0,i="hsl"),e.hasOwnProperty("a")&&(n=e.a)),n=parseFloat(n);if(isNaN(n)||n<0||n>1)n=1;return{ok:r,format:e.format||i,r:o(255,u(t.r,0)),g:o(255,u(t.g,0)),b:o(255,u(t.b,0)),a:n}}function c(e,t,n){return{r:w(e,255)*255,g:w(t,255)*255,b:w(n,255)*255}}function h(e,t,n){e=w(e,255),t=w(t,255),n=w(n,255);var r=u(e,t,n),i=o(e,t,n),s,a,f=(r+i)/2;if(r==i)s=a=0;else{var l=r-i;a=f>.5?l/(2-r-i):l/(r+i);switch(r){case e:s=(t-n)/l+(t<n?6:0);break;case t:s=(n-e)/l+2;break;case n:s=(e-t)/l+4}s/=6}return{h:s,s:a,l:f}}function p(e,t,n){function o(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}var r,i,s;e=w(e,360),t=w(t,100),n=w(n,100);if(t===0)r=i=s=n;else{var u=n<.5?n*(1+t):n+t-n*t,a=2*n-u;r=o(a,u,e+1/3),i=o(a,u,e),s=o(a,u,e-1/3)}return{r:r*255,g:i*255,b:s*255}}function d(e,t,n){e=w(e,255),t=w(t,255),n=w(n,255);var r=u(e,t,n),i=o(e,t,n),s,a,f=r,l=r-i;a=r===0?0:l/r;if(r==i)s=0;else{switch(r){case e:s=(t-n)/l+(t<n?6:0);break;case t:s=(n-e)/l+2;break;case n:s=(e-t)/l+4}s/=6}return{h:s,s:a,v:f}}function v(e,t,n){e=w(e,360)*6,t=w(t,100),n=w(n,100);var r=i.floor(e),s=e-r,o=n*(1-t),u=n*(1-s*t),a=n*(1-(1-s)*t),f=r%6,l=[n,u,o,o,a,n][f],c=[a,n,n,u,o,o][f],h=[o,o,a,n,n,u][f];return{r:l*255,g:c*255,b:h*255}}function m(e,t,n){var r=[N(s(e).toString(16)),N(s(t).toString(16)),N(s(n).toString(16))];return r[0][0]==r[0][1]&&r[1][0]==r[1][1]&&r[2][0]==r[2][1]?r[0][0]+r[1][0]+r[2][0]:r.join("")}function b(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}function w(e,t){x(e)&&(e="100%");var n=T(e);return e=o(t,u(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),i.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function E(e){return o(1,u(0,e))}function S(e){return parseInt(e,16)}function x(e){return typeof e=="string"&&e.indexOf(".")!=-1&&parseFloat(e)===1}function T(e){return typeof e=="string"&&e.indexOf("%")!=-1}function N(e){return e.length==1?"0"+e:""+e}function C(e){return e<=1&&(e=e*100+"%"),e}function L(e){e=e.replace(t,"").replace(n,"").toLowerCase();var r=!1;if(g[e])e=g[e],r=!0;else if(e=="transparent")return{r:0,g:0,b:0,a:0};var i;return(i=k.rgb.exec(e))?{r:i[1],g:i[2],b:i[3]}:(i=k.rgba.exec(e))?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=k.hsl.exec(e))?{h:i[1],s:i[2],l:i[3]}:(i=k.hsla.exec(e))?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=k.hsv.exec(e))?{h:i[1],s:i[2],v:i[3]}:(i=k.hex6.exec(e))?{r:S(i[1]),g:S(i[2]),b:S(i[3]),format:r?"name":"hex"}:(i=k.hex3.exec(e))?{r:S(i[1]+""+i[1]),g:S(i[2]+""+i[2]),b:S(i[3]+""+i[3]),format:r?"name":"hex"}:!1}var t=/^[\s,#]+/,n=/\s+$/,r=0,i=Math,s=i.round,o=i.min,u=i.max,a=i.random;f.fromRatio=function(e){if(typeof e=="object"){var t={};for(var n in e)t[n]=C(e[n]);e=t}return f(e)},f.equals=function(e,t){return!e||!t?!1:f(e).toRgbString()==f(t).toRgbString()},f.random=function(){return f.fromRatio({r:a(),g:a(),b:a()})},f.desaturate=function(e,t){var n=f(e).toHsl();return n.s-=(t||10)/100,n.s=E(n.s),f(n)},f.saturate=function(e,t){var n=f(e).toHsl();return n.s+=(t||10)/100,n.s=E(n.s),f(n)},f.greyscale=function(e){return f.desaturate(e,100)},f.lighten=function(e,t){var n=f(e).toHsl();return n.l+=(t||10)/100,n.l=E(n.l),f(n)},f.darken=function(e,t){var n=f(e).toHsl();return n.l-=(t||10)/100,n.l=E(n.l),f(n)},f.complement=function(e){var t=f(e).toHsl();return t.h=(t.h+180)%360,f(t)},f.triad=function(e){var t=f(e).toHsl(),n=t.h;return[f(e),f({h:(n+120)%360,s:t.s,l:t.l}),f({h:(n+240)%360,s:t.s,l:t.l})]},f.tetrad=function(e){var t=f(e).toHsl(),n=t.h;return[f(e),f({h:(n+90)%360,s:t.s,l:t.l}),f({h:(n+180)%360,s:t.s,l:t.l}),f({h:(n+270)%360,s:t.s,l:t.l})]},f.splitcomplement=function(e){var t=f(e).toHsl(),n=t.h;return[f(e),f({h:(n+72)%360,s:t.s,l:t.l}),f({h:(n+216)%360,s:t.s,l:t.l})]},f.analogous=function(e,t,n){t=t||6,n=n||30;var r=f(e).toHsl(),i=360/n,s=[f(e)];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,s.push(f(r));return s},f.monochromatic=function(e,t){t=t||6;var n=f(e).toHsv(),r=n.h,i=n.s,s=n.v,o=[],u=1/t;while(t--)o.push(f({h:r,s:i,v:s})),s=(s+u)%1;return o},f.readable=function(e,t){var n=f(e).toRgb(),r=f(t).toRgb();return(r.r-n.r)*(r.r-n.r)+(r.g-n.g)*(r.g-n.g)+(r.b-n.b)*(r.b-n.b)>10404};var g=f.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},y=f.hexNames=b(g),k=function(){var e="[-\\+]?\\d+%?",t="[-\\+]?\\d*\\.\\d+%?",n="(?:"+t+")|(?:"+e+")",r="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?",i="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?";return{rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+i),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+i),hsv:new RegExp("hsv"+r),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();typeof module!="undefined"&&module.exports?module.exports=f:e.tinycolor=f})(this);