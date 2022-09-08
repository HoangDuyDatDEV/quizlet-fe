<template>
  <div id="login" class="w-full flex text-black">
    <div class="w-1/2">
      <img
        class="w-full"
        src="../static/background-login.png"
        alt="Background"
      />
    </div>
    <div class="w-1/2 bg-white relative">
      <a-tabs
        class="absolute w-2/3"
        style="top: 20rem; left: 50%; transform: translate(-50%, -50%)"
        default-active-key="1"
      >
        <a-tab-pane key="1" tab="Đăng nhập">
          <div class="space-y-5 w-2/3 mx-auto mt-5">
            <div>
              <input
                v-model.trim="params.username"
                type="text"
                class="w-full input-create-set"
                placeholder="Nhập tên đăng nhập hoặc email"
              />
            </div>
            <div class="relative w-full">
              <input
                v-model.trim="params.password"
                :type="isShowPassword ? 'text' : 'password'"
                class="w-full input-create-set"
                placeholder="Nhập mật khẩu"
              />
              <span class="absolute right-1 top-1/2 cursor-pointer" @click="isShowPassword = !isShowPassword">
                <svg-icon class="w-5 h-5" :name="isShowPassword ? 'eye' : 'eye-hide'"/>
              </span>
            </div>
            <div
              class="px-10 py-5 bg-success rounded font-semibold text-xl text-center cursor-pointer"
              @click="login"
            >
              Đăng nhập
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Đăng ký">
          <div class="w-2/3 space-y-5 mx-auto mt-5">
            <div>
              <input
                v-model.trim="params.username"
                type="text"
                class="w-full input-create-set"
                placeholder="Nhập tên đăng nhập hoặc email"
              />
            </div>
            <div class="relative w-full">
              <input
                v-model.trim="params.password"
                :type="isShowPassword ? 'text' : 'password'"
                class="w-full input-create-set"
                placeholder="Nhập mật khẩu"
              />
              <span class="absolute right-1 top-1/2 cursor-pointer" @click="isShowPassword = !isShowPassword">
                <svg-icon class="w-5 h-5" :name="isShowPassword ? 'eye' : 'eye-hide'"/>
              </span>
            </div>
            <div
              class="px-10 py-5 bg-warning rounded font-semibold text-xl text-center cursor-pointer"
              @click="login"
            >
              Đăng ký
            </div>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      params: {
        username: '',
        password: '',
      },
      isShowPassword: false
    }
  },
  methods: {
    login() {
      this.$router.push('/')
      this.resetParams()
    },
    resetParams() {
      this.params.password = ''
      this.params.username = ''
    },
  },
}
</script>
<style lang="scss">
#login {
  .input-create-set {
    border-bottom: 3px solid #000000;
  }
  .ant-tabs {
    color: #000000;
    font-weight: 600;
    .ant-tabs-tab-active {
      color: #000000;
    }
    .ant-tabs-ink-bar {
      background-color: #4c6fff;
    }
    .ant-tabs-tab:hover {
      color: #4c6fff;
    }
  }
}
</style>
