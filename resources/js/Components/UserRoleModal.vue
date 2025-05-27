<template>
<div>
<div class="modal"  id="modalDefault" style="display:block;position:fixed;background:black;background: rgba(0, 0, 0, 0.5);" v-if="user.role=='verify'">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header border-0">
<h5 class="modal-title">Create Your Profile </h5>
</div>
<div class="modal-body">




<div class="team pb-1 mb-4">
<div class="user-card user-card-s2">
<div class="user-avatar lg bg-dark">
<span><em class="icon ni ni-user-alt-fill"></em></span>
</div>
<div class="user-info">
<h4>{{ user.firstname }} {{ user.lastname }} </h4>
<span style="font-size:14px;">
{{ user.tel }}
</span>
</div>
</div>
</div>


<form @submit.prevent="submit">

<div class="card  card-preview border-0">
<div class="card-inner">
<div class="preview-block">
<div class="col-sm-12">
<div class="form-group">
    <label class="form-label" for="default-06">
    Select Gender: <error-message-inline :message="form.errors.gender"></error-message-inline>
    </label>
    <div class="form-control-wrap ">
    <el-select placeholder="Select" size="large" style="width: 100%;text-transform:capitalize;" v-model="form.gender">
    <el-option v-for="(g,key) in gender" :key="key" style="text-transform:" :value="g.name">
    {{ g.name }}
    </el-option>
    </el-select>

    </div>
</div>





    <div class="form-group">
        <label class="form-label" for="default-06">
        You are signing up as: <error-message-inline :message="form.errors.role"></error-message-inline>
        </label>
        <div class="form-control-wrap ">
        <el-select placeholder="Select" size="large" style="width: 100%;text-transform:capitalize;" v-model="form.role">
        <el-option v-for="(r,key) in roles" :key="key" style="text-transform:capitalize;" :value="r.name">
        {{ r.name }}
        </el-option>
        </el-select>

        </div>
        </div>






<div class="form-group">
<submit-button :title="'Save'" :isLoading="form.processing"></submit-button>
</div>

</div>




</div>
</div>
</div>





</form>

</div>

</div>
</div>
</div>
</div>
</template>
<script setup>
import { defineProps } from 'vue';
import { usePage, useForm } from '@inertiajs/vue3';
import SubmitButton from '@/Components/SubmitButton.vue';
import ErrorMessageInline from '@/Components/ErrorMessageInline.vue';
const props=defineProps({
user:Object
});
const page=usePage();
const roles=page.props.response.roles;
const form=useForm({
role:'',
gender:'',
});
const gender=[{name:'Male'},{name:'Female'},{name:'Other'}];

const submit=()=>{
form.post(route('register.complete'),{
onFinish:()=>form.reset(),

})
}




</script>