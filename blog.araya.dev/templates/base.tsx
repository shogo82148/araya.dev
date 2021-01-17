import React from '../deps';

<!DOCTYPE html>
<html lang="ja">
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-104175258-3"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', 'UA-104175258-3');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <link rel="stylesheet" href="/styles/main.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="prefetch" href="/js/highlight.js" as="script">
    <link rel="prefetch" href="/styles/markdown.css">
    <link rel="prefetch" href="/styles/lib/highlight.js/dracula.css">
    {% block header %}
    {% endblock %}
</head>
<body>
<nav class="global-nav">
    <div class="container global-nav-content">
        <a href="/" class="top-header-link">
            <img src="https://araya.dev/assets/icon.svg" alt="icon image" class="header-icon">
            <span class="header-title">Araya's Reservoir</span>
        </a>
    </div>
</nav>
<div class="content">
    {% block content %}
    {% endblock %}
</div>
<footer class="footer">
    <div class="container">
        <div class="footer--contents">
            <p>当サイト内の意見・感想等は全てaraya個人によるものであり特定の組織との一切の関わりを持ちません</p>
            <img src="/assets/images/cc-by.svg" alt="License is CC-BY" class="footer--license">
            <span class="footer--copy-right">&copy; Araya</span>
        </div>
    </div>
</footer>
</body>
</html>
