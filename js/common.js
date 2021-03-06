---
---

{% if site.ga_tracking_code %}
  // GA Setup
  window.GoogleAnalyticsObject = '__ga__';
  window.__ga__ = {
    q: [['create', '{{ site.ga_tracking_code }}', 'auto']],
    l: Date.now()
  };
{% endif %}

// Setup
requirejs.config({
  baseUrl: '{{site.root}}/common/js/lib',
  paths: {
    bootstrap: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min',
    clipboard: '//cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.5/clipboard.min',
    d3: '//cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min',
    featherlight: '//cdn.rawgit.com/noelboss/featherlight/1.3.4/release/featherlight.min',
    fullcalendar: '//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.3.0/fullcalendar.min',
    ga: '//www.google-analytics.com/analytics',
    github_activity: 'github-activity',
    googlemaps: '//maps.googleapis.com/maps/api/js?sensor=true',
    highcharts: '//code.highcharts.com/highcharts',
    highcharts_data: '//code.highcharts.com/modules/data',
    hljs: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.1.0/highlight.min',
    jquery: 'jquery.min',
    micromarkdown: 'micromarkdown.min',
    moment: 'moment.min',
    mustache: 'mustache.min',
    proxy: 'proxy',
    underscore: 'underscore-min'
  },
  shim: {
    'bootstrap': ['underscore', 'jquery'],
    'emphasis': ['jquery'],
    'featherlight': ['jquery'],
    'fullcalendar': ['jquery', 'moment'],
    'humane': ['jquery'],
    'jquery.404': ['jquery'],
    'jquery.cors' : ['jquery'],
    'jquery.forgiving': ['jquery'],
    'jquery.format': ['jquery'],
    'jquery.hash': ['jquery'],
    'jquery.message_height': ['jquery'],
    'jquery.redirect': ['jquery'],
    'jquery.sanitize': ['jquery'],
    'jquery.splash': ['jquery', 'mustache'],
    'jquery.timeago' : ['jquery'],
    'proxy' : ['js.cookie'],
    'readmore': ['jquery'],
    'highcharts' : {
      deps: ['jquery'],
      exports: 'Highcharts'
    },
    'highcharts_data' : {
      deps: ['highcharts']
    },
    'underscore': {
      exports: '_'
    },
    // 'showdown' : {
    //   exports: 'showdown'
    // },
    'mustache': {
      exports: 'Mustache',
      init: function() { return Mustache; }
    },
    'd3': {
      exports: 'd3'
    },
    'googlemaps': {
      exports: 'google'
    },
    'ga' : {
      exports: '__ga__'
    },
    'github_activity' : ['mustache']
  }
});
