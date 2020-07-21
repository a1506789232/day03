<template>
  <div>
    <van-nav-bar title="新建订单" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="联系人"
        label="联系人"
        placeholder="姓名"
        :rules="[{ required: true, message: '请填写联系人' }]"
      />
      <van-field
        v-model="mobile"
        type="text"
        name="手机号码"
        label="手机号码"
        placeholder="11位手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="mobile"
        type="text"
        name="选择地区"
        label="选择地区"
        placeholder="选择地区"
        :rules="[{ required: true, message: '请填写地区' }]"
      />
      <van-field
        v-model="mobile"
        type="text"
        name="手机号码"
        label="手机号码"
        placeholder="11位手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="mobile"
        type="text"
        name="手机号码"
        label="手机号码"
        placeholder="11位手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
        username:""
    };
  },
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
</style>
