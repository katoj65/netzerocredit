<template>
<div>
    <div class="nk-block-head nk-block-head-sm mb-4" v-if="title!=''">
        <div class="nk-block-between">
            <div class="nk-block-head-content">
                <h5 class="nk-block-title page-title" style="font-size:25px;">
                {{ title }}
                </h5>
                <div class="nk-block-des text-soft">
                    <p>
                    {{ subtitle }}
                    </p>
                </div>
            </div><!-- .nk-block-head-content -->
            <div class="nk-block-head-content">
                <slot></slot>
            </div><!-- .nk-block-head-content -->
        </div><!-- .nk-block-between -->
    </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props=defineProps({
title:String,
subtitle:String



});

</script>
<style scoped>
h5{font-family: sans-serif;}
</style>