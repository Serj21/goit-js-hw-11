import{s as l,i as c}from"./assets/vendor-8ce50246.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="42822558-20d699dce07778b8a952c17c9";function u(o){const r="https://pixabay.com/api/",s=new URLSearchParams({key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),a=`${r}?${s}`;return fetch(a).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>e.hits).catch(e=>{throw new Error("Failed to fetch images")})}const i=document.querySelector(".gallery"),d=new l(".gallery a");function m(){i.innerHTML=""}function h(o){o.forEach(r=>{const s=`
    <div class="image-card">
        <a href="${r.largeImageURL}" data-lightbox="gallery-item" data-title="${r.tags}">
            <img src="${r.webformatURL}" alt="${r.tags}">
        </a>
        <div class="image-info">
            <p class="tags">${r.tags}</p>
            <p class="likes">Likes: ${r.likes}</p>
            <p class="views">Views: ${r.views}</p>
            <p class="comments">Comments: ${r.comments}</p>
            <p class="downloads">Downloads: ${r.downloads}</p>
        </div>
    </div>
`;i.insertAdjacentHTML("beforeend",s)}),d.refresh()}const p=document.querySelector("#search-form"),g=document.querySelector("#search-input");p.addEventListener("submit",o=>{o.preventDefault();const r=g.value.trim();if(r===""){c.error({title:"Error",message:" Please enter a search term"});return}m(),u(r).then(s=>{s.length===0?c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):h(s)}).catch(s=>{c.error({title:"Error",message:"Failed to fetch images"})})});
//# sourceMappingURL=commonHelpers.js.map
