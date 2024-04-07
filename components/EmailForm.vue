<template>
  <div class="sm:text-center lg:mx-0 lg:text-left ">
    <div v-if="!success">
      <UForm ref="form"
             :schema="schema"
             :state="state"
             class="flex space-x-2 items-center content-center"
             @submit="onSubmit">
        <UFormGroup label="Full name"
                    name="name">
          <UInput v-model="state.name"
                  icon="i-heroicons-user" />
        </UFormGroup>
        <UFormGroup label="Email"
                    name="email">
          <UInput v-model="state.email"
                  icon="i-heroicons-envelope"
                  type="email" />
        </UFormGroup>
        <div class="mt-6">
          <UButton type="submit">
            Submit
          </UButton>
        </div>
      </UForm>
      <p class="mt-3 text-sm text-gray-500">
        We care about your data. Read our
        <a href="/privacy/"
           class="font-medium text-gray-900 underline"> Privacy Policy</a>.
      </p>
    </div>
    <div v-if="success">
      <p class="text-base font-medium text-gray-900">
        Thank you for signing up. Please check your email for a confirmation email.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import { z } from 'zod'

interface Response {
  status: boolean
  message: string
}

const schema = z.object({
  name: z.string().min(3, 'Must be at least 3 characters').refine(s => s.includes(' '), 'Please enter your full name'),
  email: z.string().email()
})

const state = reactive({
  name: undefined,
  email: undefined
})

const form = ref()
const success = ref(false)

async function onSubmit(event: FormSubmitEvent<any>) {
  form.value.clear()
  const payload = event.data
  try {
    const response: Response = await $fetch('/.netlify/functions/email-signup', {
      method: 'POST',
      body: JSON.stringify(payload)
    })
    if(response.status === true) {
      success.value = true
    } else {
      form.value.setErrors([{message: response.message, path: 'name'}])
    }
  } catch (err: any) {
    if (err.statusCode === 500) {
      form.value.setErrors([{message: 'An error occurred. Please try again later.', path: 'name'}])
    }
    if (err.statusCode === 422) {
      form.value.setErrors(err.data.errors.map((err: FormError) => ({
        message: err.message,
        path: err.path,
      })))
    }
  }
}


</script>