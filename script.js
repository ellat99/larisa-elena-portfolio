// Smooth scroll for menu links + current year in footer
document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener('click',function(e){
    var id=a.getAttribute('href');
    if(id.length>1){var el=document.querySelector(id);if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}}
  });
});
document.querySelectorAll('footer p').forEach(function(p){
  p.innerHTML=p.innerHTML.replace(/©\s*\d{4}/,'© '+new Date().getFullYear());
});

// Show more / Show less pentru proiecte
(function () {
  var btn = document.getElementById("show-more");
  if (!btn) return;
  var label = Array.prototype.find.call(btn.childNodes, function (n) { return n.nodeType === 3; });
  var icon = btn.querySelector("svg");
  var open = false;
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    open = !open;
    document.querySelectorAll(".extra-project").forEach(function (el) { el.hidden = !open; });
    label.textContent = open ? "Show less" : "Show more";
    if (icon) icon.style.transform = open ? "rotate(180deg)" : "";
  }, true);
})();
