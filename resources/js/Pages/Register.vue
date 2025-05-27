<template>
<HomeLayout2>
<div class="p-5 mt-5">
<div class="row mt-5">
<div class="col-12 col-md-2"></div>
<div class="col-12 col-md-8">
<div class="row">
<div class="col-12 col-md-3"></div>
<div class="col-12 col-md-6">
<div class="card mt-5">
    <card-header title="Create Account"></card-header>
<div class="card-inner card-inner-lg">


<form @submit.prevent="submit">
<div class="form-group">
<div class="form-label-group">
<label class="form-label" for="default-03">First Name <error-message-inline :message="form.errors.firstname"></error-message-inline></label>
</div>
<div class="form-control-wrap">
<input type="text" class="form-control form-control-lg" id="default-03" placeholder="Enter your first name" v-model="form.firstname">
</div>
</div>


<div class="form-group">
<div class="form-label-group">
<label class="form-label" for="default-04">Last Name <error-message-inline :message="form.errors.lastname"></error-message-inline></label>
</div>
<div class="form-control-wrap">
<input type="text" class="form-control form-control-lg" id="default-04" placeholder="Enter your last name" v-model="form.lastname">
</div>
</div>

<div class="form-group">
<div class="form-label-group">
<label class="form-label" for="default-05">Telephone Number <error-message-inline :message="form.errors.tel"></error-message-inline></label>
</div>
<div class="form-control-wrap">
<input type="number" class="form-control form-control-lg" id="default-05" placeholder="Enter your telephone number" v-model="form.tel">
</div>
</div>

<div class="form-group">
<div class="form-label-group">
<label class="form-label" for="default-01">Email or Telephone (Username)
     <error-message-inline :message="form.errors.email"></error-message-inline></label>
</div>
<div class="form-control-wrap">
<input type="text" class="form-control form-control-lg" id="default-01" placeholder="Enter your email address or telephone" v-model="form.email">
</div>
</div>







<div class="form-group">
<div class="form-label-group">
<label class="form-label" for="password">Password <error-message-inline :message="form.errors.password"></error-message-inline></label>
</div>
<div class="form-control-wrap">
<input type="password" class="form-control form-control-lg" id="password" placeholder="Enter your password" v-model="form.password">
</div>
</div>




<div class="form-group">
<div class="form-label-group">
<label class="form-label" for="password2">Confirm Password</label>
</div>
<div class="form-control-wrap">
<input type="password" class="form-control form-control-lg" id="password2" placeholder="Confirm password" v-model="form.password_confirmation">
</div>
</div>





<div class="form-group">
<submit-button :title="'Sign Up'" :isLoading="form.processing"></submit-button>
</div>



</form>





<div class="form-note-s2 text-center pt-4">Already have account? <Link :href="route('login')">Sign In</Link>
</div>
<div class="text-center pt-4 pb-3">
<h6 class="overline-title overline-title-sap"><span>OR</span></h6>
</div>
<ul class="nav justify-center gx-4">
<li class="nav-item"><a class="link link-primary fw-normal py-2 px-3" href="#">Facebook</a></li>
<li class="nav-item"><a class="link link-primary fw-normal py-2 px-3" href="#">Google</a></li>
</ul>
</div>
</div>
</div>
<div class="col-12 col-md-3"></div>
</div>
</div>
<div class="col-12 col-md-2"></div>
</div>
</div>
</HomeLayout2>
</template>
<script setup>
import HomeLayout2 from '@/Layouts/HomeLayout2.vue';
import SubmitButton from '@/Components/SubmitButton.vue';
import { Link, useForm, } from '@inertiajs/vue3';
import ErrorMessageInline from '@/Components/ErrorMessageInline.vue';
import CardHeader from '@/Components/CardHeader.vue';

const props=defineProps({
title:String,
});


const form=useForm({
firstname:'',
lastname:'',
tel:'',
email:'',
password:'',
password_confirmation: '',
terms: false,
});

let isLoading=form.processing;


const submit = () => {
isLoading=true;
form.post(route('register'), {
onFinish: () => form.reset('password', 'password_confirmation'),





});
};



</script>