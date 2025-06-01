<template>
<app-layout>
<div class="nk-block-head nk-block-head-sm">
<div class="nk-block-between">
<div class="nk-block-head-content">
<h4 class="fw-bold text-capitalize">{{ profile.name }}</h4>
<div class="nk-block-des text-soft">
<p>Reliable emission data from the agriculture sector.</p>
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
<h6 class="mb-0">
Sector Emitters
</h6>
<ul class="d-flex gx-4">
<li>
    <div class="btn-group" aria-label="Basic example">
        <Link  type="button" class="btn btn-outline-secondary" style="border-radius: 4px 0px 0px 4px;">View More</Link>
        <Link :href="route('verifier.create_farmer')" class="btn btn-dark" style="border-radius: 0px 4px 4px 0px;">New Farm</Link>

      </div>
</li>
</ul>







</div>


<div class="row g-gs">


<div class="col-xl-3 col-sm-6" v-for="(a,key) in profile.activities" :key="key">
<div class="card">
<div class="card-inner">
<div class="text-base mb-1 text-capitalize">{{ a.activity }} </div>
<div class="text-muted" style="font-size:18px;font-weight:bold;">25Mt CO2e</div>
</div>
</div>
</div>


</div>


<div class="pt-1 pb-1 mb-3 mt-4">
    <h6>Registered Farms</h6>
    </div>
<div class="row">
<div class="col-12 col-md-8">


<div class="card h-100">
<table class="table table-middle mb-0">
<thead class="table-light">
<tr>
<th class="tb-col">
<div class="fs-13px text-base">Farm ID</div>
</th>
<th class="tb-col tb-col-md">
<div class="fs-13px text-base">Location</div>
</th>
<th class="tb-col tb-col-sm">
<div class="fs-13px text-base">Type</div>
</th>
<th class="tb-col tb-col-sm">
<div class="fs-13px text-base">Status</div>
</th>
<th class="tb-col">
Contact
</th>
</tr>
</thead>
<tbody>
<tr v-for="(r,key) in farm" :key="key">
<td class="tb-col">
<div class="caption-text text-capitalize">
{{ r.farm_name }} <div class="d-sm-none dot bg-success"></div>
</div>
</td>
<td class="tb-col tb-col-md">
<div class="fs-6 text-base d-inline-flex flex-wrap gap gx-2"><span class="text-capitalize">{{ r.district }} </span> <span></span></div>
</td>
<td class="tb-col tb-col-sm">
<div class="text-base text-capitalize">
{{ r.farm_type }}
</div>
</td>
<td class="tb-col tb-col-sm">
<div :class="farmStatusCSS(r.status)" style="font-size:12px;">{{ r.status }} </div>
</td>
<td class="tb-col tb-col-start">
<a href="#" class="link">
{{ r.tel }}
</a>
</td>
</tr>

</tbody>
</table>
</div>



</div>
<div class="col-12 col-md-4">
<div class="card">
<div class="card-inner">
 <Pie/>


</div>
</div>


</div>
</div>



<div class="row mt-4">
<div class="col-12 col-md-4">
    <div class="card card-full">
        <div class="card-inner">
            <div class="card-title-group">
                <div class="card-title">
                    <h6 class="title">
                        Carbon Credit Activities
                    </h6>
                </div>
                <div class="card-tools me-n1 mt-n1">
                    <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-icon btn-trigger" data-bs-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                        <div class="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                            <ul class="link-list-opt no-bdr">
                                <li><a href="#" class="active"><span>15 Days</span></a></li>
                                <li><a href="#"><span>30 Days</span></a></li>
                                <li><a href="#"><span>3 Months</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-inner pt-0">
            <ul class="my-n2">
                <li class="align-center justify-between py-1 gx-1 border-bottom border-0 border-dashed" v-for="(c,key) in carbon_activity" :key="key">
                    <div class=" text-capitalize">{{c.name}} </div>
                    <div class="sub-text">14,356</div>
                </li><!-- li -->
               <!-- li -->
            </ul>
        </div>
    </div>
</div>


<div class="col-12 col-md-4">
    <div class="card card-full">
        <div class="card-inner d-flex flex-column h-100">
            <div class="card-title-group mb-3">
                <div class="card-title">
                    <h6 class="title">Sustainable Practices</h6>
                    <p>In the year 2025 practices.</p>
                </div>

            </div>
            <div class="progress-list gy-3">


                <div class="progress-wrap" v-for="(p,key) in practice" :key="key">
                    <div class="progress-text">
                        <div class="progress-label text-capitalize">{{ p.name }} </div>
                        <div class="progress-amount">{{ res(10*key+10) }}% </div>
                    </div>
                    <div class="progress progress-sm">
                        <div class="progress-bar" :data-progress="res(10*key+10)" :style="'width:'+res(10*key+10) +'%;'"></div>
                    </div>
                </div>





            </div>
        </div>
    </div>
</div>





<div class="col-12 col-md-4">
    <div class="card h-100">
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


<div class="row mt-4">
<div class="col-12">
    <div class="nk-block">
        <div class="card  sp-plan p-3">
            <div class="row no-gutters">
                <div class="col-md-8">
                    <div class="sp-plan-info card-inner">
                        <div class="row gx-0 gy-3">
                            <div class="col-xl-9 col-sm-8">
                                <div class="sp-plan-name">
                                    <h6 class="title"><a href="html/subscription/subscriptions-detail.html">Enterprise Plan <span class="badge bg-success rounded-pill">Active</span></a></h6>
                                    <p>Subscription ID: <span class="text-base">100394949</span></p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-4">
                                <div class="sp-plan-opt">
                                    <div class="custom-control custom-switch checked">
                                        <input type="checkbox" class="custom-control-input" id="auto-plan-p1" checked="">
                                        <label class="custom-control-label text-soft" for="auto-plan-p1">Auto Renew</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- .sp-plan-info -->
                    <div class="sp-plan-desc card-inner">
                        <ul class="row gx-1">
                            <li class="col-6 col-lg-3">
                                <p><span class="text-soft">Started On</span> Oct 12, 2018</p>
                            </li>
                            <li class="col-6 col-lg-3">
                                <p><span class="text-soft">Recuring</span> Yes</p>
                            </li>
                            <li class="col-6 col-lg-3">
                                <p><span class="text-soft">Price</span> $599.00</p>
                            </li>
                            <li class="col-6 col-lg-3">
                                <p><span class="text-soft">Access</span> Unlimited</p>
                            </li>
                        </ul>
                    </div><!-- .sp-plan-desc -->
                </div><!-- .col -->
                <div class="col-md-4">
                    <div class="sp-plan-action card-inner">
                        <div class="sp-plan-btn">
                            <a class="btn btn-primary" data-bs-toggle="modal" href="#subscription-change"><span>Change Plan</span></a>
                        </div>
                        <div class="sp-plan-note text-md-center">
                            <p>Next Billing on <span>Oct 11, 2020</span></p>
                        </div>
                    </div>
                </div><!-- .col -->
            </div><!-- .row -->
        </div><!-- .sp-plan -->
      <!-- .sp-plan -->
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
import Pie from '@/Charts/Pie.vue';
import { defineProps } from 'vue';


const props=defineProps({
response:Object,
});

const farm=computed(()=>props.response.farm.data);
const profile=computed(()=>props.response.sector.data);
const carbon_activity=computed(()=>props.response.carbon_credit_activity);
const practice=computed(()=>props.response.practice);
//
const res=(item)=>{
let m=5;
if(item>0){
m=item;
}
return m;
};

//check farm status
const farmStatusCSS=(status)=>{
let state='badge rounded-pill text-capitalize bg-success-dim text-success';
if(status=='pending'){
state='badge rounded-pill text-capitalize bg-secondary-dim text-secondary';
}
return state
}






</script>


<style scoped>
table tr td div, .caption-text, table tr td span, .text-base, .link {
font-size:14px;
}
</style>