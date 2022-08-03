<template>
  <v-card>
    <v-container>
      <v-row no-gutters>
        <template v-for="photo in photos">
          <v-col class="text-center d-flex child-flex" cols="3" :key="photo.id">
            <nuxt-link :to="`/photos/${photo.id}`">
              <v-img :src="`${photo.download_url}`" aspect-ratio="1"></v-img>
            </nuxt-link>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

export default {
  name: 'Photos',
  data() {
    return {
      tab: null,
      photos: [],
      photoIndex: 0
    }
  },
  created() {
    // 1. 처음에 10개가져오기
    // 2. 스크롤이 맨밑으로 내려오면 요청
    // 3. 서버에 데이터가 없으면 스크롤 disable
    // 4. 상세페이지 이동
    // 5. 스토어 구조로 변경
    this.getPhotoData();
  },
  mounted() {
  },
  methods: {
    getPhotoData() {
      this.$axios.$get(`/api/photos/${this.photoIndex}`).then((res) => {
        this.photos = res.data;
      });
    }
  }
}
</script>
