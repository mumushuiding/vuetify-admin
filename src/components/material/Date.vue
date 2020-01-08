<template>
  <v-layout
    row>
    <v-dialog
      ref="dialog"
      v-model="modal"
      :return-value.sync="date1"
      persistent
      width="290px"
      style="display: inline-block;width:100%"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          slot="activator"
          v-model="date1"
          :label="label"
          prepend-icon="mdi-alarm"
          readonly
          v-on="on"
        />
      </template>

      <v-date-picker
        id="datepicker"
        v-model="date1"
        scrollable
        locale="zh-cn">
        <v-spacer/>
        <v-btn
          color="primary"
          @click="modal = false">取消</v-btn>
        <v-btn
          color="primary"
          @click="$refs.dialog.save(date1)">确定</v-btn>
      </v-date-picker>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: '选择日期'
    },
    date: {
      type: String,
      default: undefined
    }
  },
  data: () => ({
    date1: null,
    menu: false,
    modal: false
  }),
  watch: {
    'date' (val) {
      this.date1 = val
    },
    date1 (val) {
      this.$emit('update:date', val)
    }
  }
}
</script>
<style lang="scss">
#datepicker {
  .v-btn__content {
   color:black
  }
}
</style>
