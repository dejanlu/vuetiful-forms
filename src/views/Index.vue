<template>
    <div class="col-12">
        <form @submit.prevent="onSubmit">
            <BaseInput
              type="text"
              label="First Name:"
              :value="$store.state.user.user.firstName"
              @input="updateUser('firstName', $event)"
              :validator="$v.form.firstName"
            />
            <BaseInput
              type="text"
              label="Last Name:"
              :value="$store.state.user.user.lastName"
              @input="updateUser('lastName', $event)"
              :validator="$v.form.lastName"
            />
            <BaseInput
              type="email"
              label="Email:"
              :value="$store.state.user.user.email"
              @input="updateUser('email', $event)"
              :validator="$v.form.email"
            />
            <BaseInput
              type="text"
              label="Phone:"
              :value="$store.state.user.user.phone"
              @input="updateUser('phone', $event)"
              :mask="'(##)###-####'"
              :validator="$v.form.phone"
            />
            <BaseInput
              type="text"
              label="Website:"
              :value="$store.state.user.user.website"
              @input="updateUser('website', $event)"
              :validator="$v.form.website"
            />
            <BaseSelect
              label="Role:"
              :options="form.roleOptions"
              :value="$store.state.user.user.role"
              @input="updateUser('role', $event)"
              :validator="$v.form.role"
            />
            <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-primary"
                  @click.prevent="onSubmit"
                  :disabled="$v.$error"
                  >Submit
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import { url, alpha, email, required } from 'vuelidate/lib/validators'
import { mapState } from 'vuex'
import BaseInput from '@/components/BaseInput'
import BaseSelect from '@/components/BaseSelect'
export default {
  name: 'Index',
  components: { BaseInput, BaseSelect },
  data () {
    return {
      roleOptions: [
        { label: 'User', value: 'user' },
        { label: 'Owner', value: 'owner' },
        { label: 'Admin', value: 'admin' }
      ]
    }
  },
  validations: {
    form: {
      firstName: {
        alpha,
        required
      },
      lastName: {
        alpha
      },
      email: {
        email,
        required
      },
      website: {
        url
      },
      phone: {
        validPhone: phone => phone.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) !== null
      },
      role: {
        required
      }
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) return
      axios
        .post('http://localhost:3000/dolphins', { params: this.form })
        .then(response => {
          console.log('Form has been posted', response)
        }).catch(error => {
          console.log('An error occurred!', error)
        })
    },
    updateUser (prop, value) {
      this.$store.dispatch('updateUserData', {
        prop, value
      })

      this.$v.form[prop].$touch()
    }
  },
  computed: {
    ...mapState({ form: state => state.user.user })
  }
}
</script>

<style scoped>

</style>
