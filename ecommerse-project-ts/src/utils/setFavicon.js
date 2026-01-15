export default function setFavicon(href, type = 'image/png') {
    if (!href || typeof document === 'undefined') return;
    const head = document.head || document.getElementsByTagName('head')[0];

    // update or create favicon link
    let link = head.querySelector("link[rel~='icon']");
    if (link) {
        link.href = href;
        if (type) link.type = type;
    } else {
        link = document.createElement('link');
        link.rel = 'icon';
        if (type) link.type = type;
        link.href = href;
        head.appendChild(link);
    }

    // ensure apple-touch-icon also updated
    let apple = head.querySelector("link[rel='apple-touch-icon']");
    if (apple) {
        apple.href = href;
    } else {
        apple = document.createElement('link');
        apple.rel = 'apple-touch-icon';
        apple.href = href;
        head.appendChild(apple);
    }
}
