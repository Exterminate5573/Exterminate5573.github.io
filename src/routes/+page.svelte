<script>
    import { Button, Alert, Card, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Toast, DarkMode } from 'flowbite-svelte';
    
    import { page } from '$app/stores';
    $: activeUrl = $page.url.pathname;
</script>

<Navbar let:hidden let:toggle color="form" class="fixed top-0 left-0 right-0 z-50">
  <NavBrand href="/">
    <!-- <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" /> -->
    <span class="self-center whitespace-nowrap text-xl font-semibold">Exterminate</span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden} {activeUrl}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/projects">Projects</NavLi>
    <NavLi href="/socials">Socials</NavLi>
  </NavUl>
  <DarkMode /> 
</Navbar>


