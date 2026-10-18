/* DealsGenie USA - optional Google Analytics 4 loader.
   GA4 Measurement ID is set below. (If it is ever reset to G-XXXXXXXXXX this file loads nothing and sends nothing.)
   Only these values are ever sent: page path (GA default), deal title, deal category, placement, ASIN and the word "amazon.com".
   No names, emails or other personal information. Skipped entirely for Do Not Track / Global Privacy Control. */
(function () {
  var GA_ID = 'G-K5P7CCXZ1D';
  var ok = /^G-[A-Z0-9]{6,}$/.test(GA_ID) && GA_ID !== 'G-XXXXXXXXXX';
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.dgTrack = function (name, params) { if (ok) gtag('event', name, params || {}); };
  if (!ok) return;
  if (navigator.doNotTrack === '1' || window.doNotTrack === '1' || navigator.globalPrivacyControl === true) { window.dgTrack = function () {}; return; }
  var s = document.createElement('script');
  s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  gtag('js', new Date());
  gtag('config', GA_ID, { allow_google_signals: false, allow_ad_personalization_signals: false });
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href*="amazon.com"]');
    if (!a) return;
    var m = a.href.match(/\/dp\/([A-Z0-9]{10})/);
    gtag('event', 'affiliate_click', {
      deal_title: a.dataset.deal || '',
      deal_category: a.dataset.cat || '',
      placement: a.dataset.pl || '',
      asin: m ? m[1] : '',
      link_domain: 'amazon.com',
      transport_type: 'beacon'
    });
  }, true);
})();
