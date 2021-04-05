<template>
  <tbody>
    <tr>
      <td>{{ comment.name }}</td>
      <td>{{ comment.commentable_key }}</td>
      <td>{{ comment.body }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'LatestComments',
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
}
</script>
