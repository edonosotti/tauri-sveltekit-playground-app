<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { ContextKey } from '../types/context';
  import Router from 'svelte-spa-router';
  import Welcome from './Welcome.svelte';
  import Info from './Info.svelte';

  // Create a `store` for the `Dark Mode` setting
  // and add it to the context.
  setContext(ContextKey.DarkMode, writable(false));

  // Define the Routes and the Components to display for each route.
  const routes = {
    '/': Welcome,
    '/info': Info,
  }

  // Define a handler to catch events dispatched by the routed Components.
  const routeEventHandler = (payload: CustomEvent): void => {
    console.log("Route event", payload);
  };
</script>

<Router {routes} on:routeEvent={routeEventHandler} />
