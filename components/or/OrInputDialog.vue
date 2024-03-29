<!--
  - MIT License
  -
  - Copyright (c) 2023 苗锦洲
  -
  - Permission is hereby granted, free of charge, to any person obtaining a copy
  - of this software and associated documentation files (the "Software"), to deal
  - in the Software without restriction, including without limitation the rights
  - to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  - copies of the Software, and to permit persons to whom the Software is
  - furnished to do so, subject to the following conditions:
  -
  - The above copyright notice and this permission notice shall be included in all
  - copies or substantial portions of the Software.
  -
  - THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  - IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  - FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  - AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  - LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  - OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  - SOFTWARE.
  -->

<template>
  <or-base-dialog
      ref="dialog"
      persistent
      loading
      :title="title"
      @onClose="onClose"
      @onConfirm="confirm"
  >
    <v-form ref="form" @submit.native.prevent>
      <v-text-field
          v-model.trim="input"
          :rules="rules"
          :label="label"
          :hint="hint"
          @keydown.enter="confirm"
      >
        <template #prepend>
          <slot name="prepend" />
        </template>
        <template #prepend-inner>
          <slot name="prepend-inner" />
        </template>
        <template #append>
          <slot name="append" />
        </template>
        <template #append-outer>
          <slot name="append-outer" />
        </template>
      </v-text-field>
    </v-form>
  </or-base-dialog>
</template>

<script>
export default {
  name: 'OrInputDialog',
  props: {
    /**
     * 关闭时是否保留输入
     */
    keepInputOnClose: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: [String, Number],
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: null
    },
    rules: {
      type: Array,
      default: () => []
    },
    hint: {
      type: String,
      default: null
    }
  },
  data: () => ({
    input: ''
  }),
  created () {
    this.input = this.defaultValue
  },
  methods: {
    show () {
      this.$refs.dialog.show()
    },
    close () {
      this.$refs.dialog.close()
    },
    confirm () {
      if (!this.$refs.form.validate()) {
        this.cancelLoading()
        return
      }
      this.$emit('onConfirm', this.input)
    },
    cancelLoading () {
      this.$refs.dialog.cancelLoading()
    },
    validate () {
      return this.$refs.form.validate()
    },
    onClose () {
      if (!this.keepInputOnClose) {
        this.input = ''
      }
      this.$emit('onClose')
    }
  }
}
</script>

<style scoped>

</style>
