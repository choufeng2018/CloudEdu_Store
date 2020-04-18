<template>
  <div class="course-list">
    <v-header :headTop="headTop"></v-header>
    <q-tabs
      v-model="tab"
      class="text-grey bac_tab"
      active-color="primary"
      indicator-color="primary"
      align="justify"
    >
      <q-tab name="all" label="全部" />
      <q-tab name="alarms" label="托管" />
      <q-tab name="help" label="辅导班" />
      <q-tab name="favor" label="兴趣班" />
      <q-tab name="one" label="一对一" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="all">
        <div class="list-item">
          <q-img src="~assets/quasar-logo-full.svg" class="pcimg"></q-img>
          <div class="list-right">
            <div class="title">【精品班】儿童计算机编程</div>
            <div class="price">￥11</div>
            <div class="time">
              上课时间
              <q-img src="~assets/quasar-logo-full.svg" class="icon"></q-img>
            </div>
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
// import { isRequired } from 'assets/uitls/validate'
export default {
  name: 'PageIndex',
  data () {
    return {
      tab: 'all',
      headTop: {
        title: '课程设置',
        img: [
          {
            url: 'https://cdn.quasar.dev/img/mountains.jpg',
            path: 'createCourse'
          },
          {
            url: 'https://cdn.quasar.dev/img/mountains.jpg',
            path: 'createCourse'
          }
        ]
      }
    }
  },
  methods: {
    // createCourse () {
    //   this.$router.push({
    //     path: 'createCourse'
    //   })
    // }
  },
  components: {
    'v-header': () => import('components/header.vue')
  }
}
</script>
<style lang="stylus" scoped>
.course-list {
  background-color: #f6f6f6;
  margin: 0 auto;
  display: block;

  .head {
    margin-bottom: 10px;
    background-color: #fff;

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

  .list-item {
    display: flex;
    padding: 20px 0;

    .pcimg {
      width: 72px;
      height: 72px;
    }

    .list-right {
      margin-left: 17px;
      font-size: 14px;
      font-family: PingFang SC;
      line-height: 26px;
      color: #666;

      .title {
        color: #333;
        font-weight: 800;
      }

      .time {
        .icon {
          position: absolute;
          right: 20px;
          width: 16px;
          height: 16px;
        }
      }

      .price {
        color: #ff0000;
        font-weight: 800;
      }
    }
  }
}

.label {
  font-size: 14px;
  color: #333;
}
</style>
