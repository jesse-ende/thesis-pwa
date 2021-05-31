
d = document.createElement('div');
d.setAttribute("id", "kaprila_sticky_header");
d.style.cssText = 'height: 80px;';
document.body.insertBefore(d, document.body.childNodes[0]);

var div_id = document.getElementById('kaprila_sticky_header');
div_id.innerHTML = '<div style="height: 100px;margin-top:0;"><iframe src="https://faradars.org/banner/embed/header_external?medium=banner-kaprila&campaign=header-sticky&content=ev-1400-02-ft1400&source=amoozesh365.ir" scrolling="no" style="width: 100%;height: 90px;display:block;position: fixed;z-index: 1000000;" frameborder="0"></iframe></div>';