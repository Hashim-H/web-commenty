<template>
  <div class="">
    <div class="row justify-content-center">
      <img
        alt="Commenty logo"
        src="../assets/logo.png"
        class="img-responsive big"
      />
    </div>
    <div class="card-columns" v-if="stats">
      <CounterCard name="partners" :number="stats.partners" icon="handshake" />
      <CounterCard name="comments" :number="stats.comments" icon="comments" />
      <CounterCard name="replies" :number="stats.replies" icon="reply" />
    </div>

    <h4>Our Latest Comments</h4>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Username</th>
          <th>Platform</th>
          <th>Comment</th>
        </tr>
      </thead>
      <LatestComments
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </table>
  </div>
</template>

<script>
import CounterCard from '@/components/CounterCard.vue'
import LatestComments from '@/components/LatestComments.vue'
import CommentyService from '@/services/CommentyService.js'
export default {
  name: 'Home',
  components: {
    CounterCard,
    LatestComments,
  },
  data() {
    return {
      stats: null,
      comments: null,
    }
  },
  created() {
    CommentyService.getStats()
      .then((response) => {
        this.stats = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    CommentyService.getLatest()
      .then((response) => {
        this.comments = response.data.comments
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style scoped>
.big {
  width: 20%;
}
</style>
