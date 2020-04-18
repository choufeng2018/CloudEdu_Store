<template>
  <div class="store">
    <q-form @submit.prevent="submitForm">
      <div class="form-group-module">
        <div class="store-logo">
          <span class="label">门店Logo</span>
          <q-btn outline rounded color="primary" label="上 传" class="upload-btn" />
        </div>
        <q-input
          ref="storeName"
          type="text"
          class="form-group-item no-shadow"
          color="blank"
          borderless
          input-class="text-right"
          v-model="form.name"
        >
          <template v-slot:before>
            <span class="label">门店名称</span>
          </template>
        </q-input>
        <q-input
          ref="storeName"
          type="text"
          class="form-group-item no-shadow"
          color="blank"
          borderless
          input-class="text-right"
          v-model="form.name"
        >
          <template v-slot:before>
            <span class="label">联系方式</span>
          </template>
        </q-input>
        <div class="store-category">
          <p class="label">经营类别</p>
          <q-btn outline color="primary" label="上 传" />
          <q-btn outline color="primary" label="上 传" />
        </div>
      </div>
      <div class="form-group-module">
        <q-input
          ref="storeName"
          type="text"
          class="form-group-item no-shadow"
          color="blank"
          borderless
          input-class="text-right"
          v-model="form.name"
        >
          <template v-slot:before>
            <span class="label">门店地址</span>
          </template>
        </q-input>
        <q-input
          ref="storeName"
          type="text"
          class="form-group-item no-shadow"
          color="blank"
          borderless
          input-class="text-right"
          v-model="form.name"
        >
          <template v-slot:before>
            <span class="label">楼号门牌号</span>
          </template>
        </q-input>
      </div>
      <div class="form-group-module">
        <q-input
          ref="storeName"
          type="textarea"
          class="form-group-item no-shadow"
          color="blank"
          borderless
          v-model="form.name"
        >
          <template v-slot:before>
            <span class="label">门店介绍</span>
          </template>
        </q-input>
        <q-btn
          color="form__submit"
          text-color="form__text"
          class="login__submit"
          dark-percentage
          no-caps
          type="submit"
          v-close-popup
        >下一步</q-btn>
      </div>
    </q-form>
  </div>
</template>

<script>
// import { isRequired } from 'assets/uitls/validate'
export default {
  name: 'PageIndex',
  data () {
    return {
      form: {}
    }
  },
  created () {},
  methods: {
    submitForm () {
      this.$router.push({
        path: 'map'
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.store {
  background-color: #f6f6f6;
  margin: 56px auto 0 auto;
  display: block;

  .store-logo {
    line-height: 56px;
  }

  .store-category {
    margin-top: 14px;
  }
}

.label {
  font-size: 14px;
  color: #333;
}

.form-group-module {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
}

.form-group-item {
  border-radius: 5px 5px 5px 5px;
  font-size: 14px;
  line-height: 28px;
  font-family: Aria;
}

.form-group-item:nth-last-of-type(1) {
  margin-bottom: 0;
}

.login__submit {
  width: 100%;
  min-height: 56px;
  border-radius: 5px;
  font-size: 18px;
  font-family: PingFangSC-regular;
  margin-top: 25px;
}

.upload-btn {
  position: absolute;
  right: 20px;
}

.code--img {
  width: 100%;
  height: 56px;
  border-radius: 5px;
  margin-top: 6px;
}
</style>
