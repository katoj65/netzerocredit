<template>
<AppLayout>



<div class="nk-block">
<div class="row g-gs">
<div class="col-lg-4 col-xl-4 col-xxl-3">
<div class="card h-100">
<div class="card-inner-group">

<div class="card-inner border-0">
<div class="user-card user-card-s2 border-0">
<div class="user-avatar lg bg-dark">
<em class="icon ni ni-user-fill"></em>
</div>
<div class="user-info">
<div class="badge bg-light rounded-pill ucap">{{ farm.role }} </div>
<h5 class="ff-base fw-medium">{{ farm.firstname }} {{ farm.lastname }} </h5>
<span class="sub-text">TEL: {{ farm.tel }}</span>
</div>
</div>
</div>



<div class="card-inner border-0">
<div class="row text-center">
<div class="col-4">
<div class="profile-stats">
<span class="amount">0</span>
<span class="sub-text">Credit Issued</span>
</div>
</div>
<div class="col-4">
<div class="profile-stats">
<span class="amount">0</span>
<span class="sub-text">Active</span>
</div>
</div>
<div class="col-4">
<div class="profile-stats">
<span class="amount">0</span>
<span class="sub-text">Retired</span>
</div>
</div>
</div>
</div><!-- .card-inner -->




<div class="card-inner border-0">
<h6 class="overline-title mb-2">Farmer Details</h6>
<div class="row g-3">
<div class="col-sm-6 col-md-4 col-lg-12">
<span class="lead-text">Gender:</span>
<span>{{ farm.gender }} </span>
</div>
<div class="col-sm-6 col-md-4 col-lg-12">
<span class="lead-text">Date of Birth:</span>
<span>
{{ farm.dob }}
</span>
</div>
<div class="col-sm-6 col-md-4 col-lg-12">
<span class="lead-text">Contacts:</span>
<span>{{ farm.email }} <br/>
{{ farm.tel }} </span>
</div>
<div class="col-sm-6 col-md-4 col-lg-12">
<span class="lead-text">District:</span>
<span> {{ farm.district }} </span>
</div>
<div class="col-sm-6 col-md-4 col-lg-12">
<span class="lead-text">Parish:</span>
<span>
{{ farm.parish }}
</span>
</div>
<div class="col-sm-6 col-md-4 col-lg-12">
<span class="lead-text">Village</span>
<span>
{{ farm.village }}
</span>
</div>
<div class="col-sm-6 col-md-4 col-lg-12">
<span class="lead-text">Registration Date:</span>
<span>

</span>
</div>
</div>
</div><!-- .card-inner -->


</div>
</div>
</div><!-- .col -->
<div class="col-lg-8 col-xl-8 col-xxl-9">
<div class="card h-100">
<card-header title="Verify Farm Details">
<a href="" class=" text-white p-1 m-0">
    <i class="bi bi-pencil-square" style="font-size:20px;"></i>
</a>
</card-header>












<div class="card-inner ">

<div class="nk-block">
<h6 class="ff-base fw-medium" style="text-transform:capitalize;">
{{ farm.farm_name }}
</h6>




<div class="card border-0 h-100">
<ul class="data-list is-compact">
<li class="data-item border-0">
<div class="data-col">
    <div class="data-label">Farm Size</div>
    <div class="data-value">
        {{ farm.farm_size }} Acres
    </div>
</div>
</li>
<li class="data-item border-0">
<div class="data-col">
    <div class="data-label">Type of Farm </div>
    <div class="data-value">{{ farm.farm_type }} </div>
</div>
</li>
<li class="data-item border-0">
<div class="data-col">
    <div class="data-label">Farm Items</div>
    <div class="data-value">
    {{ farm.farm_items }}
    </div>
</div>
</li>
<li class="data-item border-0">
<div class="data-col">
    <div class="data-label">Land Ownership </div>
    <div class="data-value">
        {{ farm.land_ownership }}
    </div>
</div>
</li>
<li class="data-item border-0">
<div class="data-col">
    <div class="data-label">Farm Sustainable Practices </div>
    <div class="data-value">
        <span class="badge bg-outline-secondary" v-for="(i,key) in farm.sustainable_practice" :key="key" style="font-size:13px;margin:3px;padding:5px;">{{ i }} </span>
    </div>
</div>
</li>
<li class="data-item border-0">
<div class="data-col">
    <div class="data-label">Number of Trees on Farm </div>
    <div class="data-value">
        {{ farm.count_trees }}
    </div>
</div>
</li>
<li class="data-item border-0">
<div class="data-col">
    <div class="data-label">Number of Animals on Farm</div>
    <div class="data-value">
        {{ farm.count_animals }}
    </div>
</div>
</li>
<li class="data-item border-0">
<div class="data-col">
    <div class="data-label">Soil Quality</div>
    <div class="data-value">
        {{ farm.soil_quality }}
    </div>
</div>
</li>
<li class="data-item border-0">
<div class="data-col">
    <div class="data-label">Water Sources </div>
    <div class="data-value">
        {{ farm.water_source }}
    </div>
</div>
</li>
<li class="data-item border-0">
<div class="data-col">
    <div class="data-label">Climate Challenge</div>
    <div class="data-value text-break">

        <span class="badge bg-outline-secondary" v-for="(r,key) in farm.climate_challenge" :key="key" style="font-size:13px;margin:3px;padding:5px;">{{ r }} </span>

    </div>
</div>
</li>
<li class="data-item">
<div class="data-col">
    <div class="data-label">Farm Location</div>
    <div class="data-value">
        <a href="https://t.me/tokenlite" target="_blank">View Map</a>
    </div>
</div>
</li>
</ul>
</div>




</div>
<div class="nk-block">
<h6 class="lead-text mb-3">Verify Farm Data</h6>
<div class="row g-3">
<div class="col-xl-12 col-xxl-4">

<div class="card">
<div class="card-inner">
    <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
            <div class="icon-circle icon-circle-lg bg-secondary">
                <i class="bi bi-shield-exclamation text-white" v-if="farm.status=='pending'"></i>
                <i class="bi bi-check-circle text-white" v-else-if="farm.status=='verified'"></i>
            </div>
            <div class="ms-3">
                <h6 class="lead-text">Verify farmer's information</h6>
                <span class="lead-text text-muted" >Date: {{ date }} </span>
            </div>
        </div>
        <ul class="btn-toolbar justify-center gx-1 me-n1 flex-nowrap" v-if="farm.status=='pending'">
            <li>
<form @submit.prevent="submit">
<submit-button title="Verify" :isLoading="form.processing"></submit-button>
</form>
            </li>
        </ul>
        <span v-else-if="farm.status=='verified'" class="text-success text-bold">Verified</span>
    </div>
</div>
</div>
</div><!-- .col -->

</div><!-- .row -->
</div>

</div><!-- .card-inner -->
</div><!-- .card -->
</div><!-- .col -->
</div><!-- .row -->
</div>


</AppLayout>
</template>
<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import CardHeader from '@/Components/CardHeader.vue';
import { defineProps, computed } from 'vue';
import SubmitButton from '@/Components/SubmitButton.vue';
import { useForm } from '@inertiajs/vue3';
import { ElNotification } from 'element-plus'

const props=defineProps({
title:String,
response:Array

});

const farm=computed(()=>props.response.farm.data);
var date=new Date;
date=date.getDate()+' - '+date.getMonth()+' - '+date.getFullYear();
const form=useForm({
farm_id:props.response.farm.data.farm_id,
});



const submit=()=>{
form.put(route('update_farm_status'),{
onSuccess:()=>{
ElNotification({
title: 'Successful',
message: 'Farm details have been verified.',
type: 'success',
});
}


}
)

}



</script>
<style scoped>
.data-value{
text-transform: capitalize;
border:none;
}
.data-item{
border:none;
}
.g-3{
text-transform:capitalize;
}
</style>