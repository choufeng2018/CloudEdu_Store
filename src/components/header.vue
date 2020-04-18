<template>
  <div class="head">
    <q-img src="https://cdn.quasar.dev/img/mountains.jpg" class="back" @click="handleBack"></q-img>
    <div class="titleBar">{{headTop.title}}</div>
    <div class="titlePic" v-for="(value, index) in headTop.img" :key="index">
      <q-img :src="value.url" class="pcimg" @click="createCourse(value)"></q-img>
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" class="pcimg"></q-img>
    </div>
    <div class="btn">{{headTop.label}}</div>
  </div>
</template>

<script>
export default {
  name: 'HomeTabs',
  data () {
    return {}
  },
  props: {
    headTop: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    createCourse (value) {
      this.$router.push({
        path: value.path
      })
    },
    handleBack () {
      this.$router.back(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
.head {
  margin-bottom: 10px;
  background-color: #fff;

  .back {
    position: absolute;
    width: 22px;
    left: 10px;
    top: 17px;
    height: 22px;
  }

  .btn {
    position: absolute;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(70, 94, 255, 1);
    right: 10px;
    top: 17px;
  }

  .titlePic {
    position: absolute;
    right: 10px;
    top: 17px;

    .pcimg {
      margin-right: 10px;
      float: left;
      width: 22px;
      height: 22px;
    }
  }

  .titleBar {
    line-height: 56px;
    text-align: center;
  }
}
</style>
