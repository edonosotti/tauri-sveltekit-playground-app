<script lang="ts">
  import { getContext, onMount, createEventDispatcher } from 'svelte';
  import { ContextKey } from '../types/context';
  import type { Writable } from "svelte/store";
  import { replace } from 'svelte-spa-router'
  import { Heading, P, Button } from 'flowbite-svelte';
  import { toggleDarkMode, switchModeButtons } from '../services/ui';
  import * as Icon from 'svelte-heros-v2';

  // Retrieve the `store` for the `Dark Mode` setting
  const darkMode = getContext<Writable<boolean>>(ContextKey.DarkMode);

  // `onMount` is executed when the view is rendered.
  onMount(() => {
    switchModeButtons();
  });

  // Define a handler for the `Dark Mode` switch buttons.
  // The `Dark Mode` `store` is updated accordingly.
  const onToggleDarkMode = () => {
    $darkMode = toggleDarkMode();
  }
</script>

<div class="flex h-screen dark:bg-gray-900 dark:text-white">
  <div class="m-auto">
    <div class="text-center">
      <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-5xl">It works!</Heading>
      <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">You are ready to create your new app.</P>

      <Button id="darkModeOn" href="/" on:click={onToggleDarkMode}>
        <Icon.Moon size="20" class="mr-1" />
        Try the dark mode
      </Button>

      <Button id="darkModeOff" href="/" on:click={onToggleDarkMode} class="hidden" color="alternative">
        <Icon.Sun size="20" class="mr-1" />
        Afraid of the dark? Go back to light!
      </Button>
    </div>
    <div class="text-center mt-5">
      <Button color="dark" on:click={() => replace("/info")}>
        More info
      </Button>
    </div>
  </div>
</div>
