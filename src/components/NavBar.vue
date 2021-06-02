<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="/">Comic Book Hub</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/addcomic">Add Comic</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ms-auto" right>
                <!-- <b-nav-form>
                    <div class="d-flex flex-row">
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </div>
                </b-nav-form> -->

                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                    <em class="user" v-if="user">{{user}}</em>
                    <em v-else>User Options</em>
                </template>
                <!-- <router-link to="#profile">Profile</router-link> -->
                <b-dropdown-item v-if="user" href="/library">Library</b-dropdown-item>
                <button v-if="user" class="signout" @click="$emit('signout')">Sign Out</button>
                <b-dropdown-item v-if="user == null" href="/register">Register</b-dropdown-item>
                <b-dropdown-item v-if="user == null" href="/login">Login</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    // import Auth from "@aws-amplify/auth";
    export default {
        name: 'NavbarPage',
        components: {},
        props: {
            user: {
                required: true
            }
        },
        method: {
            logout: async function() {
                try {
                    sessionStorage.clear();
                    localStorage.clear();
                    // await Auth.signOut();
                } catch (error) {
                    alert(error.message);
                }
            },
        }
  }
</script>

<style>
    .signout {
        margin-left: 10px;
        border: none;
        border-radius: 8px;
        background-color: #333;
        color: white;
    }

    .signout:hover{
        background-color: black;
    }

    .user {
        color: rgb(0, 174, 255);
    }

    @media only screen and (min-width: 900px) {
        .ms-auto {
            margin-right: 2vh;
        }
    }
</style>