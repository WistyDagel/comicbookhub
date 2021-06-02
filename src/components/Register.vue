<template>
    <div class="container">
        <div class="wrapper">
            <form @submit.prevent="register">
                <h2>Register</h2>
                <input
                    type="email"
                    v-model="email"
                    placeholder="Email address..."
                />
                <br/>
                <input
                    type="password"
                    v-model="password"
                    placeholder="password..."
                />
                <br/>
                <input
                    type="password"
                    v-model="confpassword"
                    placeholder="confirm password..."
                />
                <br/>
                <button>Register</button>
            </form>
        </div>
    </div>
</template>

<script>
import { Auth } from 'aws-amplify';

export default {
    data() {
        return {
            email: '',
            password: '',
            confpassword: ''
        };
    },
    methods: {
        async register() {
            try {
                if (this.password == this.confpassword) {
                    await Auth.signUp({
                        username: this.email,
                        attributes: {
                            email: this.email
                        },
                        password: this.password,
                    });
                    alert('User successfully registered. Please login');
                } else {
                    alert('Passwords do not match...');
                }
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