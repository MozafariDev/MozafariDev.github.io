// Vercel Web Analytics - Script injection for static sites
(function() {
  // Initialize the analytics queue
  window.va = window.va || function() {
    (window.vaq = window.vaq || []).push(arguments);
  };
  
  // Create and inject the analytics script
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/insights/script.js';
  
  // Append the script to the document head
  if (document.head) {
    document.head.appendChild(script);
  }
})();
