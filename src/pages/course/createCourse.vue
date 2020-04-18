<template>
  <div class="store">
    <q-form @submit.prevent="submitForm">
      <div class="form-group-module">
        <div class="store-category">
          <p class="label">托管班</p>
          <q-btn outline color="primary btns" label="上 传" />
          <q-btn outline color="primary btns" label="上 传" />
        </div>
      </div>
      <div class="form-group-module">
        <div class="store-category">
          <p class="label">多人精品班</p>
          <q-btn outline color="primary btns" label="上 传" />
          <q-btn outline color="primary btns" label="上 传" />
        </div>
      </div>
      <div class="form-group-module">
        <div class="store-category">
          <p class="label">一对一</p>
          <q-btn outline color="primary btns" label="上 传" />
          <q-btn outline color="primary btns" label="上 传" />
        </div>
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
  }
}
</script>
<style lang="stylus" scoped>
.store {
  background-color: #f6f6f6;
  display: block;
}

.label {
  font-size: 14px;
  color: #333;
}

.form-group-module {
  padding: 10px 20px;
  background-color: #fff;
}

.btn {
  margin-right: 10px;
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
