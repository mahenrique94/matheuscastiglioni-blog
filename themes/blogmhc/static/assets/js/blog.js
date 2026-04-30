(function () {
  'use strict';

  /* ─── Mobile menu ─── */
  var burger = document.getElementById('navBurger');
  var mobileMenu = document.getElementById('navMobile');

  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open);
    });
  }

  /* ─── Scroll reveals ─── */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('in-view');
    });
  }

  /* ─── Reading progress bar ─── */
  var bar = document.getElementById('readProgress');
  if (bar) {
    window.addEventListener('scroll', function () {
      var doc = document.documentElement;
      var scrolled = doc.scrollTop;
      var total = doc.scrollHeight - doc.clientHeight;
      bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
    }, { passive: true });
  }

  /* ─── Dynamic TOC ─── */
  var tocList = document.getElementById('tocList');
  var postContent = document.querySelector('.post-content');

  if (tocList && postContent) {
    var headings = postContent.querySelectorAll('h2, h3');
    var tocItems = [];

    headings.forEach(function (h, i) {
      if (!h.id) {
        h.id = 'heading-' + i;
      }
      var item = document.createElement('a');
      item.className = 'toc-item' + (h.tagName === 'H3' ? ' toc-item--sub' : '');
      item.href = '#' + h.id;
      item.textContent = h.textContent;
      tocList.appendChild(item);
      tocItems.push({ el: item, target: h });
    });

    if (headings.length === 0) {
      var parent = tocList.closest('.sidebar-card');
      if (parent) parent.style.display = 'none';
    }

    /* Active TOC highlight on scroll */
    if ('IntersectionObserver' in window && tocItems.length > 0) {
      var headingObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var id = entry.target.id;
          var tocItem = tocList.querySelector('[href="#' + id + '"]');
          if (tocItem) {
            tocItem.classList.toggle('active', entry.isIntersecting);
          }
        });
      }, { rootMargin: '-10% 0px -80% 0px' });

      headings.forEach(function (h) {
        headingObserver.observe(h);
      });
    }
  }

  /* ─── Filter pills (list page) ─── */
  document.querySelectorAll('.filter-pill').forEach(function (pill) {
    pill.addEventListener('click', function () {
      var bar = this.closest('.filter-bar');
      if (bar) {
        bar.querySelectorAll('.filter-pill').forEach(function (p) {
          p.classList.remove('active');
        });
      }
      this.classList.add('active');
    });
  });
})();
