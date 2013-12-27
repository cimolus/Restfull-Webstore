/**
 * Created by Alex on 07.12.13.
 */

WEBSTORE.Template = {

    headerTemplate:
        '<header class="boxShadow">'
            + '<div class="logo"><img src="/images/logo.jpg"/></div>'
                +'<nav id="dock">'
                    +'<div class="dock-container">'
                        +'<a class="dock-item" href="#"><span>Корзина</span><img src="/images/dock/basket.jpg" alt="Корзина" /></a>'
                        +'<a class="dock-item" onclick="WEBSTORE.pages.home();" ><span>Домой</span><img src="/images/dock/home.png" alt="Домой" /></a>'
                        +'<a class="dock-item" onclick="WEBSTORE.pages.products();"><span>Все товары</span><img src="/images/dock/portfolio.png" alt="Все товары" /></a>'
                        +'<a class="dock-item" href="#"><span>Поиск</span><img src="/images/dock/search.png" alt="Поиск" /></a>'
                        +'<a class="dock-item" href="#"><span>FAQ</span><img src="/images/dock/faq.jpg" alt="FAQ" /></a>'
                    +'</div>'
                +'</nav>'
        +'</header>',

    footerTemplate: '<footer class="boxShadow">Copyright © 2013 GRSU Kassirov Inc. All rights reserved.</footer>',

    contentTemplate:
        '<div class="container boxShadow">'
            +'<aside>'
                +' <div class="authorithation">'
                    +'<h3>Авторизация</h3>'
                    +'<form action="/j_spring_security_check" method="post">'
                        +'<input class="input_field" id="j_username" name="j_username" size="20" maxlength="50" type="text" placeholder="Логин" AUTOCOMPLETE="off"/>'
                        +'<input class="input_field" id="j_password" name="j_password" size="20" maxlength="50" type="password" placeholder="Пароль" AUTOCOMPLETE="off" />'
                        +'<input class="input_submit" type="submit" value="Войти" />'
                    +'</form>'
                    +'<a href="/registration" >Регистрация</a>'
                +'</div>'
            +'</aside>'
            +'<section id="content" onload="WEBSTORE.pages.home();" >'
            +'</section>'
        +'</div>',


    renderTemplate: function() {
        var template = WEBSTORE.Template.headerTemplate + WEBSTORE.Template.contentTemplate + WEBSTORE.Template.footerTemplate;
        document.body.innerHTML = template;
        WEBSTORE.EventService.fireEvent( WEBSTORE.EventService.templateRendered );
    }

};