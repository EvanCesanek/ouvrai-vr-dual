class s{static createButton(l){const e=document.createElement("button");function a(){let t=null;async function d(n){n.addEventListener("end",r),await l.xr.setSession(n),e.textContent="EXIT VR",t=n}function r(){t.removeEventListener("end",r),e.textContent="ENTER VR",t=null}e.style.display="",e.style.cursor="pointer",e.style.left="calc(50% - 50px)",e.style.width="100px",e.textContent="ENTER VR",e.onmouseenter=function(){e.style.opacity="1.0"},e.onmouseleave=function(){e.style.opacity="0.5"},e.onclick=function(){if(t===null){const n={optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]};navigator.xr.requestSession("immersive-vr",n).then(d)}else t.end()}}function o(){e.style.display="",e.style.cursor="auto",e.style.left="calc(50% - 75px)",e.style.width="150px",e.onmouseenter=null,e.onmouseleave=null,e.onclick=null}function c(){o(),e.textContent="VR NOT SUPPORTED"}function u(t){o(),console.warn("Exception when trying to call xr.isSessionSupported",t),e.textContent="VR NOT ALLOWED"}function i(t){t.style.position="absolute",t.style.bottom="20px",t.style.padding="12px 6px",t.style.border="1px solid #fff",t.style.borderRadius="4px",t.style.background="rgba(0,0,0,0.1)",t.style.color="#fff",t.style.font="normal 13px sans-serif",t.style.textAlign="center",t.style.opacity="0.5",t.style.outline="none",t.style.zIndex="999"}if("xr"in navigator)return e.id="VRButton",e.style.display="none",i(e),navigator.xr.isSessionSupported("immersive-vr").then(function(t){t?a():c(),t&&s.xrSessionIsGranted&&e.click()}).catch(u),e;{const t=document.createElement("a");return window.isSecureContext===!1?(t.href=document.location.href.replace(/^http:/,"https:"),t.innerHTML="WEBXR NEEDS HTTPS"):(t.href="https://immersiveweb.dev/",t.innerHTML="WEBXR NOT AVAILABLE"),t.style.left="calc(50% - 90px)",t.style.width="180px",t.style.textDecoration="none",i(t),t}}static registerSessionGrantedListener(){if("xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{s.xrSessionIsGranted=!0})}}}s.xrSessionIsGranted=!1;s.registerSessionGrantedListener();export{s as VRButton};
