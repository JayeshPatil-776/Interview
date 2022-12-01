<template>
    <v-app>
    <div>
         <div class="card m-2" style="width: 40rem;">
            <div class="card-body">
                
                <v-btn
                    color="success"
                    class="mr-4 color:green"
                    @click="sendMessage"
                    style="margin-left:500px"
                    >Message from parent to child
                </v-btn>
                <ChildCard :parentmessage="parentmessage" @finished="finished"></ChildCard>
                <p style="margin-left:500px">I see {{ totalCount }} Counts!</p>
                <p v-if="happyStaff" style="margin-left:500px">we are happy!</p>
                <v-btn 
                    color="success"
                    style="margin-left:500px"
                    :disabled="!totalCount"
                    @click="removeCount">
                    Remove Count
                </v-btn>
                <v-btn
                    color="success"
                    style="margin-left:500px"
                    :disabled="totalCount < 2"
                    @click="removeTwoCounts">
                    Remove Two Counts
                </v-btn>
            </div>
        </div>
    <v-form>
            
                <v-text-field
                    v-model="firstName"
                    label="First Name"
                    ></v-text-field>
                    <v-text-field
                    v-model="lastName"
                    label="Last Name">
                </v-text-field>

                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail">
                </v-text-field>


                <v-btn
                    color="success"
                    class="mr-4"
                    @click="Search">
                    Search
                </v-btn>

                <v-btn
                    color="error"
                    class="mr-4"
                    @click="reset"
                    >
                    Reset
                </v-btn>
            </v-form>
                <v-app id="inspire">
                <v-data-table
                dense
                :headers="headers"
                :items="desserts"
                item-key="name"
                class="elevation-1"
                ></v-data-table>
             </v-app>
        </div>
    </v-app>
</template>

<script>
    import ChildCard from './child1.vue';
    import axios from 'axios'

    export default {
        components: {ChildCard},

        data() {
            return {
                thecardtitle: 'Parent Component!',
                parentmessage: '',
                email: '',
                firstName: '',
                lastName: '',
                desserts: [],
                emailRules: [
                        v => !!v || 'E-mail is required',
                        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                    ], 
                headers: [
                { text: 'Id', value: 'id' },
                { text: 'First Name', value: 'firstName' },
                { text: 'Last Name', value: 'lastName' },
                { text: 'Email', value: 'email' },
                { text: 'Created At', value: 'createdAt' },
                { text: 'Updated At', value: 'updatedAt' }
            ]
            }
        },
        created() {
            this.Search()
        },
        computed: {
        totalCount () {
         return this.$store.state.totalCount
        },
        happyStaff () {
      return this.$store.getters.happyStaff
    }
     },
        methods: {
            Search () {
                axios.post('http://localhost:3000/getData', {
                    email: this.email,
                    firstName: this.firstName,
                    lastName: this.lastName
                }).then((result)=>{
                    this.desserts = result.data.rows
                    this.email = ''
                    this.firstName = ''
                    this.lastName = ''
                }).catch((err)=>{
                    console.log(err)
                })
            },
            reset() {
                this.email = ''
                this.firstName = ''
                this.lastName = ''
            },
            sendMessage() {
                this.parentmessage = 'Message from parent'
            },
            finished() {
                this.parentmessage = ''
            },
            removeCount() {
                // Dispatch the action to remove count
                this.$store.dispatch('removeCount', 1)
            },
            removeTwoCounts() {
               // Dispatch the action to remove two counts
               this.$store.dispatch('removeCount', 2)
            }
        }
    }
</script>
