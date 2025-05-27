<template>
<div>
<button class="btn btn-lg btn-dark btn-block" v-if="isLoading==true" type="submit">
<div class="spinner-border m-0 p-0" role="status" style="height:20px;width:20px;">
<span class="visually-hidden">Loading...</span>
</div>
</button>
<button class="btn btn-lg btn-dark btn-block" v-else> {{ title}} </button>
</div>
</template>
<script>
export default {
components:{},
props:{
title:{},
isLoading:{},
},
}
</script>
