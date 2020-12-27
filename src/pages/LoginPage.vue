<template>
  <div class="login-page">
    <h2>Login as</h2>
    <div class="login-page__type-option">
      <input type="radio" name="loginType"
      value="admin" v-model="loginType">
      <label>Admin</label>
    </div>
    <div class="login-page__type-option">
      <input type="radio" name="loginType" value="user" v-model="loginType">
      <label>User</label>
    </div>
    <div class="login-page__input">
      <input type="text" @keydown.enter="authenticate"
      :placeholder="loginType === 'admin' ? `Enter username` : `Enter poll code`" v-model="loginValue">
      <p class="login-page__input_sub-text">Press enter to enter &#128515; </p>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  text-align: center;
}
.login-page__type-option {
  display: inline-block;
  padding: 0px 10px;
}
.login-page__input input {
  margin: 10px 0px 5px 10px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid grey;
  outline: none;
}
.login-page__input_sub-text {
  margin: 0px;
  margin-left: 10px;
  font-size: 12px;
}
</style>

<script src="./js/login-page.js"></script>