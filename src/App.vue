<template>
  <MenuComponent/>
  <router-view></router-view>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';

export default {
  name: 'App',
  components: {
    MenuComponent
  }
}
</script>

<style>
#div1 {
    margin: auto;
    width: 80%;
    text-align: center;
}
#titulo {
    background-color: black;
    color: white;
    border-radius: 5px;
    margin-top: 5%;
    padding: 5px;
}
</style>
