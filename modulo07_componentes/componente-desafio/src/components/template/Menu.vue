<template>
  <v-navigation-drawer app>
    <v-toolbar flat>
      <v-list>
        <v-list-item>
          <v-list-item-title class="title">Menu</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <MenuItem 
        v-for="item in itensMenu" 
        :item="item" 
        :key="item.titulo"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import MenuItem from './MenuItem'

export default {
  data() {
    return {
      itensMenu: [
        { titulo: "Início", icon: "mdi-view-dashboard" },
        { titulo: "Sobre", icon: "mdi-forum" },
      ],
    };
  },
  components: {
    MenuItem
  }
};
</script>