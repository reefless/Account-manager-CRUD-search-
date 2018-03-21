<template>
    <div>
        <v-container grid-list-xs class="loginBox">
            <v-layout row>
                <v-flex xs6 offset-xs3>
                    <v-card>
                        <v-layout row>
                            <v-flex xs10 offset-xs1 class="loginTitle">
                                <span>Login</span>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs10 offset-xs1 class="loginInputs">
                                <span>User Account</span>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs10 offset-xs1 class="loginInputs">
                                <v-form>
                                    <v-text-field solo v-model="formData.username"></v-text-field>
                                </v-form>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs10 offset-xs1 class="loginInputs">
                                <span>Password</span>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs10 offset-xs1 class="loginInputs">
                                <v-form>
                                    <v-text-field solo v-model="formData.password"></v-text-field>
                                </v-form>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs10 offset-xs1 class="loginInputs">
                                <v-form>
                                    <v-btn color="primary" @click="userlogin">Login</v-btn>
                                </v-form>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
import Vue from 'vue'
    export default {
    name: 'login',
    data(){
        return{
            formData:{
                username: '',
                password: ''
            }
        }
    },
    methods:{
        userlogin(){
            Vue.$http.get('http://localhost:3000/login')
            .then((response)=>{
                // alert(response.data[0].username)
                if(this.formData.username == response.data[0].username && this.formData.password == response.data[0].password)
                    this.$router.push('/')
                else{
                    alert("Wrong username or Password")
                    this.formData.username = ''
                    this.formData.password = ''
                    window.location.reload()
                }
            })
        }
    }
    }
</script>

<style>
    .loginBox{
        margin-top: 50px;
    }
    .loginTitle{
        border: 1px solid lightgray;
        box-shadow: 0px 0px 5px lightgray;
        margin-top: 10px;
        border-top:5px solid #31B888;
        border-radius: 5px;
        padding:15px!important;
        text-align: center;
    }
    .loginBox span{
        font-weight: bold;
        padding-left: 3px;
    }
    .loginBox .input-group{
        margin-left: 0;
    }
    .loginInputs{
        margin-top: 20px;
    }
    .btn{
        margin-left: 0px !important;
        margin-bottom: 10px;
    }
    .btn__content{
        color: #2c3e50;
    }
</style>
