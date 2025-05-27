<template>
<app-layout>



<div class="card card-stretch">
<div class="card-inner-group">
<div class="card-inner position-relative card-tools-toggle">
<div class="card-title-group">
<div class="card-tools">
<div class="form-inline flex-nowrap gx-3">
<div class="form-wrap">
<h6>
Carbon Markets
</h6>
</div>
</div><!-- .form-inline -->
</div><!-- .card-tools -->


<div class="card-tools me-n1">
<ul class="btn-toolbar gx-1">
<li>
<Link class="text-muted">Voluntary Market</Link>
</li><!-- li -->
<li class="btn-toolbar-sep"></li><!-- li -->
<li>
<div class="toggle-wrap">
<div class="toggle-content" data-content="cardTools">
<Link class="text-muted">Compliance Market</Link>
</div><!-- .toggle-content -->
</div><!-- .toggle-wrap -->
</li><!-- li -->
</ul>




<!-- .btn-toolbar -->
</div><!-- .card-tools -->
</div><!-- .card-title-group -->
<div class="card-search search-wrap" data-search="search">
<div class="card-body">
<div class="search-content">

</div>
</div>
</div><!-- .card-search -->
</div><!-- .card-inner -->

















<div class="card-inner p-0">
<div class="nk-tb-list nk-tb-ulist is-compact">
<div class="nk-tb-item nk-tb-head">
<div class="nk-tb-col nk-tb-col-check">
<div class="custom-control custom-control-sm custom-checkbox notext">
</div>
</div>
<div class="nk-tb-col"><span class="sub-text">Project ID</span></div>
<div class="nk-tb-col tb-col-md"><span class="sub-text">Category</span></div>
<div class="nk-tb-col tb-col-sm"><span class="sub-text">Contact</span></div>
<div class="nk-tb-col tb-col-lg"><span class="sub-text">Address</span></div>
<div class="nk-tb-col tb-col-lg"><span class="sub-text">Active Credits</span></div>
<div class="nk-tb-col tb-col-lg"><span class="sub-text">Retired Credits</span></div>
<div class="nk-tb-col"><span class="sub-text">Status</span></div>
<div class="nk-tb-col nk-tb-col-tools text-end">
<div class="dropdown">
<a href="#" class="btn btn-xs btn-outline-light btn-icon dropdown-toggle" data-bs-toggle="dropdown" data-offset="0,5"><em class="icon ni ni-plus"></em></a>
<div class="dropdown-menu dropdown-menu-xs dropdown-menu-end">
<ul class="link-tidy sm no-bdr">
<li>
<div class="custom-control custom-control-sm custom-checkbox checked">
<input type="checkbox" class="custom-control-input" checked="" id="ph">
<label class="custom-control-label" for="ph">Phone</label>
</div>
</li>
<li>
<div class="custom-control custom-control-sm custom-checkbox">
<input type="checkbox" class="custom-control-input" id="vri">
<label class="custom-control-label" for="vri">Verified</label>
</div>
</li>
<li>
<div class="custom-control custom-control-sm custom-checkbox">
<input type="checkbox" class="custom-control-input" id="st">
<label class="custom-control-label" for="st">Status</label>
</div>
</li>
</ul>
</div>
</div>
</div>
</div><!-- .nk-tb-item -->





<div class="nk-tb-item" v-for="(n,key) in 30" :key="key">
<div class="nk-tb-col nk-tb-col-check">
<div class="custom-control custom-control-sm custom-checkbox notext">

</div>
</div>
<div class="nk-tb-col">
<div class="user-card">
<div class="user-avatar sm bg-light">
<div class="user-avatar sm bg-success-dim">
<span>WT</span>
</div>
</div>
<div class="user-name">
<span class="tb-lead">WB Time</span>
</div>
</div>
</div>
<div class="nk-tb-col tb-col-md">
<span class="badge bg-outline-gray">Cold Lead</span>
</div>
<div class="nk-tb-col tb-col-sm">
<span class="tb-lead">Manager</span>
<span class="sub-text">patrick@example.com</span>
<span class="sub-text">+942 238-4474</span>
</div>
<div class="nk-tb-col tb-col-lg">
<span>United States</span>
<span class="sub-text">Branch-1</span>
</div>
<div class="nk-tb-col tb-col-lg">
<ul class="list-status">
<li><em class="icon text-dim ni ni-check-circle"></em> <span>1</span></li>
</ul>
</div>
<div class="nk-tb-col tb-col-lg">
<ul class="list-status">
<li><em class="icon text-success ni ni-check-circle"></em> <span>0</span></li>
</ul>
</div>
<div class="nk-tb-col">
<span class="tb-status text-warning">Pending</span>
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
<li><a href="#"><em class="icon ni ni-eye"></em><span>View Details</span></a></li>
<li><a data-bs-toggle="modal" href="#editOrgLead"><em class="icon ni ni-edit"></em><span>Edit</span></a></li>
<li><a data-bs-toggle="modal" href="#deleteLead"><em class="icon ni ni-delete"></em><span>Delete</span></a></li>
</ul>
</div>
</div>
</li>
</ul>
</div>
</div><!-- .nk-tb-item -->




</div><!-- .nk-tb-list -->
</div><!-- .card-inner -->
<div class="card-inner">
<!-- <ul class="pagination justify-content-center justify-content-md-start">
<li class="page-item"><a class="page-link" href="#">Prev</a></li>
<li class="page-item"><a class="page-link" href="#">1</a></li>
<li class="page-item"><a class="page-link" href="#">2</a></li>
<li class="page-item"><span class="page-link"><em class="icon ni ni-more-h"></em></span></li>
<li class="page-item"><a class="page-link" href="#">6</a></li>
<li class="page-item"><a class="page-link" href="#">7</a></li>
<li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul> -->
<!-- .pagination -->
</div><!-- .card-inner -->
</div><!-- .card-inner-group -->
</div>

</app-layout>
</template>
<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from '@inertiajs/vue3';
</script>