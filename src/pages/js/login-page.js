export default {
  name: 'LoginPage',
  data () {
    return {
      loginType: 'admin',
      loginValue: ''
    }
  },
  methods: {
    authenticate () {
      this.$router.push({path: '/poll'})
    }
  }
}