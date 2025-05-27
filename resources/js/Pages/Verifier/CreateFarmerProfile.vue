<template>
<app-layout>
<auth-user/>

<div class="row">
<div class="col-12">

    <div class="row g-gs">
        <div class="col-lg-4 col-xl-4 col-xxl-3">

            <div class="card h-100">
                <div class="card-inner-group border-0">
                    <div class="card-inner border-0">
                        <div class="user-card user-card-s2 border-0">
                            <div class="user-avatar lg bg-dark">
                                <em class="icon ni ni-user-fill"></em>
                            </div>
                            <div class="user-info">
                                <div class="badge bg-light rounded-pill ucap">{{ user.role }} </div>
                                <h5 class="ff-base fw-medium">{{ user.firstname }} {{ user.lastname }} </h5>
                                <span class="sub-text">TEL: {{ user.tel }}</span>
                            </div>
                        </div>
                    </div>












                    <div class="card-inner border-0">
                        <h6 class="overline-title mb-2">Details</h6>
                        <div class="row g-3">
                            <div class="col-sm-6 col-md-4 col-lg-12">
                                <span class="lead-text">Gender:</span>
                                <span>{{ user.gender }} </span>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-12">
                                <span class="lead-text">Date of Birth:</span>
                                <span>
                                {{ user.dob }}
                                </span>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-12">
                                <span class="lead-text">Contacts:</span>
                                <span>{{ user.email }} <br/>
                                {{ user.tel }} </span>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-12">
                                <span class="lead-text">District:</span>
                                <span> {{ user.district }} </span>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-12">
                                <span class="lead-text">Parish:</span>
                                <span>
                                {{ user.parish }}
                                </span>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-12">
                                <span class="lead-text">Village</span>
                                <span>
                                {{ user.village }}
                                </span>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-12">
                                <span class="lead-text">Registration date:</span>
                                <span>
                                {{ user.created_at }}
                                </span>
                            </div>
                        </div>
                    </div><!-- .card-inner -->
                </div>
            </div>
        </div><!-- .col -->













        <div class="col-lg-8 col-xl-8 col-xxl-9">
            <div class="card h-100">

<card-header title="Farm Details"></card-header>

                <div class="card-inner m-3 pt-0">
                    <div class="nk-block pt-0">

                        <div class="profile-balance">
                            <div class="profile-balance-group gx-4">
                                <div class="profile-balance-sub">

<p class="mt-2">Fill in the detailed information about the farm / garden.</p>
                                </div>

                            </div>
                        </div>
                    </div>

    <div>




<form @submit.prevent="submit" class="mt-4">
<div class="row gy-4">

        <div class="col-sm-12">
        <div class="form-group">
        <label class="form-label" for="fname1">Farm/ Garden Name or Identification <error-message-inline :message="form.errors.name"></error-message-inline></label>
        <div class="form-control-wrap" >
        <input type="text"  class="form-control required" id="fname1" placeholder="Enter farm name / garden or identification" v-model="form.name">
        </div>
        </div>
        </div>


        <div class="col-sm-6">
        <div class="form-group">
        <label class="form-label" for="fsize">Size of Farm <error-message-inline :message="form.errors.size"></error-message-inline></label>
        <div class="form-control-wrap" >
        <input type="number"  class="form-control required" id="fsize" placeholder="Enter farm size (acre)" v-model="form.size">
        </div>
        </div>
        </div>




        <div class="col-sm-6">
        <div class="form-group">
        <label class="form-label" for="ftype">Farm Type <error-message-inline :message="form.errors.type"></error-message-inline></label>
        <div class="form-control-wrap" >

            <el-select
            placeholder="Select"
            size="large"
            style="width: 100%;text-transform:capitalize" id="ftype"
            v-model="form.type"
            >
        <el-option v-for="(ft,key) in farm_type" :key="key" style="text-transform:capitalize" :value="ft.name">
            {{ ft.name}}
        </el-option>
            </el-select>
        </div>
        </div>
        </div>







        <div class="col-sm-12">
            <div class="form-group">
            <label class="form-label" for="crop"> Type of Crops Grown or Aminals Rared
            <error-message-inline :message="form.errors.items"></error-message-inline></label>
            <div class="form-control-wrap" >
            <input type="text"  class="form-control required" id="crop" placeholder="Enter the type of crops / animals" v-model="form.items">
            </div>
            </div>
            </div>









        <div class="col-sm-12">
            <div class="form-group">
            <label class="form-label" for="land">Land Ownership <error-message-inline :message="form.errors.land"></error-message-inline></label>
            <div class="form-control-wrap">

                <el-select
                placeholder="Select"
                size="large"
                style="width: 100%;text-transform:capitalize" id="land"
                v-model="form.land"
                >
            <el-option v-for="(l,key) in land" :key="key" style="text-transform:capitalize" :value="l.name">
                {{ l.name}}
            </el-option>
                </el-select>
            </div>
            </div>
            </div>






            <div class="col-sm-12">
                <div class="form-group">
                <label class="form-label" for="practice">Sustainable Agricultural Practices <error-message-inline :message="form.errors.sustain"></error-message-inline></label>
                <div class="form-control-wrap">

                    <el-select
                    placeholder="Select"
                    size="large"
                    multiple
                    style="width: 100%;text-transform:capitalize" id="practice"
                    v-model="form.sustain"
                    >
                <el-option v-for="(s,key) in practice" :key="key" style="text-transform:capitalize" :value="s.name">
                    {{ s.name}}
                </el-option>
                    </el-select>
                </div>
                </div>
                </div>





<div class="col-sm-6">
<div class="form-group">
<label class="form-label" for="tree">Trees Available
<error-message-inline :message="form.errors.tree"></error-message-inline></label>
<div class="form-control-wrap" >
<input type="number"  class="form-control required" id="tree" placeholder="Enter the number of trees if any" v-model="form.tree">
</div>
</div>
</div>



<div class="col-sm-6">
    <div class="form-group">
    <label class="form-label" for="animal">Livestock Available
    <error-message-inline :message="form.errors.animal"></error-message-inline></label>
    <div class="form-control-wrap" >
    <input type="number"  class="form-control required" id="animal" placeholder="Enter the number of animals if any" v-model="form.animal">
    </div>
    </div>
    </div>




    <div class="col-sm-6">
        <div class="form-group">
        <label class="form-label" for="soil">Soil Condition
        <error-message-inline :message="form.errors.soil"></error-message-inline></label>
        <div class="form-control-wrap" >
            <el-select
            placeholder="Select"
            size="large"
            style="width: 100%;text-transform:capitalize" id="soil"
            v-model="form.soil"
            >
        <el-option v-for="(o,key) in soil" :key="key" style="text-transform:capitalize" :value="o.name">
            {{ o.name}}
        </el-option>
            </el-select>
        </div>
        </div>
        </div>



        <div class="col-sm-6">
            <div class="form-group">
            <label class="form-label" for="water">Water Sources
            <error-message-inline :message="form.errors.water"></error-message-inline></label>
            <div class="form-control-wrap" >
                <el-select
                placeholder="Select"
                size="large"
                style="width: 100%;text-transform:capitalize" id="water"
                v-model="form.water"
                >
            <el-option v-for="(w,key) in water" :key="key" style="text-transform:capitalize" :value="w.name">
                {{ w.name}}
            </el-option>
                </el-select>
            </div>
            </div>
            </div>


            <div class="col-sm-6">
                <div class="form-group">
                <label class="form-label" for="challenge">Climate Challenge
                <error-message-inline :message="form.errors.climate"></error-message-inline></label>
                <div class="form-control-wrap" >
                    <el-select
                    multiple
                    placeholder="Select"
                    size="large"
                    style="width: 100%;text-transform:capitalize" id="challenge"
                    v-model="form.climate"

                    >
                <el-option v-for="(c,key) in challenge" :key="key" style="text-transform:capitalize" :value="c.name">
                    {{ c.name}}
                </el-option>
                    </el-select>
                </div>
                </div>
                </div>




<div class="col-sm-6">
<div class="form-group">
<label class="form-label" for="geo">Geo-location
<error-message-inline :message="form.errors.geo"></error-message-inline></label>
<div class="form-control-wrap" >
<input type="number"  class="form-control required" id="geo" placeholder="Enter geo-location cordinates" v-model="form.geo">
</div>
</div>
</div>





<div class="col-sm-3 mt-4">
<div class="form-group">
<div class="form-control-wrap" >
<submit-button :title="'Save'" :isLoading="form.processing"></submit-button>
</div>
</div>
</div>




        </div>






</form>




    </div>


                </div><!-- .card-inner -->
            </div><!-- .card -->
        </div><!-- .col -->
    </div>





</div>
</div>

</app-layout>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { useForm } from '@inertiajs/vue3';
import { defineProps,computed,} from 'vue';
import SubmitButton from '@/Components/SubmitButton.vue';
import ErrorMessageInline from '@/Components/ErrorMessageInline.vue';
import AuthUser from '@/Components/AuthUser.vue';
import CardHeader from '@/Components/CardHeader.vue';

const props=defineProps({
response:Object
});

const farm_type=computed(()=>props.response.farm_type);
const user=computed(()=>props.response.user);
const land=computed(()=>props.response.ownership);
const practice=computed(()=>props.response.practices);
const soil=computed(()=>props.response.soil);
const water=computed(()=>props.response.water);
const challenge=computed(()=>props.response.challenge);
const userID=computed(()=>props.response.user.id);

const form=useForm({
user_id:userID,
name:'',
size:'',
type:'',
items:'',
land:'',
sustain:'',
tree:'',
animal:'',
soil:'',
water:'',
climate:'',
geo:''



});



const submit=()=>{
form.post(route('verifier.create-farmer-profile'),{

});

};



</script>
