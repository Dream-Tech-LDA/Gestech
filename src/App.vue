<template>

  <router-view></router-view>

</template>

<script>
import {useStore} from "vuex"
import {computed} from "vue"

export default {
  name: 'App',
 
  setup() {
    const store = useStore()

   return {
      ff: computed(()=> store.state.name)
    }
  }

}
</script>
