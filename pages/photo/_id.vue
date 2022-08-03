<template>
  <v-container>
    <v-subheader>Author: {{ photoData.author }}</v-subheader>
    <v-img :src="photoData.download_url"></v-img>
  </v-container>
</template>

<script>
export default {
  name: "id",
  data() {
    return {
      photoData: {}
    }
  },
  created() {
    this.getPhotoData();
  },
  methods: {
    getPhotoData() {
      const id = this.$route.params.id;
      this.$axios.$get(`/api/photo/${id}`).then((res) => {
        this.photoData = res.data;
      });
    }
  }
}
</script>

<style scoped>

</style>
