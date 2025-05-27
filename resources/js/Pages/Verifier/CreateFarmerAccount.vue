<template>
<app-layout>

<div>
<div class="row">
<div class="col-md-1 col-12">
</div>
<div class="col-md-8 col-12">
<form @submit.prevent="submit">






<div class="card mt-3 " id="card">
<card-header title="Register New Farmer">

</card-header>




<div class="card-inner">
<div class="row gy-4 p-3">



<div class="col-sm-6">
    <div class="form-group">
        <label class="form-label" for="fname">First Name <error-message-inline :message="form.errors.firstname"></error-message-inline></label>
        <div class="form-control-wrap" >
            <input type="text"  class="form-control required" id="fname" placeholder="Enter first name" v-model="form.firstname">
        </div>
    </div>
    </div>



    <div class="col-sm-6">
        <div class="form-group">
            <label class="form-label" for="lname">Last Name <error-message-inline :message="form.errors.lastname"></error-message-inline> </label>
            <div class="form-control-wrap" >
                <input type="text"  class="form-control required" id="lname" placeholder="Enter last name" v-model="form.lastname">
            </div>
        </div>
    </div>


<div class="col-sm-6">
<div class="form-group">
<label class="form-label" for="dob">Date of Birth <error-message-inline :message="form.errors.dob"></error-message-inline> </label>
<div class="form-control-wrap" >
    <input type="date"  class="form-control required" id="dob" placeholder="Enter first name" v-model="form.dob">
</div>
</div>
</div>






<div class="col-sm-6">
    <div class="form-group">
    <label class="form-label" for="gender">Gender <error-message-inline :message="form.errors.gender"></error-message-inline> </label>
    <div class="form-control-wrap" >
    <el-select placeholder="Select" size="large" style="width: 100%;" v-model="form.gender" id="gender">
    <el-option v-for="(g,key) in gender" :key="key" :value="g.name">{{ g.name }} </el-option>
    </el-select>
    </div>
    </div>
    </div>






    <div class="col-sm-6">
        <div class="form-group">
        <label class="form-label" for="tel">Telephone <error-message-inline :message="form.errors.tel"></error-message-inline></label>
        <div class="form-control-wrap" >
        <input type="text"  class="form-control required" id="tel" placeholder="Enter telephone number" v-model="form.tel">
        </div>
        </div>
        </div>


        <div class="col-sm-6">
        <div class="form-group">
        <label class="form-label" for="address">Email Address <error-message-inline :message="form.errors.email"></error-message-inline></label>
        <div class="form-control-wrap" >
        <input type="text"  class="form-control required" id="address" placeholder="Enter email address" v-model="form.email">
        </div>
        </div>
        </div>




        <div class="col-sm-6">
            <div class="form-group">
            <label class="form-label" for="district">District <error-message-inline :message="form.errors.district"></error-message-inline></label>
            <div class="form-control-wrap" >
            <input type="text"  class="form-control required" id="district" placeholder="Enter district" v-model="form.district">
            </div>
            </div>
            </div>



            <div class="col-sm-6">
            <div class="form-group">
            <label class="form-label" for="parish">Parish <error-message-inline :message="form.errors.parish"></error-message-inline></label>
            <div class="form-control-wrap" >
            <input type="text"  class="form-control required" id="parish" placeholder="Enter parish" v-model="form.parish">
            </div>
            </div>
            </div>


            <div class="col-sm-12">
            <div class="form-group">
            <label class="form-label" for="village">Village <error-message-inline :message="form.errors.village"></error-message-inline></label>
            <div class="form-control-wrap" >
            <input type="text"  class="form-control required" id="village" placeholder="Enter village" v-model="form.village">
            </div>
            </div>
            </div>











<div class="col-sm-4 mt-5">
<div class="form-group">
<div class="form-control-wrap" >
<submit-button :title="'Save'" :isLoading="form.processing"></submit-button>
</div>
</div>
</div>




</div>
</div>
</div>
</form>
</div>
<div class="col-md-1 col-12">
</div>
</div>
</div>
</app-layout>
</template>
<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { useForm } from '@inertiajs/vue3';
import { defineProps} from 'vue';
import SubmitButton from '@/Components/SubmitButton.vue';
import ErrorMessageInline from '@/Components/ErrorMessageInline.vue';
import CardHeader from '@/Components/CardHeader.vue';




const props=defineProps({
response:Object
});

const form=useForm({
firstname:'',
lastname:'',
gender:'',
tel:'',
email:'',
district:'',
parish:'',
village:'',
dob:''
});

const gender=[{name:'Male'},{name:'Female'},{name:'Other'}];
const submit=()=>{
form.post(route('post.farmer'),{

});

};



</script>