(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const f="modulepreload",p=function(s){return"/"+s},u={},g=function(t,n,a){let e=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");e=Promise.all(n.map(o=>{if(o=p(o),o in u)return;u[o]=!0;const l=o.endsWith(".css"),m=l?'[rel="stylesheet"]':"";if(!!a)for(let c=r.length-1;c>=0;c--){const d=r[c];if(d.href===o&&(!l||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${m}`))return;const i=document.createElement("link");if(i.rel=l?"stylesheet":f,l||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),l)return new Promise((c,d)=>{i.addEventListener("load",c),i.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return e.then(()=>t()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};function h(s,t){s.innerHTML=`
      <div class="login-box">
        <img src="https://cdn.setapp.com/blog/images/how-to-copy-paste-and-cut-on-mac-1200-628.png" alt="Logo" class="logo">
        <form id="loginForm" class="centered-form">
          <div class="input-container">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username">
          </div>
          <div class="input-container">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password">
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    `,s.querySelector("#loginForm").addEventListener("submit",t)}class y{constructor(t){this.webpage=t,this.renderLoginForm()}renderLoginForm(){h(this.webpage,this.handleLogin.bind(this))}handleLogin(t){t.preventDefault();const n=t.target.elements.username.value,a=t.target.elements.password.value;n==="admin"&&a==="password"?this.loadUserData():alert("Invalid username or password")}loadUserData(){g(()=>import("./data-LGiY2nAS.js"),__vite__mapDeps([])).then(t=>{const n=t.default;this.webpage.innerHTML=n,console.log("Data loaded successfully")}).catch(t=>{console.error("Error loading data:",t)})}}const v=document.querySelector("#app");new y(v);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
