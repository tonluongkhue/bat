$(document).ready(function () {
    $('.banner').lightSlider({
        adaptiveHeight: false,
        item: 1,
        slideMargin: 0,
        loop: true,
        pager: false,
        controls: true,
        prevHtml: '<img src="asset/img/ic-slider-left.png" alt="">',
        nextHtml: '<img src="asset/img/ic-slider-right.png" alt="">',
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:1,
                    slideMove:1,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });

    $('.section3_slider').lightSlider({
        adaptiveHeight: true,
        item: 5,
        slideMargin: 20,
        loop: true,
        pager: false,
        controls: true,
        prevHtml: '<img src="asset/img/ic-slider-left.png" alt="">',
        nextHtml: '<img src="asset/img/ic-slider-right.png" alt="">',
        responsive : [
           
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:20,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });

    $('.section5_slider').lightSlider({
        adaptiveHeight: true,
        item: 5,
        slideMargin: 0,
        slideMargin: 15,
        loop: true,
        pager: false,
        controls: true,
        prevHtml: '<img src="asset/img/ic-slider-left.png" alt="">',
        nextHtml: '<img src="asset/img/ic-slider-right.png" alt="">',
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:20,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });

    $('.section9_slider').lightSlider({
        adaptiveHeight: true,
        item: 3,
        slideMargin: 0,
        slideMargin: 15,
        loop: true,
        pager: false,
        controls: true,
        prevHtml: '<img src="asset/img/ic-left-s9.png" alt="">',
        nextHtml: '<img src="asset/img/ic-right-s9.png" alt="">',
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });

    // slider dịch vụ nông lâm nghiệp
    $('.dvnl_other-slider').lightSlider({
        adaptiveHeight: true,
        item: 2,
        slideMargin: 0,
        slideMargin: 10,
        loop: true,
        pager: false,
        controls: true,
        prevHtml: '<img src="asset/img/ic-left-child.png" alt="">',
        nextHtml: '<img src="asset/img/ic-right-child.png" alt="">',
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });
    // chiết xuất
    $('.cxcx_other-slider').lightSlider({
        adaptiveHeight: true,
        item: 5,
        slideMargin: 0,
        slideMargin: 10,
        loop: true,
        pager: false,
        controls: true,
        prevHtml: '<img src="asset/img/ic-left-child.png" alt="">',
        nextHtml: '<img src="asset/img/ic-right-child.png" alt="">',
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:4,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });

     // cang can
     $('.cangcan-slider').lightSlider({
        adaptiveHeight: true,
        item: 3,
        slideMargin: 0,
        slideMargin: 20,
        loop: true,
        pager: false,
        controls: true,
        prevHtml: '<img src="asset/img/ic-left-child.png" alt="">',
        nextHtml: '<img src="asset/img/ic-right-child.png" alt="">',
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });

     // bất động sản
     $('.bds_other-slider').lightSlider({
        adaptiveHeight: true,
        item: 3,
        slideMargin: 0,
        slideMargin: 20,
        loop: true,
        pager: false,
        controls: true,
        prevHtml: '<img src="asset/img/ic-left-child.png" alt="">',
        nextHtml: '<img src="asset/img/ic-right-child.png" alt="">',
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });

    // tintuc
    $('.tintuc_other-slider').lightSlider({
        adaptiveHeight: true,
        item: 3,
        slideMargin: 20,
        loop: true,
        pager: false,
        controls: true,
        prevHtml: '<img src="asset/img/ic-left-child.png" alt="">',
        nextHtml: '<img src="asset/img/ic-right-child.png" alt="">',
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });
    
    // cuộn màn hình
    $(window).scroll(function (event) {
        var pos_body = $('html,body').scrollTop();
        if (pos_body > 90) {
            $('header').addClass('header_fix');
        }
        else {
            $('header').removeClass('header_fix');
        }
    });


    // full page
    var wrap = document.getElementById("Wrapper");
    if (wrap != null) {
        var Wrapper = new fullpage('#Wrapper', {
            navigation: false,
            v2compatible: true,
            responsiveWidth: 767,
            afterLoad: function (anchorLink, index) {
                var tag = "#MenuWrapper ul li[data-id='" + index + "']";
                $('#MenuWrapper ul li').removeClass('active');
                $(tag).addClass('active');
                if (index != 1) {
                    $('.backtop').addClass('show');
                }
                else {
                    $('.backtop').removeClass('show');
                }
            }
        });
        $('#MenuWrapper ul li').click(function () {
            var id = $(this).data('id');
            Wrapper.moveTo(id, 0);
            $('#MenuWrapper ul li').removeClass('active');
            $(this).addClass('active');
        });
        var tag = "#MenuWrapper ul li[data-id='" + Wrapper.getActiveSection().index + 1 + "']";
        $(tag).addClass('active');
    }

    const resizeImage = (div, ratio) => {
        let widthif = parseInt($(div).width())
        let heightif = (widthif)*ratio
        $(div).css({
            "height": heightif + "px"
        })
    }
    // resizeImage(".map iframe", 9 / 16)
resizeImage('.section2_item .section2_item-img', 1)
resizeImage('.item .item_img', 1)
resizeImage('.section7_item-img a', 0.62)
resizeImage('.section8_item-img a', 0.6)
resizeImage('.section9_item .section9_item-img', 0.67)
resizeImage('.section10_item-child .section10_item-child-img', 0.657)
resizeImage('.section10_item .section10_item-img', 0.562)
resizeImage('.content_item .content_item-img', 0.665)
resizeImage('.section6_item .section6_item-img', 0.753)

resizeImage('.bds_profile .list_profile-item-l-img a', 0.66)
resizeImage('.list_profile-item-l-img a', 0.586)
resizeImage('.cx_details-img a', 1)
resizeImage('.subpage_slider .item_img a', 1)
resizeImage('.list_profile-item-link .list_profile-item-img', 1)
resizeImage('.navigation_info .item_img a', 1)
resizeImage('.dvnl_item-img a', 0.505)
resizeImage('.dvnl_item-child-img a', 0.586)
resizeImage('.nav_text-banner .nav_text-banner-img', 0.654)
resizeImage('.sangd_profile .list_profile-item-l-img a', 0.665)
resizeImage('.thuvien_profile .list_profile-item-l-img a', 0.678)
resizeImage('.tintuc_item-l-img a', 0.561)
resizeImage('.tintuc_item-s1-3-img a', 0.661)
resizeImage('.tintuc_col-3-img a', 0.566)
resizeImage('#body .banner_child', 0.25)


});


// reset ảnh
// function resizeImage (e, s){ 
//     s = parseInt($(e).width()) * s; 
//     $(e).css({ height: s + "px" }) 
// };
// resizeImage('.section3_slider .item_img', 1.2)

//methods


// menu
const icMenu = document.querySelector('.header_nav-menu');
const navBar = document.querySelector('.navbar_show');
const header = document.querySelector('header')
const social = document.querySelector('.list_social')
const menuRun = document.querySelector('.menu_run')
const closeMenu = document.querySelector('.navbar_close')

function showMenu() {
    navBar.classList.toggle("active")
}

function hidenHeader() {
    header.classList.toggle("hiden")
    social.classList.toggle("hiden")
    menuRun.classList.toggle("hiden")
}

// show menu
icMenu.addEventListener("click", function () {
    showMenu();
    hidenHeader();

});

// hiden menu
closeMenu.addEventListener("click", function () {
    showMenu();
    hidenHeader();
});

// search
const searchIcon = document.querySelector('.header_nav-search-icon');
const searchInput = document.querySelector('.search_input');

searchIcon.addEventListener("click", function () {
    searchInput.classList.toggle("active");
})


// tab
const tabs = document.querySelectorAll('.tab-item')
const contentItems = document.querySelectorAll('.section11_content-item')
tabs.forEach((tab, index) => {
    tab.onclick = function () {
        const contentItem = contentItems[index];
        document.querySelector('.tab-item.active').classList.remove('active');
        document.querySelector('.section11_content-item.active').classList.remove('active');
        this.classList.add('active');
        contentItem.classList.add('active');
    }
})

// gioi thieu

const navigationItems = document.querySelectorAll('.navigation_item')
const navigationInfos = document.querySelectorAll('.navigation_info')
navigationItems.forEach((navigationItem, index) => {
    navigationItem.onclick = function(){
        const navigationInfo = navigationInfos[index];
        document.querySelector('.navigation_item.active').classList.remove('active');
        document.querySelector('.navigation_info.active').classList.remove('active');
        this.classList.add('active')
        navigationInfo.classList.add('active')
    }
})

// chọn file
const input = document.getElementById('upload')
const text = document.getElementById('text')
input.addEventListener("change", () => {
    const path = input.value.split('\\')
    const filename = path[path.length - 1]
    text.innerHTML = filename ? filename : "Chọn từ máy tính"
})



