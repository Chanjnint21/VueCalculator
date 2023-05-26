<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" width="500px">
            <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" color="secondary" dark>
                    mdi-history
                </v-icon>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">History</span>
                </v-card-title>
                <v-card-text>
                    <!-- list to display history -->
                    <ul class="HistoryList">
                        <li v-for="his in history" :key="his" v-html="his">
                        </li>
                    </ul>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <!-- btn to close history dialog -->
                    <v-btn color="green darken-1" text @click="dialog = false">
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import '../assets/styles.css'

export default {
    name: 'CalHistory',
    props: {
        history: {
            type: Array
        }
    },
    data() {
        return {
            dialog: false
        }
    }
}

</script>