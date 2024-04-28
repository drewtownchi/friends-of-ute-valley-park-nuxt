<template>
  <div>
    <div class="isolate overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div class="relative mx-auto max-w-7xl">
        <div
          class="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-60"
          aria-hidden="true">
          <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/4 rotate-[30deg] bg-gradient-to-tr from-green-200 to-teal-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] polygon" />
        </div>
      </div>
      <div class="relative mx-auto max-w-xl">
        <div>
          <slot name="title">
            <p class="text-base font-semibold leading-7 text-green-600">Need Help? Contact Us!</p>
            <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Contact Friends of Ute Valley Park
            </h1>
          </slot>
          <p class="mt-4 text-base leading-6 text-gray-500">
            <slot name="subtitle">
              If you have a question, comment or concern, don't hesitate to reach out. Our team is always here to assist
              you in any way we can. Before contacting us, please take a moment to browse our
              <a class="font-semibold text-green-700 no-underline" href="/faq/"> FAQ </a>
              page to see if your question has already been answered. We look forward to hearing from you!
            </slot>
          </p>
        </div>
        <p class="my-2"><span class="text-red-700">*</span> indicates a required field</p>
        <div class="mt-8">
          <UForm ref="form" :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
            <UFormGroup label="Name" name="name" required>
              <UInput v-model="state.name" size="xl" />
            </UFormGroup>
            <UFormGroup label="Email" name="email" required>
              <UInput v-model="state.email" size="xl" />
            </UFormGroup>
            <UFormGroup label="Category" name="category" required>
              <USelectMenu v-model="state.category" :options="options" size="xl" />
            </UFormGroup>
            <div v-if="state.category == 'Volunteer'" class="sm:col-span-2">
              <div class="rounded-md bg-green-50/60 p-4">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <Icon name="heroicons:exclamation-circle" class="mt-1 h-6 w-6 text-green-800" aria-hidden="true" />
                  </div>
                  <div class="ml-3">
                    <h3 class="text-xl font-medium text-green-800">Volunteer Information</h3>
                    <div class="mt-2 text-sm text-green-700">
                      <p>
                        We hold volunteer work events the first and third Wednesday of the month April through
                        September. You can find more information on our
                        <a class="text-green-800 underline" href="/volunteer/">volunteer</a>
                        page. Also, consider following our
                        <a class="text-green-800 underline" href="https://www.facebook.com/FriendsOfUteValleyPark"
                          >Facebook</a
                        >
                        or
                        <a class="text-green-800 underline" href="https://www.instagram.com/friendsofutevalleypark/"
                          >Instagram</a
                        >
                        for updates.
                      </p>
                      <p class="mt-2">
                        If you have any questions regarding volunteering or organizing a volunteer event please contact
                        us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <UFormGroup label="Message" name="message" required>
              <UTextarea v-model="state.message" size="xl" />
            </UFormGroup>

            <UButton type="submit" size="xl"> Submit </UButton>
          </UForm>
          <!-- Success alert -->
          <UAlert
            v-if="success"
            icon="i-heroicons-check"
            color="green"
            variant="subtle"
            title="We got your message!"
            class="mt-4"
            description="We'll get back to you as soon as we can." />
          <!-- Error alert -->
          <UAlert
            v-if="errorMessage"
            icon="i-heroicons-x-circle"
            color="red"
            variant="subtle"
            title="An error occurred"
            class="mt-4"
            :description="errorMessage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import type { FormError, FormSubmitEvent } from "#ui/types";

interface Response {
  status: boolean;
  message: string;
}

export interface Props {
  defaultOption?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  defaultOption: null,
});

const schema = z.object({
  name: z.string().min(2, "Must be at least 2 characters"),
  email: z.string().email(),
  category: z.string(),
  message: z.string().min(10, "Must be at least 10 characters"),
});

const state = reactive({
  name: "",
  email: "",
  category: props.defaultOption || "Report a problem",
  message: "",
});
const form = ref();
const success = ref(false);
const errorMessage = ref("");

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    const response: Response = await $fetch("/.netlify/functions/contact-form", {
      method: "POST",
      body: JSON.stringify(state),
    });

    if (response.status === true) {
      // Reset form state
      state.name = "";
      state.email = "";
      state.category = props.defaultOption || "Report a problem";
      state.message = "";
      success.value = true;
    } else {
      // Handle error
      console.error("Error submitting form");
      success.value = false;
      errorMessage.value = response.message;
    }
  } catch (err: any) {
    if (err.statusCode === 500) {
      form.value.setErrors([{ message: "An error occurred. Please try again later.", path: "name" }]);
    }
    if (err.statusCode === 422) {
      form.value.setErrors(
        err.data.errors.map((err: FormError) => ({
          message: err.message,
          path: err.path,
        })),
      );
      errorMessage.value = "Please ensure all fields are filled out correctly.";
    }
  }
}

const options = ["Report a problem", "Volunteer", "Information", "Other"];
</script>

<style scoped>
.polygon {
  clip-path: polygon(
    74.1% 44.1%,
    100% 61.6%,
    97.5% 26.9%,
    85.5% 0.1%,
    80.7% 2%,
    72.5% 32.5%,
    60.2% 62.4%,
    52.4% 68.1%,
    47.5% 58.3%,
    45.2% 34.5%,
    27.5% 76.7%,
    0.1% 64.9%,
    17.9% 100%,
    27.6% 76.8%,
    76.1% 97.7%,
    74.1% 44.1%
  );
}
</style>
