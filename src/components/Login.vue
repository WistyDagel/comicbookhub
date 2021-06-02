<template>
    <div class="container">
        <div class="wrapper">
            <form @submit.prevent="login">
                <h2>Login</h2>
                <input type="email" v-model="email" placeholder="Email address..." />
                <br/>
                <input type="password" v-model="password" placeholder="password..." />
                <br/>
                <button>Login</button>
            </form>
        </div>
    </div>
</template>

<script>
import { Auth } from 'aws-amplify';
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login: async function() {
            try {
                let user = await Auth.signIn(this.email, this.password);
                alert('Successfully logged in');
                await sessionStorage.setItem('user', user.username);
                await sessionStorage.setItem('library', JSON.stringify([]));
                window.location.reload();
                // await this.$router.push('/');
            } catch (error) {
                alert(error.message);
            }
        }
    }
}
</script>

<style scoped>

    h2 {
        padding-bottom: 25px;
    }

    .wrapper {
        margin: 15% 25% 0 25%;
        border: 2px solid black;
        border-radius: 8px;
        padding: 20px 0;
        text-align: center;
    }

    input {
        margin-bottom: 10px;
    }
</style>