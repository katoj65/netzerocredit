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

 <Bar/>






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
import Bar from '@/Charts/Bar.vue';


const props=defineProps({
response:Object,
});

const farm=computed(()=>props.response.farm.data);
const profile=computed(()=>props.response.sector.data);









</script>
