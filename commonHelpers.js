import{a as v,S as f,i as d}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();function b(e){return`<li class="list-el">

 <a href="${e.largeImageURL}"><img src='${e.webformatURL}' alt='${e.tags}'></a>
  <div class="content">
    <div class="item"><h3>Likes</h3><p>${e.likes}</p></div>
    <div class="item"><h3>Views</h3><p>${e.views}</p></div>
    <div class="item"><h3>Comments</h3><p>${e.comments}</p></div>
    <div class="item"><h3>Downloads</h3><p>${e.downloads}</p></div>
 </div>
</li>
`}const S="https://pixabay.com/",w="api/",E="44530588-77e4763ebb7280f93ce94dd82",_=15;async function p(e,o){const r=new URLSearchParams({key:E,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}),n=`${S}${w}?${r}`,t={params:{q:e,page:o,page_size:_,per_page:15}};return console.log("shut down"),(await v.get(n,t)).data}let q=new f(".gallery a");const h=document.querySelector(".loader"),u=document.querySelector("button[type=button]");l();L();const m={formElem:document.querySelector(".js-search-form"),articleListElem:document.querySelector(".js-article-list"),btnLoadMore:document.querySelector(".js-btn-load"),loadElem:document.querySelector(".js-loader")};let a="",i=1;m.formElem.addEventListener("submit",$);async function $(e){if(e.preventDefault(),a=e.target.elements.query.value.trim(),g(),i=1,m.articleListElem.innerHTML="",!(a.trim()!=="")){l(),d.error({message:"Info Search input must be filled!"});return}const r=await p(a,i);r.total_pages,y(r.hits),l(),P(),i==r.total_pages&&d.info({title:"info",message:"Were sorry, but you've reached the end of search results."})}function A(e){return e.map(b).join("")}function y(e){const o=A(e);m.articleListElem.insertAdjacentHTML("beforeend",o),q.refresh()}function g(){h.classList.remove("visually-hidden")}function l(){h.classList.add("visually-hidden")}function P(){u.classList.remove("visually-hidden")}function L(){u.classList.add("visually-hidden")}new f(".gallery a",{captionDelay:250,captionsData:"alt"});u.addEventListener("click",async()=>{g(),i++,console.log("load++++");const e=await p(a,i);e.total_pages,y(e.hits),l(),i==e.total_pages&&(d.info({title:"info",message:"Were sorry, but you've reached the end of search results."}),L())});
//# sourceMappingURL=commonHelpers.js.map
