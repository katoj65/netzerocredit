<template>
    <div class="card-header bg-white">
        <div class="card-inner p-1">
            <div class="card-title-group">
            <div class="card-title">
            <h6 class="title ff-base fw-medium">{{ title }} </h6>
            </div>
            <div class="card-tools">
             <slot/>
            </div>

            </div>
            </div>
    </div>

</template>
<script setup>
import { defineProps } from 'vue';
const props=defineProps({
title:String
});

</script>
<style scoped>
/*.card-header{
background:#5d6d7e;
}
*/

</style>