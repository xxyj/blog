<template>
  <div class="sb-tag">
    <slot></slot>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.sb-tag {
    display: inline-block;
    font-size: 13px;
    padding: 0px 12px;
    border-radius: 3px;
    border: solid 1px black;
    color: black;
    font-weight: 400;
    margin-right: 15px;
    
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;

    color: #67c23a;
    background-color: #f0f9eb;
    border: solid 1px #67c23a;
}
</style>
