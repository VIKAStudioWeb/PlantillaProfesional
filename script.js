/* PROFESIONAL v2 — menú lateral móvil, resaltado de sección activa y formulario -> WhatsApp */
document.addEventListener('DOMContentLoaded',function(){
  var WHATSAPP='5491100000000';
  var side=document.getElementById('side'),burger=document.getElementById('burger');
  burger.addEventListener('click',function(){var o=side.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
  var links=document.querySelectorAll('.side nav a');
  links.forEach(function(a){a.addEventListener('click',function(){side.classList.remove('open');burger.setAttribute('aria-expanded','false')})});

  /* Resalta en la barra lateral la sección que se está viendo */
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){
      links.forEach(function(l){l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-40% 0px -55% 0px'});
    document.querySelectorAll('main [id]').forEach(function(s){io.observe(s)});
  }

  var f=document.getElementById('form'),st=document.getElementById('status');
  f.addEventListener('submit',function(e){e.preventDefault();
    var n=f.nombre.value.trim(),em=f.email.value.trim(),m=f.modalidad.value,t=f.msg.value.trim();
    if(!n||!em||!m||!t){st.textContent='Completá todos los campos para continuar.';st.className='status show';return}
    var txt='Hola! Soy '+n+' ('+em+'). Modalidad preferida: '+m+'. '+t;
    st.textContent='Te redirigimos a WhatsApp…';st.className='status show';
    window.open('https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(txt),'_blank');f.reset()});
});
