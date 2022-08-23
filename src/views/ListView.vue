<template>
    <v-row>
        <v-col cols="12">
            <h1>代辦事項</h1>
        </v-col>


        <v-col cols="12">
            <v-text-field variant="underlined" v-model="newItem" append-icon="mdi-plus" :rules="[required]"
                @click:append="onInputSubmit" @keydown.enter='onInputSubmit'>


                <v-table>
                    <thead>
                        <tr>
                            <th>名稱</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="items.length === 0">
                            <td colspan="2" class="text-center">沒有資料</td>
                        </tr>
                        <tr v-for="(item, i) in items">
                            <td>
                                <v-text-field v-if="item.edit" v-model="item.model" autofocus />
                                <span v-else> {{ item.name }}</span>
                            </td>
                            <td>
                                <span v-if="item.edit">
                                    <v-btn icon variant="plain" flat color="green" @click="confirmEditItem(i)">
                                        <v-icon icon="mdi-check" />
                                    </v-btn>
                                    <v-btn icon variant="plain" flat color="red" @click="cancelditItem(i)">
                                        <v-icon icon="mdi-undo" />
                                    </v-btn>
                                </span>

                                <span v-else>
                                    <v-btn icon variant="plain" flat color="green" @click="editItem(i)">
                                        <v-icon icon="mdi-pencil" />
                                    </v-btn>
                                    <v-btn icon variant="plain" flat color="red" @click="delItem(i)">
                                        <v-icon icon="mdi-delete" />
                                    </v-btn>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-text-field>
        </v-col>
    </v-row>

</template>





<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useListStore } from '../stores/list'

const newItem = ref('')
const required = value => {
    return !!value
}

const list = useListStore()
const { items } = storeToRefs(list)
const { addItem, delItem, editItem, confirmEditItem, cancelEditItem } = list

const onInputSubmit = () => {
    const valid = required(newItem.value)
    if (!valid) return
    addItem(newItem.value)
    newItem.value = ''
}
</script>