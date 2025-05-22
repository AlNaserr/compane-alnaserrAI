// تفعيل قائمة التنقل في الجوال
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// تفعيل تنشيط رابط القائمة عند التمرير
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});
/*
// نموذج تواصل بسيط - يعرض رسالة تأكيد بدون إرسال فعلي
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name && email && message) {
        formMessage.textContent = 'تم إرسال رسالتك بنجاح. شكراً لتواصلك معنا!';
        form.reset();
    } else {
        formMessage.textContent = 'يرجى تعبئة جميع الحقول.';
    }
});*/// 1. تحميل مكتبة EmailJS (لو ما أضفتها من قبل)

  // تفعيل مكتبة EmailJS
 /* (function () {
    emailjs.init(LrIEYaGagWxoKA-SV); // ← استبدل بـ public key من EmailJS
  })();

  // التعامل مع النموذج
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // إرسال البيانات عبر EmailJS
    emailjs.sendForm(Naser123456qwer,template_sgmnvp5 , this)
      .then(function () {
        document.getElementById("form-message").innerText = "تم الإرسال بنجاح!";
        document.getElementById("form-message").style.color = "green";
        document.getElementById("contact-form").reset();
      }, function (error) {
        document.getElementById("form-message").innerText = "فشل في الإرسال، جرب مرة ثانية.";
        document.getElementById("form-message").style.color = "red";
        console.error("EmailJS Error:", error);
      });

*/


  // تحميل مكتبة EmailJS
const script = document.createElement("script");
script.src = "https://cdn.emailjs.com/dist/email.min.js";
script.onload = () => {
  emailjs.init(LrIEYaGagWxoKA-SV); // حط مفتاحك هنا
};
document.head.appendChild(script);

// لما تجهز الصفحة
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById(contact-form);

  //form.addEventListener("submit", function (e) {
   // e.preventDefault(); // <<< هذا يمنع تنشيط الصفحة

    // الإرسال عبر EmailJS
     emailjs.sendForm(Naser123456qwer,template_sgmnvp5 , this)
      .then(function () {
        document.getElementById("form-message").innerText = "تم الإرسال بنجاح!";
        document.getElementById("form-message").style.color = "green";
        document.getElementById("contact-form").reset();
      }, function (error) {
        document.getElementById("form-message").innerText = "فشل في الإرسال، جرب مرة ثانية.";
        document.getElementById("form-message").style.color = "red";
        console.error("EmailJS Error:", error);
      })
       })