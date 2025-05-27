<template>
    <el-input
    v-model="form.input"
    style="width: 100%;border:none;"
    placeholder="Search"
    id="search" class="el-input__wrapper"
  >
    <template #prefix>
      <el-icon class="el-input__icon"><search /></el-icon>
    </template>
  </el-input>

</template>
<script setup>
import { useForm } from '@inertiajs/vue3';
import { Search } from '@element-plus/icons-vue'

const form=useForm({
input:'',
});


</script>
<style scoped>
::v-deep(.el-input__wrapper) {
    box-shadow: none !important;
    border-color: transparent !important;
    border:none;

  }

.el-input__wrapper{
border:none;
outline: none;
background-color: #f0f0f0;
  }

  .el-input__wrapper:focus{
    --border:none;
  --outline: none;
      }

      ::v-deep(.el-input__wrapper) {
        background-color: #f0f0f0;
        outline: none;
        border:none;
      }

      ::v-deep(.el-input__wrapper.is-focus) {
        border-color:none;
        box-shadow: none;
        outline: none;
      }

      ::v-deep(.el-input__inner) {
        color: #111;
        font-weight: 500;
        outline: none;
      }
input:focus{
outline: none;
}


input.form-control:focus {
    outline: none;
    box-shadow: none;
  }

  input.form-control:focus {
    outline: none;
    box-shadow: none;
  }

</style>