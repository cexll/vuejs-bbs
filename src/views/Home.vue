<template>
    <div>
        <Message :show.sync="msgShow" :type="msgType" :msg="msg"/>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                msg: '',
                msgType: '',
                msgShow: false
            }
        },
        beforeRouteEnter(to, from, next) {
            const fromName = from.name
            const logout = to.params.logout

            next(vm => {
                if (vm.$store.state.auth) {
                    switch (fromName) {
                        case 'Register':
                            vm.$message.show('注册成功')
                            break
                        case 'Login':
                            vm.$message.show('登录成功')
                            break
                    }
                } else if (logout) {
                    vm.$message.show
                }
            })
        },
        computed: {
            auth() {
                return this.$store.state.auth
            }
        },
        watch: {
            auth(value) {
                if (!value) {
                    this.$message.show('操作成功')
                }
            }
        },
        methods: {
            showMsg(msg, type = ' success') {
                this.msg = msg
                this.msgType = type
                this.msgShow = true
            }
        }
    }
</script>

<style scoped>

</style>