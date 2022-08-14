const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const mids = $$(".mid_item");
const lefts = $$(".left_item");
const rights = $$(".right_item");



mids.forEach((mid, index) => {
    const left  = lefts [index];
    const right = rights[index];

    mid.onclick = function () {
        $(".mid_item.active").classList.remove("active");
        $(".left_item.active").classList.remove("active");
        $(".right_item.active").classList.remove("active");

        this.classList.add("active");
        left.classList.add("active");
        right.classList.add("active");
    };
});


// -------------------- Tìm kiếm  --------------------

const items = document.querySelectorAll('.mid_item');
const bar_search = document.querySelector('#bar_search');

const search = () => {
    const val = bar_search.value.toLowerCase();
    // console.log(val);
    items.forEach(user => {
        let name = user.querySelector('h3').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'block';
        } else {
            user.style.display = 'none';
        }
    })
}

bar_search.addEventListener('keyup', search);


// -------------------- Siêu chuyển động  --------------------

const Explores         = document.querySelectorAll('.explore');

const Left_main        = document.querySelector('.lefts')

const Mid_main         = document.querySelector('.mids')
const search_bar       = document.querySelector('.search_bar')
const mid_item         = document.querySelectorAll('.mid_item')
const mid_item_back    = document.querySelector('.mid_item_back')

const Right_explore    = document.querySelectorAll('.explore')
const Right_img        = document.querySelectorAll('.right_img')
const Right_text       = document.querySelectorAll('.text')
const Right_color_text = document.querySelectorAll('.change_color_text')
const Right_card       = document.querySelectorAll('.block_4')


    // ------------------  Method Explore  ------------------
Explores.forEach((Explore, index) => {
    Explore.onclick = function () {

        Left_main.classList.add("active_2");
        Mid_main.classList.add("active_2");
            search_bar.classList.add("active_2");

            for (var i = 0; i < mid_item.length; i++) {
                mid_item[i].classList.add("active_2");
            }
            mid_item_back.classList.add("active_2");

        // right
        for (var i = 0; i < Right_explore.length; i++) {
            Right_explore[i].classList.add("active_2");
        }
        for (var i = 0; i < Right_img.length; i++) {
            Right_img[i].classList.add("active_2");
        }
        for (var i = 0; i < Right_text.length; i++) {
            Right_text[i].classList.add("active_2");
        }
        for (var i = 0; i < Right_color_text.length; i++) {
            Right_color_text[i].classList.add("active_2");
        }
        for (var i = 0; i < Right_card.length; i++) {
            Right_card[i].classList.add("active_2");
        }
    };


});

    // ------------------  Method Back  ------------------
mid_item_back.onclick = function () {

    Left_main.classList.remove("active_2");
    Mid_main.classList.remove("active_2");
        search_bar.classList.remove("active_2");
        for (var i = 0; i < mid_item.length; i++) {
            mid_item[i].classList.remove("active_2");
        }
        mid_item_back.classList.remove("active_2");

    // right
    for (var i = 0; i < Right_explore.length; i++) {
        Right_explore[i].classList.remove("active_2");
    }
    for (var i = 0; i < Right_img.length; i++) {
        Right_img[i].classList.remove("active_2");
    }
    for (var i = 0; i < Right_text.length; i++) {
        Right_text[i].classList.remove("active_2");
    }
    for (var i = 0; i < Right_color_text.length; i++) {
        Right_color_text[i].classList.remove("active_2");
    }
    for (var i = 0; i < Right_card.length; i++) {
        Right_card[i].classList.remove("active_2");
    }
};


// -------------------- Kết thúc siêu chuyển động  --------------------

// --------------------     Slide card 4  --------------------

const btnLeft = document.querySelectorAll('.btnLeft')
const btnRight = document.querySelectorAll('.btnRight')

const boxShow = document.querySelectorAll('.box_show')

document.addEventListener('DOMContentLoaded', function() {
    make_slide()
})

function make_slide() {

    let count = 0;
    let remain = 75;
    

    for (var i = 0; i < btnRight.length; i++) {
        btnRight[i].addEventListener('click', function () {
            count += 25;
    
            if (count > remain) {
                count = 0;
            }
            for (var i = 0; i < boxShow.length; i++) {
                boxShow[i].style.transform = `translateX(${-count}%)`;
            }
            
        });
    }


    for (var i = 0; i < btnLeft.length; i++) {
        btnLeft[i].addEventListener('click', function () {
            count -= 25;
    
            if (count < 0) {
                count = remain;
            }
            
            for (var i = 0; i < boxShow.length; i++) {
                boxShow[i].style.transform = `translateX(${-count}%)`;
            }
        });
    }
}


// ========== Zoom photo ==========

const ZoomPhoto1 = document.querySelector('#Zoom_photo_1')
const photoFeeds1 = document.querySelector('.photo_feeds_1')

const ZoomPhoto2 = document.querySelector('#Zoom_photo_2')
const photoFeeds2 = document.querySelector('.photo_feeds_2')

const ZoomPhoto3 = document.querySelector('#Zoom_photo_3')
const photoFeeds3 = document.querySelector('.photo_feeds_3')

const ZoomPhoto4 = document.querySelector('#Zoom_photo_4')
const photoFeeds4 = document.querySelector('.photo_feeds_4')

const ZoomPhoto5 = document.querySelector('#Zoom_photo_5')
const photoFeeds5 = document.querySelector('.photo_feeds_5')

const ZoomPhoto6 = document.querySelector('#Zoom_photo_6')
const photoFeeds6 = document.querySelector('.photo_feeds_6')

const ZoomPhoto7 = document.querySelector('#Zoom_photo_7')
const photoFeeds7 = document.querySelector('.photo_feeds_7')

const ZoomPhoto8 = document.querySelector('#Zoom_photo_8')
const photoFeeds8 = document.querySelector('.photo_feeds_8')

const ZoomPhoto9 = document.querySelector('#Zoom_photo_9')
const photoFeeds9 = document.querySelector('.photo_feeds_9')

// ====== Open & Close Zoom photo method==========

const openPhotoFeeds1 = () => {
    photoFeeds1.style.display = 'grid';
}
const closePhotoFeeds1 = (event) => {
    if (event.target.classList.contains('photo_feeds_1')) {
        photoFeeds1.style.display = 'none';
    }
}

const openPhotoFeeds2 = () => {
    photoFeeds2.style.display = 'grid';
}
const closePhotoFeeds2 = (event) => {
    if (event.target.classList.contains('photo_feeds_2')) {
        photoFeeds2.style.display = 'none';
    }
}

const openPhotoFeeds3 = () => {
    photoFeeds3.style.display = 'grid';
}
const closePhotoFeeds3 = (event) => {
    if (event.target.classList.contains('photo_feeds_3')) {
        photoFeeds3.style.display = 'none';
    }
}

const openPhotoFeeds4 = () => {
    photoFeeds4.style.display = 'grid';
}
const closePhotoFeeds4 = (event) => {
    if (event.target.classList.contains('photo_feeds_4')) {
        photoFeeds4.style.display = 'none';
    }
}

const openPhotoFeeds5 = () => {
    photoFeeds5.style.display = 'grid';
}
const closePhotoFeeds5 = (event) => {
    if (event.target.classList.contains('photo_feeds_5')) {
        photoFeeds5.style.display = 'none';
    }
}

const openPhotoFeeds6 = () => {
    photoFeeds6.style.display = 'grid';
}
const closePhotoFeeds6 = (event) => {
    if (event.target.classList.contains('photo_feeds_6')) {
        photoFeeds6.style.display = 'none';
    }
}

const openPhotoFeeds7 = () => {
    photoFeeds7.style.display = 'grid';
}
const closePhotoFeeds7 = (event) => {
    if (event.target.classList.contains('photo_feeds_7')) {
        photoFeeds7.style.display = 'none';
    }
}

const openPhotoFeeds8 = () => {
    photoFeeds8.style.display = 'grid';
}
const closePhotoFeeds8 = (event) => {
    if (event.target.classList.contains('photo_feeds_8')) {
        photoFeeds8.style.display = 'none';
    }
}

const openPhotoFeeds9 = () => {
    photoFeeds9.style.display = 'grid';
}
const closePhotoFeeds9 = (event) => {
    if (event.target.classList.contains('photo_feeds_9')) {
        photoFeeds9.style.display = 'none';
    }
}

// ========== Open & Close Zoom photo ==========

photoFeeds1.addEventListener('click', closePhotoFeeds1);
ZoomPhoto1.addEventListener('click', openPhotoFeeds1);

photoFeeds2.addEventListener('click', closePhotoFeeds2);
ZoomPhoto2.addEventListener('click', openPhotoFeeds2);

photoFeeds3.addEventListener('click', closePhotoFeeds3);
ZoomPhoto3.addEventListener('click', openPhotoFeeds3);

photoFeeds4.addEventListener('click', closePhotoFeeds4);
ZoomPhoto4.addEventListener('click', openPhotoFeeds4);

photoFeeds5.addEventListener('click', closePhotoFeeds5);
ZoomPhoto5.addEventListener('click', openPhotoFeeds5);

photoFeeds6.addEventListener('click', closePhotoFeeds6);
ZoomPhoto6.addEventListener('click', openPhotoFeeds6);

photoFeeds7.addEventListener('click', closePhotoFeeds7);
ZoomPhoto7.addEventListener('click', openPhotoFeeds7);

photoFeeds8.addEventListener('click', closePhotoFeeds8);
ZoomPhoto8.addEventListener('click', openPhotoFeeds8);

photoFeeds9.addEventListener('click', closePhotoFeeds9);
ZoomPhoto9.addEventListener('click', openPhotoFeeds9);