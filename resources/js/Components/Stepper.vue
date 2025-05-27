<template>
<form>
<div class="card ">
<div class="card-inner border-bottom">
<div class="card-title-group">
<div class="card-title">
<h6 class="title">Form title</h6>
</div>
<div class="card-tools">

</div>
</div>
</div>
<div class="card-inner" v-show="screen.count==1">




1






</div>

<div class="card-inner" v-show="screen.count==2">





2





</div>


<div class="card-inner" v-show="screen.count==3">





3





</div>
</div>
</form>
</template>
<script setup>
import { reactive, computed} from 'vue';

let screen =reactive({count:1});
const submit1=computed((num)=>{
screen.count=num;
});


const submit2=computed(()=>screen.count=1);
</script>
