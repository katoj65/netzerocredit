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
<div class="text-muted">25Mt CO2e</div>
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
<div class="fs-6 text-base text-capitalize">
{{ r.farm_type }}
</div>
</td>
<td class="tb-col tb-col-sm">
<div class="badge bg-success-dim text-success rounded-pill text-capitalize">{{ r.status }} </div>
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









</script>
