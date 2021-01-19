<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <input
        :type="type"
        class="form-control"
        :value="value"
        @input="$emit('input', $event.target.value)"
        v-mask="mask"
        :class="{
          'is-valid': validator && !validator.$error && validator.$dirty,
          'is-invalid': validator &&  validator.$error
        }"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text',
      validator (value) {
        return ['text', 'email', 'password'].includes(value)
      }
    },
    value: {
      type: String,
      required: true
    },
    mask: {
      type: String,
      required: false
    },
    validator: {
      type: Object,
      required: false,
      validator ($v) {
        return $v.hasOwnProperty('$model')
      }
    }
  }
}
</script>

<style scoped>

</style>
