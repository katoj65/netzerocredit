<template>
<HomeLayout2>
<div class="p-5 mt-5">
<div class="row mt-5">
<div class="col-12 col-md-2"></div>
<div class="col-12 col-md-8">
<div class="row">
<div class="col-12 col-md-2"></div>
<div class="col-12 col-md-8">

<div class="card m-5">
    <div class="card-header card-header-color text-white card-title-dark" style="background:#5d6d7e;">
        <div class="card-inner p-1">
            <div class="card-title-group">
            <div class="card-title">
            <h4 class="title ff-base fw-medium">Sign In </h4>
            </div>
            </div>
            </div>
    </div>


<div class="card-inner card-inner-lg">
<p>Access the NetZero Credit account using your email or telephone number.</p>
<form @submit.prevent="submit" class="pt-2">

<div class="form-group">
<div class="form-label-group">
<label class="form-label" for="default-01">Email or Telephone

<error-message-inline :message="form.errors.email"></error-message-inline>
</label>
</div>
<div class="form-control-wrap">
<input type="text" class="form-control form-control-lg" id="default-01" placeholder="Enter your email address or telephone" v-model="form.email">
</div>
</div>





<div class="form-group">
<div class="form-label-group">
<label class="form-label" for="password">Password
    <error-message-inline :message="form.errors.password"></error-message-inline>
</label>
<a class="link link-primary link-sm" href="html/pages/auths/auth-reset-v2.html">Forgot Password?</a>
</div>
<div class="form-control-wrap">

<input type="password" class="form-control form-control-lg" id="password" placeholder="Enter your password" v-model="form.password">
</div>
</div>
<div class="form-group">
<SubmitButton :title="'Submit'" :isLoading="form.processing"></SubmitButton>
</div>
</form>














<div class="form-note-s2 text-center pt-4"> New on our platform?
<Link :href="route('register')">Create an account</Link>
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
<div class="col-12 col-md-2"></div>
</div>
</div>
<div class="col-12 col-md-2"></div>
</div>
</div>
</HomeLayout2>
</template>
<script setup>
import HomeLayout2 from '../Layouts/HomeLayout2.vue';
import SubmitButton from '@/Components/SubmitButton.vue';
import { Link, useForm } from '@inertiajs/vue3';
import ErrorMessageInline from '@/Components/ErrorMessageInline.vue';
import CardHeader from '@/Components/CardHeader.vue';

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit= ()=>{
form.transform(data => ({
...data,
remember: form.remember ? 'on' : '',
})).post(route('login'), {
onFinish: () => form.reset('password'),
});
}



</script>