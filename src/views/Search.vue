<template>
  <div class="main">
    <div class="mt-2">
      <form class="" @submit.prevent="onSubmit">
        <div class="row">
          <div class="col-4" v-if="ratings">
            <label>Rating from</label>
            <select v-model="filter.rating_from" class="form-control">
              <option value="">any</option>
              <option v-for="option in ratings" :value="option" :key="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div class="col" v-if="ratings">
            <label>Rating to</label>
            <select v-model="filter.rating_to" class="form-control">
              <option value="">any</option>
              <option v-for="option in ratings" :value="option" :key="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div class="col" v-if="platforms">
            <label>Platform</label>
            <select v-model="filter.commentable_key" class="form-control">
              <option value="">any</option>
              <option
                v-for="platform in platforms"
                :value="platform.commentable_key"
                :key="platform.commentable_key"
              >
                {{ platform.commentable_key }}
              </option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <label>Date from</label>
            <input
              v-model="filter.date_from"
              placeholder="Selected date"
              type="datetime-local"
              id="date-picker-example"
              class="form-control"
            />
          </div>
          <div class="col-4">
            <label>Date to</label>
            <input
              v-model="filter.date_to"
              placeholder="Selected date"
              type="datetime-local"
              id="date-picker-example"
              class="form-control"
            />
          </div>
          <div class="col-4">
            <label style="visibility: hidden">should be hidden</label>
            <button type="submit" class="form-control btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    <table class="table table-striped my-2">
      <thead>
        <tr>
          <th>Username</th>
          <th>Platform</th>
          <th>Comment</th>
          <th>Actions</th>
        </tr>
      </thead>
      <SearchResults
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </table>
  </div>
</template>

<script>
import CommentyService from '@/services/CommentyService.js'
import SearchResults from '@/components/SearchResults.vue'

export default {
  name: 'Home',
  components: {
    SearchResults
  },
  data() {
    return {
      ratings: ['1', '2', '3', '4', '5'],
      platforms: [],
      filter: {
        rating_from: '',
        rating_to: '',
        commentable_key: '',
        date_from: '',
        date_to: '',
      },
      comments: [],
    }
  },
  created() {
    CommentyService.getKeys()
      .then((response) => {
        this.platforms = response.data.comments
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    onSubmit() {
      let entries = Object.entries(this.filter).filter((e) => {
        return e[1] != ''
      })
      let query = Object.fromEntries(entries)
      CommentyService.filter(query)
        .then((response) => {
          this.comments = response.data.comments
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style scoped>
.main {
  margin-left: 20%;
}
</style>
