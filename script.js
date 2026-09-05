const menu=document.querySelector('.menu-btn'), mobile=document.querySelector('.mobile-nav');
menu?.addEventListener('click',()=>mobile.classList.toggle('open'));
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));

// Keep the visitor's email available as the reply-to address for Formspree.
const form=document.getElementById('contactForm');
const emailField=form?.querySelector('input[name="email"]');
const replyField=form?.querySelector('input[name="_replyto"]');
emailField?.addEventListener('input',()=>{if(replyField) replyField.value=emailField.value;});
