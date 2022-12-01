<template>
    <div>
        <div class="card m-3" style="width: 25rem;">
            <div class="card-body">
                <div v-if="parentmessage" class="card-text alert alert-warning"  style="margin-left:500px" ><h5>{{parentmessage}}</h5></div>
                <v-btn color="success"
                    class="mr-4 color:green"
                    @click="ok"
                    style="margin-left:500px" 
                    >Message From Child to Parent
                 </v-btn>
                <v-btn
                    color="success"
                    class="mr-4 color:green"
                    @click="chidToChild"
                    style="margin-left:500px"
                    >Child to child comunication
                </v-btn>
                <h5 class="card-title" style="margin-left:500px">{{thecardtitle}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['parentmessage'],
        data() {
            return {
                thecardtitle: 'child to child!'
            }
        },
        methods: {
            ok() {
                this.$emit('finished')
            },
            chidToChild() {
                this.thecardtitle = 'child to child got message '
            }
        }
    }
</script>