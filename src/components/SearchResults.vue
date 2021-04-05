<template>
  <tbody>
    <tr>
      <td>{{ comment.name }}</td>
      <td>{{ comment.commentable_key }}</td>
      <td>{{ comment.body }}</td>
      <td>
        <button class="btn btn-danger btn-lg m-1" @click="handleDelete">
          Delete
        </button>
        <button class="btn btn-dark btn-sm circle m-1" @click="handleBlock">
          Block
        </button>
      </td>
    </tr>
  </tbody>
</template>

<script>
import CommentyService from '@/services/CommentyService.js'

export default {
  name: 'SearchResults',
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleBlock() {
      console.log('working')
      CommentyService.blockEmail(this.comment.comment_id).then((response) =>
        console.log(response)
      )
    },
    handleDelete() {
      console.log('deleteworking')
      console.log(this.comment.comment_id)
      CommentyService.deleteComment(this.comment.comment_id).then((response) =>
        console.log(response)
      )
    },
  },
}
</script>
