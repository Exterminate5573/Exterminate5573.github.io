<script>
    import { GradientButton, Alert, Card, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Toast, DarkMode, ImagePlaceholder, P, Heading, Span } from 'flowbite-svelte';
    
    import { page } from '$app/state';
    //TODO: https://svelte.dev/docs/kit/$app-state ???
    //It seems to work
    const activeUrl = $derived(page.url.pathname)
    //$: activeUrl = page.url.pathname;
</script>

<Navbar let:hidden let:toggle color="navbar" class="fixed top-0 left-0 right-0 z-50">
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold">Exterminate</span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden} {activeUrl}>
    <NavLi href="/#">Home</NavLi>
    <NavLi href="/#projects">Projects</NavLi>
    <NavLi href="/#socials">Socials</NavLi>
  </NavUl>
  <DarkMode /> 
</Navbar>

<div class="container mx-auto p-10 flex flex-wrap items-start">
  <div class="w-full md:w-2/3">
    <Heading class="text-4xl font-bold text-left mt-20 text-black dark:text-white">Hi, I'm <!-- TODO: Add gradient when they fix span --> <Span >Exterminate</Span> 👋</Heading>
    <P class="text-left mt-5 dark:text-white">
      I'm a passionate developer currently doing Year 12 VCE.
      I enjoy playing games and coding various projects.
      All my programming is self-taught, and I enjoy learning new languages and frameworks.
      Some of my favourite languages are Python, Java and C++. 
      You can find lots of my projects on my GitHub and I am looking to help out with more open source projects.
      I am especially interested in game development and my biggest projects are game mods.
      Outside of programming, I enjoy playing games, going Rock Climbing and spending time with my friends.
    </P>
  </div>
  <div class="w-full md:w-1/3 mt-10 md:mt-0 py-20 p-5">
    <ImagePlaceholder imgHeight=64></ImagePlaceholder>
  </div>
</div>

<div id="projects" class="container mx-auto p-10 flex flex-wrap md:flex-nowrap items-start">
  <div class="w-full md:w-1/3 mt-10 md:mt-0 py-20">
    <ImagePlaceholder imgHeight=64></ImagePlaceholder>
  </div>
  <div class="w-full md:w-2/3 md:pl-10">
    <Heading class="text-4xl font-bold text-left mt-20 text-black dark:text-white">Projects</Heading>
    <P class="text-left mt-5 dark:text-white">
      I have worked on a variety of projects, including game mods, web applications and more.
      You can find most of my projects on my GitHub.
      I am always looking for new projects to work on, so feel free to reach out if you have any ideas!
    </P>
    <div class="mt-5">
      <GradientButton color="purpleToBlue" href="https://github.com/Exterminate5573?tab=repositories" target="_blank" rel="noopener noreferrer">View my GitHub</GradientButton>
    </div>
  </div>
</div>

<div id="socials" class="container mx-auto text-center py-20">
  <Heading class="text-4xl font-bold text-black dark:text-white">Socials</Heading>
  <P class="text-lg mt-5 dark:text-white">Connect with me on these platforms:</P>
  <div class="flex justify-center mt-10 space-x-5">
    <GradientButton color="purpleToBlue" href="https://github.com/Exterminate5573" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" class="w-5 h-5 mr-2" />
      GitHub
    </GradientButton>
    <GradientButton color="purpleToBlue" href="https://discord.com/users/598354701536329728" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn.simpleicons.org/discord/white" alt="Discord" class="w-5 h-5 mr-2" />
      Discord
    </GradientButton>
    <GradientButton color="purpleToBlue" href="mailto:Exterminate5573@gmail.com">
      <img src="https://cdn.simpleicons.org/gmail/white" alt="Email" class="w-5 h-5 mr-2" />
      Email
    </GradientButton>
    <!-- TODO: Linkedin (When/If I get one) & other socials (If I end up using any) -->
  </div>
</div>
