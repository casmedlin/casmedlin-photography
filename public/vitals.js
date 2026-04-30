(function() {
  'use strict';
  
  if (!('PerformanceObserver' in window) || !('sendBeacon' in navigator)) return;
  
  const reportUrl = 'https://www.google-analytics.com/mp/collect?measurement_id=G-5LHBPEXY32&api_secret=YOUR_API_SECRET';
  const vitals = {};
  
  function sendToAnalytics(metric) {
    if (vitals[metric.name]) return;
    vitals[metric.name] = true;
    
    const body = JSON.stringify({
      client_id: Date.now().toString(),
      events: [{
        name: metric.name,
        params: {
          value: Math.round(metric.value * 100) / 100,
          metric_id: metric.id,
          navigation_type: metric.navigationType || 'navigate'
        }
      }]
    });
    
    if (navigator.sendBeacon) {
      navigator.sendBeacon(reportUrl, body);
    }
  }
  
  function measureLCP() {
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        sendToAnalytics({
          name: 'LCP',
          value: entry.startTime,
          id: entry.id,
          navigationType: entry.navigationType
        });
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });
  }
  
  function measureFID() {
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        sendToAnalytics({
          name: 'FID',
          value: entry.processingStart - entry.startTime,
          id: entry.id,
          navigationType: entry.navigationType
        });
      }
    }).observe({ type: 'first-input', buffered: true });
  }
  
  function measureCLS() {
    let clsValue = 0;
    let clsEntries = [];
    
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          clsEntries.push(entry);
        }
      }
      sendToAnalytics({
        name: 'CLS',
        value: clsValue,
        id: 'cls-' + Date.now(),
        navigationType: 'navigate'
      });
    }).observe({ type: 'layout-shift', buffered: true });
  }
  
  if (document.readyState === 'complete') {
    measureLCP();
    measureFID();
    measureCLS();
  } else {
    window.addEventListener('load', () => {
      measureLCP();
      measureFID();
      measureCLS();
    });
  }
})();
