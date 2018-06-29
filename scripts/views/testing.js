'use strict';


/////smoothing redirect page end here/////

function activeTab() {
    $('#nav-active').on('click', 'li', function (e) {
        // e.preventDefault();
        $(this).addClass('activeHighline').siblings().removeClass('activeHighline');
        // console.log(this);

    });
}
activeTab();



//before push//