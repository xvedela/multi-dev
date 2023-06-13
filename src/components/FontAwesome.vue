<template>
  <i :class="_class"/>
</template>

<script setup>
const {_class} = defineProps({
  _class: {
    required: true,
    type: String,
  },
});
</script>