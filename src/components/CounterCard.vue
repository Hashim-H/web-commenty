;
<template>
  <div class="card bg-light">
    <div class="card-body text-center">
      <fa :icon="icon" class="fa-lg"/>
      <h3>{{ number }}</h3>
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CounterCard',
  props: {
    icon: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fa-lg{
  font-size: 3em;
}
</style>
