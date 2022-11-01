// $('<div class="floated-customizer-btn third-floated-btn"> <div class="icon-w"> <i class="fa fa-cog fa-spin"></i> </div> </div><div class="floated-customizer-panel"> <div class="fcp-content"> <div class="close-customizer-btn"><i class="icon-close"></i></div><div class="customizer-title"> <h5>Template Customizer</h5> <p class="mb-0">Customize & Preview in Real Time</p></div><div class="fcp-group"> <div class="fcp-group-contents"> <div class="main-option"> <div class="row"> <div class="col"> <div class="main-theme-layout-container"> <a href="#" class="main-theme-layout" theme-layout="main-theme-layout-5" title="Light Layout"><img src="../assets/images/customizer/light.png" alt="Light Layout"></a><a href="#" class="main-theme-layout" theme-layout="main-theme-layout-4" title="Dark Layout"><img src="../assets/images/customizer/dark.png" alt="Dark Layout"></a> </div></div></div></div></div></div><div CLASS="fcp-options"> <div class="fcp-group"> <div class="fcp-group-contents"> <div class="layout-option"> <ul class="nav nav-tabs border-tab nav-primary" id="top-tab" role="tablist"> <li class="nav-item" role="presentation"> <a class="nav-link active" id="top-home-tab" data-bs-toggle="tab" href="#nav_Layouts" role="tab" aria-controls="nav_Layouts" aria-selected="true"> Layouts</a></li></ul> <div class="tab-content" id="top-tabContent1"> <div class="tab-pane fade active show" id="nav_Layouts" role="tabpanel"> <div class="row"> <div class="col"> <div class="form-group mb-0"> <div class="radio radio-primary m-t-5 m-b-5"> <input type="radio" name="menu-layouts" id="default_menu" value="menu-layout-default"> <label for="default_menu">Default</label> </div><div class="radio radio-primary"> <input type="radio" name="menu-layouts" id="collapsed_menu" value="menu-layout-collapsed"> <label for="collapsed_menu">Collapsed Menu</label> </div></div></div></div></div></div></div></div></div></div></div></div>').appendTo($('body'));
// (function() {
// })();

//live customizer js
$(document).ready(function() {
    $(".floated-customizer-btn").on('click', function() {
        $(".floated-customizer-panel").toggleClass("active");
    });

    $(".close-customizer-btn").on('click', function() {
        $(".floated-customizer-panel").removeClass("active");
    });

    // live customizer menu-color-option js
    $('input[type=radio][name=menu-color-option]').change(function() {
        var menu_color_option_color = $(this).val();
        if(menu_color_option_color == 'menu-dark'){
            $(".page-sidebar").addClass("page-sidebar-dark");
        }
        else{
            $(".page-sidebar").removeClass("page-sidebar-dark");
        }
    });

    // live customizer semi-logo-background-color-option
    $('input[type=radio][name=semi-light]').change(function() {
        var semi_nav_bg = $(this).val();
        $('.main-header-left').attr("semilight-bg-color", semi_nav_bg);
        $('.main-header-right').attr("header-bg-color", "");
    });

    // live customizer header-background-color-option
    $('input[type=radio][name=header-light]').change(function() {
        var header_nav_bg = $(this).val();
        $('.main-header-right').attr("header-bg-color", header_nav_bg);
        $('.main-header-left').attr("semilight-bg-color", "");
    });

    // live customizer  nav-bar-background-color-option
    $('input[type=radio][name=navu-light]').change(function() {
        var nav_nav_bg = $(this).val();
        $('.main-header-left').attr("semilight-bg-color", nav_nav_bg);
        $('.main-header-right').attr("header-bg-color", nav_nav_bg);
    });

    // live customizer main-theme-layout
    $('input[type=radio][name=main-theme-layout]').change(function() {
        var main_theme_layout = $(this).val();
        $('.main-header-left').attr("semilight-bg-color", "");
        $('.main-header-right').attr("header-bg-color", "");
        $("body").attr("main-theme-layout", main_theme_layout);
    });

    // live customizer main-theme-layout
    $('.main-theme-layout').click(function() {
        var main_theme_layout = $(this).attr("theme-layout");
        $('.main-header-left').attr("semilight-bg-color", "");
        $('.main-header-right').attr("header-bg-color", "");
        $("body").attr("main-theme-layout", main_theme_layout);
    });

    // live customizer menu-layout
    $('input[type=radio][name=menu-layouts]').change(function() {
        var menu_layout = $(this).val();
        if(menu_layout == "menu-layout-collapsed"){
            $("#sidebar-toggle").prop('checked', false);
            $(".page-body-wrapper").addClass("sidebar-close");
        }else{
            $("#sidebar-toggle").prop('checked', true);
            $(".page-body-wrapper").removeClass("sidebar-close");
        }
    });

    $("input[type=checkbox][name=naviagation-layout-checkbox]").change(function(){
        $("input:checkbox[name=naviagation-layout-checkbox]:checked").each(function(){
            var nav_layout_c = $(this).val();
            $(".page-sidebar").addClass(nav_layout_c);

            if($(".page-sidebar").hasClass("native-scroll")){
                $(".page-sidebar").removeClass("custom-scrollbar");
            }
            if(nav_layout_c == "native-default"){
                $("#navigation_bordered_check").prop( "checked", false );
                $("#navigation_rightside_check").prop( "checked", false );
                $("#navigation_scroll_check").prop( "checked", false );
                $("#navigation_back_image_check").prop( "checked", false );
            }
        });

        $("input:checkbox[name=naviagation-layout-checkbox]:not(:checked)").each(function () {
            var nav = $(this).val();
            $(".page-sidebar").removeClass(nav);
            if(nav == "native-scroll"){
                $(".page-sidebar").addClass("custom-scrollbar");
            }
        });
    });

    $('.lightLayout').hide();

    $('.lightLayout').on('click', function () {
        $('.darkLayout').show();
        $('.lightLayout').hide();
    })
    $('.darkLayout').on('click', function () {
        $('.lightLayout').fadeIn();
        $('.darkLayout').hide();
    })

    // tooltip on theme layouts
    $(".main-theme-layout").tooltip();
});

