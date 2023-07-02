<!--
  - MIT License
  -
  - Copyright (c) 2021 苗锦洲
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
  <v-form ref="form" @submit.native.prevent>
    <v-text-field
        :value="value"
        :loading="loading"
        :disabled="loading"
        clearable
        v-bind="$attrs"
        :outlined="outlined"
        :rules="textRules"
        :error-messages="error"
        :label="label"
        @change="$emit('input', $event)"
        @keydown.enter="$emit('keydown-enter')"
    >
      <template #append-outer>
        <v-form ref="fileForm" @submit.native.prevent>
          <v-file-input
              :disabled="loading"
              hide-input
              hide-details
              :rules="rules"
              :accept="accept"
              class="pt-0 mt-0 or-file-field"
              @change="onFileSelected"
          />
        </v-form>
      </template>
    </v-text-field>
  </v-form>
</template>

<script>
export default {
  name: 'OrFileField',
  props: {
    value: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    textRules: {
      type: Array,
      default: null
    },
    rules: {
      type: Array,
      default: null
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    errorWhenFileNotValid: {
      type: String,
      default: '文件过大，请重新选择'
    },
    outlined: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['input', 'keydown-enter', 'change'],
  data: () => ({
    error: null
  }),
  methods: {
    validate () {
      return this.$refs.form.validate() && this.$refs.fileForm.validate()
    },
    onFileSelected (file) {
      if (file == null) {
        return
      }
      if (!this.$refs.fileForm.validate()) {
        this.error = this.errorWhenFileNotValid
        setTimeout(() => {
          this.error = null
          this.$refs.fileForm.resetValidation()
        }, 2000)
      } else {
        this.$emit('change', file)
      }
    }
  }
}
</script>

<style>
.or-file-field .v-input__prepend-outer {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
</style>