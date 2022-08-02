<template>
  <v-app dark>
    <v-app-bar app>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(item, i) in items" :key="i" @click="$router.push(item.to)">
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <v-row no-gutters>
        <v-btn v-for="link in links" :key="link.id" color="white" text rounded class="my-2" :to="link.to">
          {{ link.title }}
        </v-btn>
        <v-col class="py-4 text-left white--text" cols="12">
          <div>
            <span>전화번호: </span>
            <span>
              <a href="tel:02-1444-1555">02-1444-1555</a>
            </span>
          </div>
          <div>
            <span>
              부산광역시 남구 8부두로 27
            </span>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import { RouteLink, RouteItems } from "../assets/js/Router";
export default {
  name: 'DefaultLayout',
  data () {
    return {
      fixed: false,
      items: RouteItems,
      links: RouteLink,
      miniVariant: false,
    }
  }
}
</script>
