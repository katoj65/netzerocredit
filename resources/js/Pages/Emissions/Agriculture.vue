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
<div class="tab-pane fade" id="profile-tab-pane" role="tabpanel">
<div class="nk-data data-list">
<div class="data-head">
<h6 class="overline-title">Basics</h6>
</div>
<div class="data-item" data-bs-toggle="modal" data-bs-target="#profile-edit">
<div class="data-col">
<span class="data-label">Full Name</span>
<span class="data-value">Abu Bin Ishtiyak</span>
</div>
<div class="data-col data-col-end"><span class="data-more"><em class="icon ni ni-forward-ios"></em></span></div>
</div><!-- data-item -->
<div class="data-item" data-bs-toggle="modal" data-bs-target="#profile-edit">
<div class="data-col">
<span class="data-label">Display Name</span>
<span class="data-value">Ishtiyak</span>
</div>
<div class="data-col data-col-end"><span class="data-more"><em class="icon ni ni-forward-ios"></em></span></div>
</div><!-- data-item -->
<div class="data-item">
<div class="data-col">
<span class="data-label">Email</span>
<span class="data-value">info@softnio.com</span>
</div>
<div class="data-col data-col-end"><span class="data-more disable"><em class="icon ni ni-lock-alt"></em></span></div>
</div><!-- data-item -->
<div class="data-item" data-bs-toggle="modal" data-bs-target="#profile-edit">
<div class="data-col">
<span class="data-label">Phone Number</span>
<span class="data-value text-soft">Not add yet</span>
</div>
<div class="data-col data-col-end"><span class="data-more"><em class="icon ni ni-forward-ios"></em></span></div>
</div><!-- data-item -->
<div class="data-item" data-bs-toggle="modal" data-bs-target="#profile-edit">
<div class="data-col">
<span class="data-label">Date of Birth</span>
<span class="data-value">29 Feb, 1986</span>
</div>
<div class="data-col data-col-end"><span class="data-more"><em class="icon ni ni-forward-ios"></em></span></div>
</div><!-- data-item -->
<div class="data-item" data-bs-toggle="modal" data-bs-target="#profile-edit" data-tab-target="#address">
<div class="data-col">
<span class="data-label">Address</span>
<span class="data-value">2337 Kildeer Drive,<br>Kentucky, Canada</span>
</div>
<div class="data-col data-col-end"><span class="data-more"><em class="icon ni ni-forward-ios"></em></span></div>
</div><!-- data-item -->
</div><!-- data-list -->
<div class="nk-data data-list">
<div class="data-head">
<h6 class="overline-title">Preferences</h6>
</div>
<div class="data-item">
<div class="data-col">
<span class="data-label">Language</span>
<span class="data-value">English (United State)</span>
</div>
<div class="data-col data-col-end"><a href="#" class="link link-primary">Change Language</a></div>
</div><!-- data-item -->
<div class="data-item">
<div class="data-col">
<span class="data-label">Date Format</span>
<span class="data-value">M d, YYYY</span>
</div>
<div class="data-col data-col-end"><a href="#" class="link link-primary">Change</a></div>
</div><!-- data-item -->
<div class="data-item">
<div class="data-col">
<span class="data-label">Timezone</span>
<span class="data-value">Bangladesh (GMT +6)</span>
</div>
<div class="data-col data-col-end"><a href="#" class="link link-primary">Change</a></div>
</div><!-- data-item -->
</div><!-- data-list -->
</div><!-- .tab-pane -->




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



<div class="mt-4 pt-1 pb-1 mb-3">
<h5>Billing History</h5>
</div>
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
