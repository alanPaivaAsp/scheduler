<template>
  <div class="container">
    <Button text="texto" type="primary" />
  </div>
</template>

<script>
import Button from '@/components/button'

export default {
  components: { Button },
}
</script>

<style>
.container {
  margin: 0 10px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
}
</style>
