<template>
  <v-app>
    <Menu/>
    <TopBar/>

    <v-main>
      <Carousel/>
    </v-main>

    <Footer/>
  </v-app>
</template>

<script>
import Menu from '@/components/template/Menu'
import TopBar from '@/components/template/TopBar'
import Footer from '@/components/template/Footer'
import Carousel from '@/components/widget/Carousel'

export default {  
  components: {
    Menu,
    TopBar,
    Footer,
    Carousel
  }
}
</script>
