<template>
    <div>
        <v-container grid-list-xs class="addBox">
            <v-layout row>
                <v-flex xs12>
                    <v-card>
                        <v-layout row>
                            <v-flex xs12>
                                <v-card-title class="addHeader">Contact<span>Add</span></v-card-title>
                            </v-flex>
                        </v-layout>
                        <hr>
                         <v-layout row>
                            <v-flex xs12>
                                <v-card-text>Contact ID</v-card-text>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs6>
                                <v-form>
                                    <v-text-field solo v-model="User.id"></v-text-field>
                                </v-form>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12>
                                <v-card-text>First name</v-card-text>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs6>
                                <v-form>
                                    <v-text-field solo v-model="User.firstname"></v-text-field>
                                </v-form>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12>
                                <v-card-text>Last name</v-card-text>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs6>
                                <v-form>
                                    <v-text-field solo v-model="User.lastname"></v-text-field>
                                </v-form>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12>
                                <v-card-text>Mobile No.</v-card-text>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs6>
                                <v-form>
                                    <v-text-field solo v-model="User.mobile"></v-text-field>
                                </v-form>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12>
                                <v-card-text>Email</v-card-text>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs6>
                                <v-form>
                                    <v-text-field solo v-model="User.email"></v-text-field>
                                </v-form>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12>
                                <v-card-text>Facebook</v-card-text>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs6>
                                <v-form>
                                    <v-text-field solo v-model="User.fb"></v-text-field>
                                </v-form>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12>
                                <v-card-text>Image URL</v-card-text>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs6>
                                <v-form>
                                    <v-text-field solo v-model="User.img"></v-text-field>
                                </v-form>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12>
                                <router-link to="/">
                                    <v-btn color="blue darken-3" class="white--text" @click="addToAPI"><v-icon left>save</v-icon>Save</v-btn>
                                    <v-btn color="red darken-3" class="white--text" ><v-icon left>close</v-icon>Close</v-btn>
                                </router-link>
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
    name: 'add',
    data(){
        return {
            User: {
                id: '',
                firstname: '',
                lastname: '',
                mobile: '',
                email: '',
                fb: '',
                img: ''
            }
        }
    },
    methods: {
        addToAPI(){
            Vue.$http.post('http://localhost:3000/users', this.User)
            .then((response) => {
                console.log(response)
                alert('Added' + this.User.id + '!')
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
    }
</script>

<style>
    .addBox{
        margin-top: 50px;
        margin-bottom: 30px;
    }
    .addHeader{
        font-weight: bold;
        font-size: 18px;
    }
    .addHeader span{
        background-color: #31B888;
        color: #fff;
        padding: 2px 5px;
        margin-left: 5px;
        border-radius: 3px;
    }
    .addBox .input-group.input-group--solo.input-group--text-field.input-group--single-line.primary--text{
        margin-left: 15px;
    }
    .btn{
        margin-left: 15px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>
