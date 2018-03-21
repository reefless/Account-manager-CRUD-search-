<template>
    <div>
        <v-container grid-list-xs class="searchBar">
            <v-layout row>
                <v-flex xs10>
                    <v-form>
                        <v-text-field
                        label="Search..."
                        v-model="search"
                        ></v-text-field>
                    </v-form>
                </v-flex>
                <!-- <v-flex xs2>
                    <v-btn depressed large class="searchBtn">Search</v-btn>
                </v-flex> -->
                <v-flex xs2>
                    <v-btn depressed large class="searchBtn" color="light-blue darken-1" href="/#/add">
                        <v-icon color="white">add</v-icon>
                        <span class="white--text">
                            <v-card-text>Add</v-card-text>
                        </span>
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-xs class="contactList">
            <!-- <v-layout row> -->
                <v-flex v-for="object in filterdUsers" xs3 class="contactItems">
                    <v-card>
                        <v-avatar
                        :tile="tile"
                        :size="200"
                        class="white"
                        >
                        <img v-bind:src="object.img" alt="avatar">
                        </v-avatar>
                        <!-- <v-card-media src="" height="200px">
                        </v-card-media> -->
                        <v-card-title primary-title>
                            <v-card-text class="nameInfo">{{object.firstname}} {{object.lastname}}</v-card-text>
                            <v-card-text class="infoObject"><b>Mobile:</b> {{object.mobile}}</v-card-text>
                            <v-card-text class="infoObject"><b>Email:</b> {{object.email}}</v-card-text>
                            <v-card-text class="infoObject"><b>Facebook:</b></v-card-text>
                            <v-card-text class="infoObject">{{object.fb}}</v-card-text>
                        </v-card-title>
                        <v-card-actions>
                            <router-link :to="'/edit/' + object._id">
                                <v-btn color="blue darken-3"><v-icon color="white">edit</v-icon></v-btn>
                            </router-link>
                            <v-btn color="red darken-3" @click="delAccount(object._id)"><v-icon color="white">delete</v-icon></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            <!-- </v-layout> -->
        </v-container>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        name: 'index',
        data(){
            return{
                Users: [],
                search: ''
            }
        },
        mounted(){
            Vue.$http.get('http://localhost:3000/users')
            .then((response) => {
                console.log(response.data)
                this.Users = response.data
            })
            .catch((error) =>{
                console.log(error)
            })
        },
        methods:{
            delAccount(delId){
                Vue.$http.delete('http://localhost:3000/users/' + delId)
                .then((response) => {
                    console.log("Delete UserId: " + delId)
                })
                .catch((error) =>{
                    console.log(error)
                })
                window.location.reload()
            }
        },
        computed: {
            filterdUsers: function () {
            return this.Users.filter((user) => {
                return user.firstname.match(this.search)
            })
            }
        },
    }
</script>

<style>
    
    .searchBar{
        margin-top: 30px;
        box-shadow: 0px 0px 40px lightgray;
    }
    #testing{
        padding-left: 50px;
    }
    .input-group__details{
        min-height:0px;
    }
    .searchBtn{
        height:100%;
        margin: 0px;
        width: 100%;
    }
    .container.grid-list-xs .layout .flex{
        padding:0;
    }
    .container.grid-list-xs{
        padding:0;
    }
    .input-group{
        margin-left: 10px;
    }
    .contactList{
        margin-top: 50px;
    }
    .nameInfo{
        text-align: center; 
        font-weight: bold;
        font-size: 18px;
    }
    .infoObject{
        text-align: center;
        padding-top: 0;
        word-wrap:break-word;
    }
    .card__actions .btn, .card__actions>*{
        margin: auto !important;
    }
    .card__actions{
        padding-bottom: 20px;
    }
    .avatar.white{
        margin: 0 50px;
        margin-top: 10px;
    }
    .contactItems{
        padding: 10px !important;
    }
    .flex.contactItems.xs3{
        display:inline-flex;
    }
</style>

