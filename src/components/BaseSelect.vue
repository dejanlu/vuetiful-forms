<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <select class="form-control" @change="$emit('input', $event.target.value)">
      <option
        v-for="option in options"
        :key="option.value"
        :selected="value === option.value"
        :value="option.value"
        :class="{
          'is-valid': validator && !validator.$error && validator.$dirty,
          'is-invalid': validator &&  validator.$error
        }">
          {{ option.label || 'No label' }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: true
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

<style>

</style>
