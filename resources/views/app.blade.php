<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title inertia>{{ config('app.name', 'Laravel') }}</title>
<!-- Fonts -->
<link rel="preconnect" href="https://fonts.bunny.net">
<link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
<link href="/public/css/dashlite.css" rel="stylesheet" />
<link href="/public/css/theme.css" rel="stylesheet" />
<!-- Load required Bootstrap and BootstrapVue CSS -->
<link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap@4.6.1/dist/css/bootstrap.min.css" />
<link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css" />
<!-- Load polyfills to support older browsers -->
<script src="https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js?version=4.8.0&features=es2015%2CIntersectionObserver" crossorigin="anonymous"></script>
<!-- Load Vue followed by BootstrapVue -->
<script src="https://unpkg.com/vue@2.6.12/dist/vue.min.js"></script>
<script src="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js"></script>
<!-- Load the following for BootstrapVueIcons support -->
<script src="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue-icons.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
<!-- Scripts -->

</head>
@routes
@vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue","public/css/dashlite.css?ver=3.2.4","public/css/theme.css?ver=3.2.4","public/css/libs/fontawesome-icons.css"])
@inertiaHead
<style>
div,p,h1,h2,h3,h4,h5,h6,span,li,input,button,select{
font-family: sans-serif;
}
p{
font-size:15px;
}
.carbon-header-dark{
background:#5d6d7e;
}
input:focus {
  outline: none;
  box-shadow: none;
  border-color: transparent; /* Optional */
}
</style>
</head>
<body>
@inertia
</body>
</html>
