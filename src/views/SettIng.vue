<!-- <template>
  <v-row>
    <v-col cols="12">
      <h1 class="text-center">設定</h1>
    </v-col>

    <v-col cols="12">
      <v-table>
        <thead>
          <tr>
            <th>名稱</th>
            <th>try聽</th>
            <th>選擇</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="alarm in alarms">
            <td>{{ alarm.name }}</td>
            <td> <audio controls :src="alarm.file" /> </td>
            <td>
              <v-radio v-model="selectedAlarm" :value="alarm.id" />
            </td>

          </tr>
        </tbody>
      </v-table>
    </v-col>

  </v-row>


</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()
const { selectedAlarm, alarms } = storeToRefs(settings)
</script> -->
