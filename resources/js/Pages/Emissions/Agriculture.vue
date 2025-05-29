<template>
<app-layout>



<div class="nk-block-head nk-block-head-sm">
<div class="nk-block-between">
<div class="nk-block-head-content">
<h5 class="fw-bold text-capitalize">
{{ profile.name }}
</h5>
<div class="nk-block-des text-soft">
<p>Welcome to DashLite Dashboard Template.</p>
</div>
</div><!-- .nk-block-head-content -->
<div class="nk-block-head-content">




</div><!-- .nk-block-head-content -->
</div><!-- .nk-block-between -->
</div>




<div class="card p-0 m-0 border-0">
<div class="card-inner p-0">
<div class="tab-content mt-0">


<div class="tab-pane fade active show" id="payment-billing-tab-pane" role="tabpanel">
<div class="d-flex flex-wrap align-items-center justify-content-between mb-3">
<h5 class="mb-0">
Sector Emitters
</h5>
<ul class="d-flex gx-4">
<li>
<a href="#cancelSubscriptionModal" class="btn btn-secondary">View more</a>
</li>
<li>
<Link :href="route('verifier.create_farmer')" class="btn btn-outline-secondary">New Farm</Link>
</li>
</ul>







</div>


<div class="row g-gs">


<div class="col-xl-3 col-sm-6" v-for="(a,key) in profile.activities" :key="key">
<div class="card">
<div class="card-inner">
<div class="text-base mb-1 text-capitalize">{{ a.activity }} </div>
<h5>25Mt CO2e</h5>
</div>
</div>
</div>


</div>


<div class="pt-1 pb-1 mb-3 mt-4">
    <h5>Registered Farms</h5>
    </div>
<div class="row">
<div class="col-12 col-md-8">


<div class="card">
<table class="table table-middle mb-0">
<thead class="table-light">
<tr>
<th class="tb-col">
<div class="fs-13px text-base">Subscription</div>
</th>
<th class="tb-col tb-col-md">
<div class="fs-13px text-base">Payment Date</div>
</th>
<th class="tb-col tb-col-sm">
<div class="fs-13px text-base">Total</div>
</th>
<th class="tb-col tb-col-sm">
<div class="fs-13px text-base">Status</div>
</th>
<th class="tb-col"></th>
</tr>
</thead>
<tbody>
<tr v-for="(r,key) in farm" :key="key">
<td class="tb-col">
<div class="caption-text">Starter - 12 Months <div class="d-sm-none dot bg-success"></div>
</div>
</td>
<td class="tb-col tb-col-md">
<div class="fs-6 text-base d-inline-flex flex-wrap gap gx-2"><span>Feb 15,2023 </span> <span>02:31 PM</span></div>
</td>
<td class="tb-col tb-col-sm">
<div class="fs-6 text-base">$23.00</div>
</td>
<td class="tb-col tb-col-sm">
<div class="badge bg-success-dim text-success rounded-pill">Paid</div>
</td>
<td class="tb-col tb-col-end">
<a href="#" class="link">Get Invoice</a>
</td>
</tr>

</tbody>
</table>
</div>



</div>
<div class="col-12 col-md-4">

    <div class="card h-100">
        <div class="card-inner h-100 stretch flex-column">
            <div class="card-title-group">
                <div class="card-title card-title-sm">
                    <h6 class="title">By Device</h6>
                </div>
                <div class="card-tools">
                    <div class="drodown">
                        <a href="#" class="dropdown-toggle dropdown-indicator btn btn-sm btn-outline-light btn-white" data-bs-toggle="dropdown">30 Days</a>
                        <div class="dropdown-menu dropdown-menu-end dropdown-menu-xs">
                            <ul class="link-list-opt no-bdr">
                                <li><a href="#"><span>7 Days</span></a></li>
                                <li><a href="#"><span>15 Days</span></a></li>
                                <li><a href="#"><span>30 Days</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="device-status my-auto">
                <div class="device-status-ck">
                    <canvas class="analytics-doughnut" id="deviceStatusData" width="618" height="320" style="display: block; box-sizing: border-box; height: 160px; width: 309px;"></canvas>
                </div>
                <div class="device-status-group">
                    <div class="device-status-data">
                        <em data-color="#798bff" class="icon ni ni-monitor" style="color: rgb(121, 139, 255);"></em>
                        <div class="title">Desktop</div>
                        <div class="amount">84.5%</div>
                        <div class="change up text-danger"><em class="icon ni ni-arrow-long-up"></em>4.5%</div>
                    </div>
                    <div class="device-status-data">
                        <em data-color="#baaeff" class="icon ni ni-mobile" style="color: rgb(186, 174, 255);"></em>
                        <div class="title">Mobile</div>
                        <div class="amount">14.2%</div>
                        <div class="change up text-danger"><em class="icon ni ni-arrow-long-up"></em>133.2%</div>
                    </div>
                    <div class="device-status-data">
                        <em data-color="#7de1f8" class="icon ni ni-tablet" style="color: rgb(125, 225, 248);"></em>
                        <div class="title">Tablet</div>
                        <div class="amount">1.3%</div>
                        <div class="change up text-danger"><em class="icon ni ni-arrow-long-up"></em>25.3%</div>
                    </div>
                </div><!-- .device-status-group -->
            </div><!-- .device-status -->
        </div>
    </div>








</div>
</div>




</div><!-- .tab-pane -->
</div><!-- .tab-content -->
</div>









</div>

















</app-layout>
</template>
<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from '@inertiajs/vue3';
import { computed } from 'vue';


const props=defineProps({
response:Object,
});

const farm=computed(()=>props.response.farm.data);
const profile=computed(()=>props.response.sector.data);









</script>
