<template>
  <v-card>
    <v-tabs color="white accent-4" left v-model="tab">
      <v-tabs-slider color="white"></v-tabs-slider>
      <v-tab v-for="photo in photoData">
        {{photo.key}}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="photo in photoData" :key="photo.key">
        <v-container fluid>
          <v-row>
            <v-col class="text-center d-flex child-flex" v-for="(image, index) in photo.images" :key="index" cols="3">
              <nuxt-link :to="`/photos/${image.id}`">
                <v-img :src="`/images/${image.path}.jpg`" :lazy-src="`/images/${image.path}.jpg`" aspect-ratio="1"></v-img>
              </nuxt-link>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  name: 'Photos',
  data() {
    return {
      tab: null,
      photoData: []
    }
  },
  mounted() {
    console.log(this.photoData);
  }
}
</script>
