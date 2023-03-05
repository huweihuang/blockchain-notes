require(["gitbook"], function(gitbook) {
    // plugin config
    // <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8205636531078391" crossorigin="anonymous"></script>
    
    // var config;

    // function createAdElement(adConfig) {
    //     adElement = document.createElement('ins');
    //     adElement.style = 'display: block';
    //     adElement.className = 'adsbygoogle';
    //     adElement.setAttribute('data-ad-client', adConfig.client);
    //     adElement.setAttribute('data-ad-slot', adConfig.slot);
    //     adConfig.format && adElement.setAttribute('data-ad-format', adConfig.format);
    //     adConfig.style && adElement.setAttribute('style', adConfig.style);

    //     return adElement;
    // }

    // function injectAds(configs) {
    //     if(configs && configs.length > 0) {
    //         configs.forEach(function(c) {
    //             document.querySelector(c.location).appendChild(createAdElement(c));
    //             (adsbygoogle = window.adsbygoogle || []).push({});
    //         });
    //     }
    // }

    gitbook.events.bind("start", function(e, pluginConfig) {
        config = pluginConfig['google-adsense'].ads;
        firstConfig = config[0]
        firstClient = firstConfig.client

        // init script
        var adScript = document.createElement('script');
        adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        adScript.setAttribute('async', true);
        adScript.setAttribute('data-ad-client', firstClient);
        console.log("adScript=%o", adScript);
        document.head.appendChild(adScript);
    });

    // gitbook.events.bind("page.change", function() {
    //     if (config) {
    //         injectAds(config);
    //     }
    // });
});
