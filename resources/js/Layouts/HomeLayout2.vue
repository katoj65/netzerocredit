<template>
<div class="nk-main" style="overflow:auto" >
<header class="" id="home">
<div class="border-bottom header-main header-main-s1 is-sticky is-transparent" style="position:fixed;width:100%;background:white;box-shadow:2px 2px 10px #dbdfea;">
<div class="container header-container">
<div class="header-wrap">
<div class="header-logo">
<a href="html/index.html" class="logo-link">
<img class="logo-light" :src="logo" srcset="" alt="logo" style="width:100px;">
<img class="logo-dark logo-img" :src="logo" srcset="" alt="logo-dark" style="height:100px;">
</a>
</div>
<div class="header-toggle">
<button class="menu-toggler" data-target="mainNav">
<em class="menu-on icon ni ni-menu"></em>
<em class="menu-off icon ni ni-cross"></em>
</button>
</div><!-- .header-nav-toggle -->
<nav class="header-menu" data-content="mainNav">
<ul class="menu-list ms-lg-auto">
<li class="menu-item">
<!-- <a href="html/index.html" class="menu-link">Home</a> -->
<Link class="menu-link bold" :href="route('index')">
Home
</Link>
</li>
<li class="menu-item">
<a href="#" class="menu-link menu-toggle bold">About</a>
<div class="menu-sub">
<ul class="menu-list">
<li class="menu-item"><a href="html/index.html" class="menu-link">NetZero Initiative</a></li>
<li class="menu-item"><a href="html/index-v2.html" class="menu-link">Our Mission</a></li>
<li class="menu-item"><a href="html/index-v3.html" class="menu-link">Carbon Credit</a></li>
<li class="menu-item"><a href="html/index-v4.html" class="menu-link">MRV Services</a></li>
<li class="menu-item"><a href="html/index-v5.html" class="menu-link">Climate Finance</a></li>
<li class="menu-item"><a href="html/index-v6.html" class="menu-link">Green Investiment</a></li>
<li class="menu-item"><a href="html/index-v6.html" class="menu-link">Beneficiaries</a></li>
<li class="menu-item"><a href="html/index-v6.html" class="menu-link">Partners</a></li>
</ul>
</div>
</li>
<li class="menu-item">
<a href="#" class="menu-link bold">Contact</a>

</li>
<li class="menu-item"><a href="#home" class="menu-link bold">Carbon Markets</a></li>
<li class="menu-item"><a href="#pricing" class="menu-link bold">Projects</a></li>
<li class="menu-item"><a href="#reviews" class="menu-link bold">Report</a></li>
</ul>
<ul class="menu-btns">
<li style="float:left;">
<a href="">
<i class="bi bi-search" style="font-size:25px;color:black;"></i>
</a>
</li>
<li style="float:left;">
<Link class="btn btn-dark" :href="route('login')">
LogIn
</Link>
</li>
</ul>
</nav><!-- .nk-nav-menu -->
</div><!-- .header-warp-->
</div><!-- .container-->
</div><!-- .header-main-->
</header><!-- .header -->
<div style="padding-top:10px;">
<slot/>
</div>
<footer class="footer bg-dark" id="footer">
<div class="container">
<div class="row g-3 align-items-center justify-content-md-between py-4 py-md-5">
<div class="col-md-3">
<div class="footer-logo">
<a href="html/index.html" class="logo-link">
<img class="logo-light logo-img" :src="logo" srcset="" alt="logo">
<img class="logo-dark logo-img" :src="logo" srcset="" alt="logo-dark">
</a>
</div><!-- .footer-logo -->
</div><!-- .col -->
<div class="col-md-9 d-flex justify-content-md-end">
<ul class="link-inline gx-4">
<li><a href="#">How it works</a></li>
<li><a href="#">Service</a></li>
<li><a href="#">Help</a></li>
<li><a href="#">Contact</a></li>
</ul><!-- .footer-nav -->
</div><!-- .col -->
</div>
<hr class="hr border-light mb-0 mt-n1">
<div class="row g-3 align-items-center justify-content-md-between py-4">
<div class="col-md-8">
<div class="text-base">Copyright &copy; 2024. Template Made by <a class="text-base fw-bold" href="#">Softnio</a></div>
</div><!-- .col -->
<div class="col-md-4 d-flex justify-content-md-end">
<ul class="social">
<li><a href="#"><em class="icon ni ni-twitter"></em></a></li>
<li><a href="#"><em class="icon ni ni-facebook-f"></em></a></li>
<li><a href="#"><em class="icon ni ni-instagram"></em></a></li>
<li><a href="#"><em class="icon ni ni-pinterest"></em></a></li>
</ul><!-- .footer-icon -->
</div><!-- .col -->
</div><!-- .row -->
</div><!-- .container -->
</footer><!-- .footer -->
</div>
</template>
<script>
import { Link } from '@inertiajs/vue3';
export default {
components:{Link },
data(){return{
logo:'http://localhost/netzerocredit/resources/images/logo4.png',
background:'http://localhost/netzerocredit/resources/images/image1.png',
icons:'http://localhost/netzerocredit/resources/icons/',
image:'http://localhost/netzerocredit/resources/images/',




}}
}
</script>
<style>
button,input,select,textarea,.btn{
font-family: sans-serif;
}
.bold{
font-weight:bolder;
font-family: sans-serif;
}
p{
text-align: left;
}
.list1 li{
font-size:17px;
text-align: left;
}
.list1{
list-style-type: disc;
}
h1,h2,h3,h4,h5,h6{
font-family:sans-serif;
}
.pricing-title{
line-height:30px;
}
.bold{
font-weight: bold;
}
</style>
