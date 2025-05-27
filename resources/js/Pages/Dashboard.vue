<template>
<AppLayout title="Dashboard">


<div class="row g-4">
<div class="col-12 col-md-3" v-for="(m,key) in menu" :key="key">
<Link>
<div class="card card-full">
<div class="card-inner">
<div class="d-flex align-items-center justify-content-between mb-1">
<div class="fs-6 text-dark text-opacity-75 mb-0">
{{ m.title }}

</div>
<span class="link link-dark">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 118" style="width:50px;">
<path d="M8.916,94.745C-.318,79.153-2.164,58.569,2.382,40.578,7.155,21.69,19.045,9.451,35.162,4.32,46.609.676,58.716.331,70.456,1.845,84.683,3.68,99.57,8.694,108.892,21.408c10.03,13.679,12.071,34.71,10.747,52.054-1.173,15.359-7.441,27.489-19.231,34.494-10.689,6.351-22.92,8.733-34.715,10.331-16.181,2.192-34.195-.336-47.6-12.281A47.243,47.243,0,0,1,8.916,94.745Z" transform="translate(0 -1)" fill="#f6faff"></path>
<rect x="18" y="32" width="84" height="50" rx="4" ry="4" fill="#fff"></rect>
<rect x="26" y="44" width="20" height="12" rx="1" ry="1" fill="#e5effe"></rect>
<rect x="50" y="44" width="20" height="12" rx="1" ry="1" fill="#e5effe"></rect>
<rect x="74" y="44" width="20" height="12" rx="1" ry="1" fill="#e5effe"></rect>
<rect x="38" y="60" width="20" height="12" rx="1" ry="1" fill="#e5effe"></rect>
<rect x="62" y="60" width="20" height="12" rx="1" ry="1" fill="#e5effe"></rect>
<path d="M98,32H22a5.006,5.006,0,0,0-5,5V79a5.006,5.006,0,0,0,5,5H52v8H45a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H73a2,2,0,0,0,2-2V94a2,2,0,0,0-2-2H66V84H98a5.006,5.006,0,0,0,5-5V37A5.006,5.006,0,0,0,98,32ZM73,94v4H45V94Zm-9-2H54V84H64Zm37-13a3,3,0,0,1-3,3H22a3,3,0,0,1-3-3V37a3,3,0,0,1,3-3H98a3,3,0,0,1,3,3Z" transform="translate(0 -1)" fill="#798bff"></path>
<path d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z" transform="translate(0 -1)" fill="#6576ff"></path>
<path d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z" transform="translate(0 -1)" fill="none" stroke="#6576ff" stroke-miterlimit="10" stroke-width="2"></path>
<line x1="40" y1="22" x2="57" y2="22" fill="none" stroke="#fffffe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
<line x1="40" y1="27" x2="57" y2="27" fill="none" stroke="#fffffe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
<line x1="40" y1="32" x2="50" y2="32" fill="none" stroke="#fffffe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
<line x1="30.5" y1="87.5" x2="30.5" y2="91.5" fill="none" stroke="#9cabff" stroke-linecap="round" stroke-linejoin="round"></line>
<line x1="28.5" y1="89.5" x2="32.5" y2="89.5" fill="none" stroke="#9cabff" stroke-linecap="round" stroke-linejoin="round"></line>
<line x1="79.5" y1="22.5" x2="79.5" y2="26.5" fill="none" stroke="#9cabff" stroke-linecap="round" stroke-linejoin="round"></line>
<line x1="77.5" y1="24.5" x2="81.5" y2="24.5" fill="none" stroke="#9cabff" stroke-linecap="round" stroke-linejoin="round"></line>
<circle cx="90.5" cy="97.5" r="3" fill="none" stroke="#9cabff" stroke-miterlimit="10"></circle>
<circle cx="24" cy="23" r="2.5" fill="none" stroke="#9cabff" stroke-miterlimit="10"></circle>
</svg>

<!-- <em class="icon ni ni-view-grid-fill"></em> -->

</span>
</div>
<h5 class="fs-9 text-muted" style="font-size:17px;">
{{ m.stats }}
<small class="fs-3"></small>
</h5>
<div class="fs-7 text-dark text-opacity-75 mt-1">
<span class="text-muted">
{{ m.subtitle }} </span></div>
</div>
</div><!-- .card -->

</Link>
</div><!-- .col -->
</div>











<div class="row mt-4">
<div class="col-lg-8">
<div class="card card-full h-100" id="card">
<div class="card-inner">
<div class="card-title-group">
<div class="card-title">
<h6 class="title"><span>
FARMERS
</span>
<!-- <a href="#" class="link d-none d-sm-inline">See History</a> -->
</h6>
</div>
<div class="card-tools">
<Link class="btn btn-outline-light" :href="route('verifier.create_farmer')">New Farmer</Link>
</div>
</div>
</div><!-- .card-inner -->
<div class="card-inner p-0 ">

</div><!-- .card-inner -->
<div class="card-inner-sm  text-center d-sm-none">
<a href="#" class="btn btn-link btn-block">See History</a>
</div><!-- .card-inner -->




<div class="card-inner p-0">
<div class="nk-tb-list nk-tb-ulist is-compact">
<div class="nk-tb-item nk-tb-head">

<div class="nk-tb-col"><span class="sub-text">Farm ID</span></div>
<div class="nk-tb-col tb-col-md"><span class="sub-text">Telephone</span></div>
<div class="nk-tb-col tb-col-md"><span class="sub-text">Location</span></div>
<div class="nk-tb-col tb-col-md"><span class="sub-text">Land Size</span></div>
<div class="nk-tb-col"><span class="sub-text">Land Ownership</span></div>
<div class="nk-tb-col"><span class="sub-text"> </span></div>
<div class="nk-tb-col nk-tb-col-tools text-end">

</div>
</div><!-- .nk-tb-item -->





<div class="nk-tb-item" v-for="(f,key) in farm" :key="key">

<div class="nk-tb-col">
<span style="text-transform:capitalize;">{{ f.farm_name }}</span>
</div>
<div class="nk-tb-col tb-col-md">
<span>
{{ f.tel }}
</span>
</div>
<div class="nk-tb-col tb-col-md">
<span>{{ f.district }} </span>
</div>
<div class="nk-tb-col tb-col-md">
<span>{{ f.farm_size }} Acres</span>
</div>
<div class="nk-tb-col">
<span>{{ f.land_ownership }} </span>
</div>
<div class="nk-tb-col">
<span class="text-success">Present</span>
</div>
<div class="nk-tb-col nk-tb-col-tools">
<ul class="nk-tb-actions gx-2">
<li class="nk-tb-action-hidden">
<a href="#" class="btn btn-sm btn-icon btn-trigger" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Send Email" data-bs-original-title="Send Email">
<em class="icon ni ni-mail-fill"></em>
</a>
</li>
<li>
<div class="drodown">
<a href="#" class="btn btn-sm btn-icon btn-trigger dropdown-toggle" data-bs-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
<div class="dropdown-menu dropdown-menu-end">
<ul class="link-list-opt no-bdr">
<li><a data-bs-toggle="modal" href="#employeeView"><em class="icon ni ni-focus"></em><span>Quick View</span></a></li>
<li><a data-bs-toggle="modal" href="#timeDelete"><em class="icon ni ni-delete"></em><span>Delete</span></a></li>
</ul>
</div>
</div>
</li>
</ul>
</div>
</div><!-- .nk-tb-item -->

</div><!-- .nk-tb-list -->
</div>







</div><!-- .card -->
</div>






<div class="col-lg-4">
<div class="card" id="card">
<div class="card-inner">
<div class="card-title-group mb-1">
<div class="card-title">
<h6 class="title">Investment Overview</h6>
<p>The investment overview of your platform. <a href="#">All Investment</a></p>
</div>
</div>
<ul class="nav nav-tabs nav-tabs-card nav-tabs-xs" role="tablist">
<li class="nav-item" role="presentation">
<a class="nav-link active" data-bs-toggle="tab" href="#overview" aria-selected="true" role="tab">Overview</a>
</li>
<li class="nav-item" role="presentation">
<a class="nav-link" data-bs-toggle="tab" href="#thisyear" aria-selected="false" tabindex="-1" role="tab">This Year</a>
</li>
<li class="nav-item" role="presentation">
<a class="nav-link" data-bs-toggle="tab" href="#alltime" aria-selected="false" tabindex="-1" role="tab">All Time</a>
</li>
</ul>
<div class="tab-content mt-0">
<div class="tab-pane active" id="overview" role="tabpanel">
<div class="invest-ov gy-2">
<div class="subtitle">Currently Actived Investment</div>
<div class="invest-ov-details">
<div class="invest-ov-info">
<div class="amount">49,395.395 <span class="currency currency-usd">USD</span></div>
<div class="title">Amount</div>
</div>
<div class="invest-ov-stats">
<div><span class="amount">56</span><span class="change up text-danger"><em class="icon ni ni-arrow-long-up"></em>1.93%</span></div>
<div class="title">Plans</div>
</div>
</div>
<div class="invest-ov-details">
<div class="invest-ov-info">
<div class="amount">49,395.395 <span class="currency currency-usd">USD</span></div>
<div class="title">Paid Profit</div>
</div>
</div>
</div>
<div class="invest-ov gy-2">
<div class="subtitle">Investment in this Month</div>
<div class="invest-ov-details">
<div class="invest-ov-info">
<div class="amount">49,395.395 <span class="currency currency-usd">USD</span></div>
<div class="title">Amount</div>
</div>
<div class="invest-ov-stats">
<div><span class="amount">23</span><span class="change down text-danger"><em class="icon ni ni-arrow-long-down"></em>1.93%</span></div>
<div class="title">Plans</div>
</div>
</div>
</div>
</div>
<div class="tab-pane" id="thisyear" role="tabpanel">
<div class="invest-ov gy-2">
<div class="subtitle">Currently Actived Investment</div>
<div class="invest-ov-details">
<div class="invest-ov-info">
<div class="amount">89,395.395 <span class="currency currency-usd">USD</span></div>
<div class="title">Amount</div>
</div>
<div class="invest-ov-stats">
<div><span class="amount">96</span><span class="change up text-danger"><em class="icon ni ni-arrow-long-up"></em>1.93%</span></div>
<div class="title">Plans</div>
</div>
</div>
<div class="invest-ov-details">
<div class="invest-ov-info">
<div class="amount">99,395.395 <span class="currency currency-usd">USD</span></div>
<div class="title">Paid Profit</div>
</div>
</div>
</div>
<div class="invest-ov gy-2">
<div class="subtitle">Investment in this Month</div>
<div class="invest-ov-details">
<div class="invest-ov-info">
<div class="amount">149,395.395 <span class="currency currency-usd">USD</span></div>
<div class="title">Amount</div>
</div>
<div class="invest-ov-stats">
<div><span class="amount">83</span><span class="change down text-danger"><em class="icon ni ni-arrow-long-down"></em>1.93%</span></div>
<div class="title">Plans</div>
</div>
</div>
</div>
</div>
<div class="tab-pane" id="alltime" role="tabpanel">
<div class="invest-ov gy-2">
<div class="subtitle">Currently Actived Investment</div>
<div class="invest-ov-details">
<div class="invest-ov-info">
<div class="amount">249,395.395 <span class="currency currency-usd">USD</span></div>
<div class="title">Amount</div>
</div>
<div class="invest-ov-stats">
<div><span class="amount">556</span><span class="change up text-danger"><em class="icon ni ni-arrow-long-up"></em>1.93%</span></div>
<div class="title">Plans</div>
</div>
</div>
<div class="invest-ov-details">
<div class="invest-ov-info">
<div class="amount">149,395.395 <span class="currency currency-usd">USD</span></div>
<div class="title">Paid Profit</div>
</div>
</div>
</div>
<div class="invest-ov gy-2">
<div class="subtitle">Investment in this Month</div>
<div class="invest-ov-details">
<div class="invest-ov-info">
<div class="amount">249,395.395 <span class="currency currency-usd">USD</span></div>
<div class="title">Amount</div>
</div>
<div class="invest-ov-stats">
<div><span class="amount">223</span><span class="change down text-danger"><em class="icon ni ni-arrow-long-down"></em>1.93%</span></div>
<div class="title">Plans</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>







</div>
</div>











</AppLayout>
</template>
<script setup>
// import AppLayout2 from '@/Layouts/AppLayout2.vue';

import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from '@inertiajs/vue3';
import { computed } from 'vue';
import { reactive } from 'vue';

const props=defineProps({
response:Array,
});

const menu=reactive([
{title:'Agriculture', stats:'200Mt CO2e', subtitle:'100K Carbon Credits', icon:''},
{title:'Land Use & Forestry', stats:'200Mt CO2e', subtitle:'100K Carbon Credits', icon:''},
{title:'Energy', stats:'200Mt CO2e', subtitle:'100K Carbon Credits', icon:''},
{title:'Industrialisation', stats:'200Mt CO2e', subtitle:'100K Carbon Credits', icon:''},
]);








const farm=computed(()=>props.response.farm.data);


</script>
<style scoped>
.strong{
font-weight: bold;
}
</style>