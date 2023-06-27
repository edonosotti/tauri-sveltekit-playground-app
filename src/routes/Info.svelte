<script lang="ts">
  import { getContext, onMount, createEventDispatcher } from 'svelte';
  import { ContextKey } from '../types/context';
  import type { Writable } from "svelte/store";
  import { replace } from 'svelte-spa-router'
  import { Heading, P, Button, Kbd, Badge } from 'flowbite-svelte';

  // Retrieve the `store` for the `Dark Mode` setting
  const darkMode = getContext<Writable<boolean>>(ContextKey.DarkMode);

  // Initialize the event dispatcher.
  const dispatch = createEventDispatcher();

  // `onMount` is executed when the view is rendered.
  onMount(() => {
    // Dispatch a demo event.
    dispatch("routeEvent", {view: "Info"});
  });
</script>

<div class="flex h-screen dark:bg-gray-900 dark:text-white">
  <div class="m-14">
    <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-5xl">Routing across views</Heading>

    <P class="mb-6 text-lg lg:text-xl dark:text-gray-400">
      This application was built as a <em>single page application</em> using the
      <Badge><code>svelte-spa-router</code></Badge>
      package as a replacement for SvelteKit's router.
    </P>

    <P class="mb-6 text-lg lg:text-xl dark:text-gray-400">
      It uses the <Badge><code>replace()</code></Badge> function to navigate across the views
      instead of the <Badge><code>push()</code></Badge> function so it rewrites the "browsing"
      history and users can't accidentally go back to the previews view tapping
      the <Kbd class='px-2 py-1.5'>Backspace</Kbd> key in the window.
    </P>

    <hr class="mb-4" />

    <Heading tag="h2" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-5xl">State</Heading>

    <P class="mb-6 text-lg lg:text-xl dark:text-gray-400">
      <Badge><code>getContext</code></Badge>, <Badge><code>setContext</code></Badge>
      and <Badge><code>stores</code></Badge> can be used to share the state across
      components. The current dark mode status is:
      <Badge color="{$darkMode ? "green" : "dark"}"><code>{$darkMode}</code></Badge>
    </P>
    <Button color="dark" on:click={() => replace("/")}>
      Understood
    </Button>
  </div>
</div>
