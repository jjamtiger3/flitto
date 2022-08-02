<template>
  <v-card>
    <v-tabs color="white accent-4" left v-model="tab">
      <v-tabs-slider color="white"></v-tabs-slider>
      <v-tab v-for="photo in Photos">
        {{photo.key}}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="photo in Photos" :key="photo.key">
        <v-container fluid>
          <v-row>
            <v-col class="text-center d-flex child-flex" v-for="(image, index) in photo.images" :key="index" cols="3">
              <nuxt-link :to="`/photos/${image.id}`">
                <v-img :src="`/images/${image.url}.jpg`" :lazy-src="`/images/${image.url}.jpg`" aspect-ratio="1"></v-img>
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
      allPhotos: []
    }
  },
  computed: {
    photos () {
      return this.$store.getters.photos || [];
    }
  },
  mounted() {
    this.getPhotoData();
  },
  methods: {
    setPhotos (start, end) {
      const photos = this.allPhotos.splice(start, end);
    },
    // 1. 처음에 전체데이터를 가져옴 -> API에서 페이징 처리가 지원이 안되므로 페이징처리를 구현하기 위함
    // 2. store생성
    // 3. crete시 ajax요청을 통해 store에 데이터 전달
    // 4. store에서 mutation이 발생하면 photos에 전달
    // 5. 10개단위로 화면에 출력
    getPhotoData() {
    }
  }
}
</script>
