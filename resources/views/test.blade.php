
<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description"
        content="universal admin is super flexible, powerful, clean & modern responsive bootstrap 4 admin template with unlimited possibilities." />
    <meta name="keywords"
        content="admin template, universal admin template, dashboard template, flat admin template, responsive admin template, web app" />
    <meta name="author" content="pixelstrap" />
    <link rel="icon" href="/resources/backend/assets/images/favicon.png" type="image/x-icon" />
    <link rel="shortcut icon" href="/resources/backend/assets/images/favicon.png" type="image/x-icon" />
    <title>Universal - Premium Admin Template</title>

    <!--Google font-->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700" rel="stylesheet" />

    <!-- Font Awesome -->
    <!-- <link rel="stylesheet" type="text/css" href="/resources/backend/assets/css/fontawesome.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- ico-font -->
    <!-- <link rel="stylesheet" type="text/css" href="/resources/backend/assets/css/icofont.css"> -->
    <!-- <link rel="stylesheet" href="myProjects/webProject/icofont/css/icofont.min.css"> -->

    <!-- Themify icon -->
    <link rel="stylesheet" type="text/css" href="/resources/backend/assets/css/themify.css" />

    <!-- Flag icon -->
    <!-- <link rel="stylesheet" type="text/css" href="/resources/backend/assets/css/flag-icon.css"> -->

    <!-- Bootstrap css -->
    <link rel="stylesheet" type="text/css" href="/resources/backend/assets/css/bootstrap.css" />

    <!-- App css -->
    <link rel="stylesheet" type="text/css" href="/resources/backend/assets/css/style.css" />

    <!-- Responsive css -->
    <link rel="stylesheet" type="text/css" href="/resources/backend/assets/css/responsive.css" />
</head>

<body>
    <!-- Loader starts -->
    <div class="loader-wrapper">
        <div class="loader bg-white">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <h4>Have a great day at work today <span>&#x263A;</span></h4>
        </div>
    </div>
    <!-- Loader ends -->

    <!--page-wrapper Start-->
    <div class="page-wrapper">
        <!--Page Header Start-->
        <div class="page-main-header">
            <div class="main-header-left">
                <div class="logo-wrapper">
                    <a href="index.html">
                        <img src="/resources/backend/assets/images/logo-light.png" class="image-dark" alt="" />
                        <img src="/resources/backend/assets/images/logo-light-dark-layout.png" class="image-light" alt="" />
                    </a>
                </div>
            </div>
            <div class="main-header-right row">
                <div class="mobile-sidebar col-1 ps-0">
                    <div class="text-start switch-sm">
                        <label class="switch">
                            <input type="checkbox" id="sidebar-toggle" checked />
                            <span class="switch-state"></span>
                        </label>
                    </div>
                </div>
                <div class="nav-right col">
                    <ul class="nav-menus">
                        <li>
                            <form class="form-inline search-form">
                                <div class="form-group">
                                    <label class="sr-only">Email</label>
                                    <input type="search" class="form-control-plaintext" placeholder="Search.." />
                                    <span class="d-sm-none mobile-search"> </span>
                                </div>
                            </form>
                        </li>
                        <li>
                            <a href="#!" onclick="javascript:toggleFullScreen()" class="text-dark">
                                <img class="align-self-center pull-right me-2"
                                    src="/resources/backend/assets/images/dashboard/browser.png" alt="header-browser" />
                            </a>
                        </li>

                        <li>
                            <a href="#" class="main-theme-layout darkLayout" theme-layout="main-theme-layout-4"
                                title="Dark Layout"><i class="fa-solid fa-moon"></i></a>
                            <a href="#" class="main-theme-layout lightLayout" theme-layout="main-theme-layout-5"
                                title="Light Layout"><i class="fa-solid fa-sun"></i></a>
                        </li>

                        <li class="onhover-dropdown">
                            <a href="#!" class="txt-dark">
                                <img class="align-self-center pull-right me-2"
                                    src="/resources/backend/assets/images/dashboard/notification.png" alt="header-notification" />
                                <span class="badge rounded-pill badge-primary notification">3</span>
                            </a>
                            <ul class="notification-dropdown onhover-show-div">
                                <li>
                                    Notification
                                    <span
                                        class="badge rounded-pill badge-secondary text-white text-uppercase pull-right">3
                                        New</span>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <i
                                            class="flex-shrink-0 align-self-center notification-icon icofont icofont-shopping-cart bg-primary"></i>
                                        <div>
                                            <h6 class="mt-0">Your order ready for Ship..!</h6>
                                            <p class="mb-0">
                                                Lorem ipsum dolor sit amet, consectetuer elit.
                                            </p>
                                            <span><i class="icofont icofont-clock-time p-r-5"></i>Just
                                                Now</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <i
                                            class="flex-shrink-0 align-self-center notification-icon icofont icofont-download-alt bg-success"></i>
                                        <div>
                                            <h6 class="mt-0 txt-success">Download Complete</h6>
                                            <p class="mb-0">
                                                Lorem ipsum dolor sit amet, consectetuer elit.
                                            </p>
                                            <span><i class="icofont icofont-clock-time p-r-5"></i>5
                                                minutes ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <i
                                            class="flex-shrink-0 align-self-center notification-icon icofont icofont-recycle bg-danger"></i>
                                        <div>
                                            <h6 class="mt-0 txt-danger">250 MB trush files</h6>
                                            <p class="mb-0">
                                                Lorem ipsum dolor sit amet, consectetuer elit.
                                            </p>
                                            <span><i class="icofont icofont-clock-time p-r-5"></i>25
                                                minutes ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="text-center">
                                    You have Check <a href="#">all</a> notification
                                </li>
                            </ul>
                        </li>
                        <li class="onhover-dropdown">
                            <div class="d-flex align-items-center">
                                <img class="align-self-center pull-right flex-shrink-0 me-2"
                                    src="/resources/backend/assets/images/dashboard/user.png" alt="header-user" />
                                <div>
                                    <h6 class="m-0 txt-dark f-16">
                                        My Account
                                        <i class="fa fa-angle-down pull-right ms-2"></i>
                                    </h6>
                                </div>
                            </div>
                            <ul class="profile-dropdown onhover-show-div p-20">
                                <li>
                                    <a href="#">
                                        <i class="fa-solid fa-user"></i>
                                        Edit Profile
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa-solid fa-inbox"></i>
                                        Inbox
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa-sharp fa-solid fa-list-check"></i>
                                        Task
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa-solid fa-headset"></i>
                                        Chat
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa-solid fa-right-from-bracket"></i>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div class="d-lg-none mobile-toggle">
                        <i class="icon-more"></i>
                    </div>
                </div>
            </div>
        </div>
        <!--Page Header Ends-->

        <!--Page Body Start-->
        <div class="page-body-wrapper">
            <!--Page Sidebar Start-->
            <div class="page-sidebar custom-scrollbar">
                <div class="sidebar-user text-center">
                    <div>
                        <img class="img-50 rounded-circle" src="/resources/backend/assets/images/user/1.jpg" alt="#" />
                    </div>
                    <h6 class="mt-3 f-12">Johan Deo</h6>
                </div>
                <ul class="sidebar-menu">
                    <li>
                        <div class="sidebar-title">General</div>
                        <a href="javascript:void(0)" class="sidebar-header">
                            <i class="fa-solid fa-house"></i><span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" class="sidebar-header">
                            <i class="fa-solid fa-gauge"></i><span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" class="sidebar-header">
                            <i class="icon-blackboard"></i><span>Widgets</span>
                            <i class="fa fa-angle-right pull-right"></i>
                        </a>
                        <ul class="sidebar-submenu">
                            <li>
                                <a href="general-widget.html"><i class="fa fa-angle-right"></i>General widget</a>
                            </li>
                            <li>
                                <a href="chart-widget.html"><i class="fa fa-angle-right"></i>Chart widget</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="http://admin.pixelstrap.com/universal/starter-kit/layout-light.html"
                            class="sidebar-header">
                            <i class="icon-anchor"></i><span> Starter kit</span>
                        </a>
                    </li>
                    <li>
                        <div class="sidebar-title">Layout</div>
                        <a href="javascript:void(0)" class="sidebar-header">
                            <i class="icon-palette"></i> <span>Color Version</span>
                            <i class="fa fa-angle-right pull-right"></i>
                        </a>
                        <ul class="sidebar-submenu">
                            <li>
                                <a href="layout-light.html"><i class="fa fa-angle-right"></i>Layout Light</a>
                            </li>
                            <li>
                                <a href="layout-dark.html"><i class="fa fa-angle-right"></i>Layout Dark</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="sidebar-widget text-center">
                    <div class="sidebar-widget-top">
                        <h6 class="mb-2 fs-14">Need Help</h6>
                        <i class="fa-sharp fa-solid fa-phone"></i>
                    </div>
                    <div class="sidebar-widget-bottom p-20 m-20">
                        <p>
                            +1 234 567 899 <br />help@pixelstrap.com <br /><a href="#">Visit FAQ</a>
                        </p>
                    </div>
                </div>
            </div>
            <!--Page Sidebar Ends-->

            <div class="page-body">
                <!-- Container-fluid starts -->
                <div class="container-fluid">
                    <div class="page-header">
                        <div class="row">
                            <div class="col-lg-6">
                                <h3>
                                    Sample Page
                                    <small>Universal Admin panel</small>
                                </h3>
                            </div>
                            <div class="col-lg-6">
                                <ol class="breadcrumb pull-right">
                                    <li class="breadcrumb-item">
                                        <a href="#"><i class="fa-solid fa-angles-right"></i></a>
                                    </li>
                                    <li class="mx-2">Sample Page</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Container-fluid Ends -->

                <!-- Container-fluid starts -->
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card">
                                <div class="card-header">
                                <div  id="some-selector"></div>
                                </div>
                                <div class="card-body">
                                    <p>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                        sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollit anim id est laborum."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Container-fluid starts -->
            </div>
        </div>
        <!--Page Body Ends-->
    </div>
    <!--page-wrapper Ends-->

    <!-- latest jquery-->
    <script src="/resources/backend/assets/js/jquery-3.2.1.min.js"></script>
    <!-- Bootstrap js-->
    <script src="/resources/backend/assets/js/bootstrap/bootstrap.bundle.min.js"></script>
    <!-- Sidebar jquery-->
    <!-- <script src="/resources/backend/assets/js/sidebar-menu.js"></script> -->
    <!-- Theme js-->
    <script src="/resources/backend/assets/js/script.js"></script>
    <script src="/resources/backend/assets/js/theme-customizer/customizer.js"></script>
    <!-- <script src="/resources/backend/assets/js/chat-sidebar/chat.js"></script> -->

</body>

</html>