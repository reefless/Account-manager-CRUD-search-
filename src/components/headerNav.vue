<template>
    <v-toolbar dark color="grey darken-4">
        <img class="logo" src="~@/assets/logo.png">
        <span class="white--text headline"><a href="/#/index">Contacts</a></span>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <router-link to="/">
                <v-icon>person</v-icon>
            </router-link>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script>
    export default {
    name: 'headerNav'
    }
</script>
<style>
    .logo{
        width: auto;
        height: 50%;
        padding-left: 5px;
        margin-right: 20px;
    }
    a{
        margin: auto;
        text-decoration: none;
        color: inherit;
    }
</style>
