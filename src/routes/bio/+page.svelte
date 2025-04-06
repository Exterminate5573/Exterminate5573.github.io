<script lang="ts">
    import { onMount } from 'svelte';
    import { themes } from './themes';

    let selectedTheme: any;
    let isThemeLoaded = false;

    onMount(() => {
        // Select a random theme from the themes array on load
        const selectedThemeIndex = Math.floor(Math.random() * themes.length);
        selectedTheme = themes[selectedThemeIndex];
        isThemeLoaded = true; // Mark theme as loaded
    });

    function addOnDiscord() {
        window.open("https://discord.com/users/598354701536329728", "_blank");
    }
</script>

<style>
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
    .text-box {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 640px;
        height: 414px;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 20px;
        border-radius: 10px;
        border-width: 2px;
    }
    h1 {
        font-size: 3rem;
        text-align: center;
        font-weight: bold;
    }
    p {
        font-size: 1.5rem;
        text-align: center;
    }

    /* New styles for horizontal layout */
    .icon-container {
        display: flex;
        justify-content: center;
        gap: 15px; /* Space between icons */
        margin-top: 20px;
    }
    .icon-container a img {
        width: 32px;
        height: 32px;
    }

    .discord-widget {
        width: 100%;
        height: 100px;
        border-radius: 10px;
        margin-top: 20px;
        border-width: 2px;
        border-style: solid;
        display: flex;
    }

    .avatar-container {
        position: relative;
        display: inline-block;
        margin-left: 10px;
    }

    .discord-avatar {
        width: 76px;
        height: 76px;
        border-radius: 10px;
        border-width: 2px;
        margin-top: 10px;
    }

    .online-status {
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 9999px;
        top: 73px;
        right: -5px;
    }
</style>

{#if isThemeLoaded}
<!-- TODO: change to svgs? -->
<img src={selectedTheme.backgroundImg} alt="background" />
<div class="text-box" style="border-color: {selectedTheme.primary}">
    <h1>Exterminate</h1>
    <p>I use arch btw</p>

    <div class="icon-container">
        <a href="https://github.com/Exterminate5573/">
            <img src="https://cdn.simpleicons.org/github/white" alt="github" />
        </a>
        <a href="https://discord.com/users/598354701536329728">
            <img src="https://cdn.simpleicons.org/discord/white" alt="discord" />
        </a>
        <a href="https://namemc.com/profile/ImExterminate.1">
            <img src="https://cdn.simpleicons.org/namemc/white" alt="namemc" />
        </a>
        <a href="https://tracker.gg/valorant/profile/riot/giggleshtter%236969/overview">
            <img src="https://cdn.simpleicons.org/valorant/white" alt="valorant" />
        </a>
        <a href="https://steamcommunity.com/id/Exterminate5573/">
            <img src="https://cdn.simpleicons.org/steam/white" alt="steam" />
        </a>
    </div>

    <div style="width: 100%; height: 2px; background-color: {selectedTheme.primary}; margin: 20px 0;"></div>

    <!-- Add on discord widget -->
    <div class="discord-widget" style="text-align: center; border-color: {selectedTheme.primary}">
        <!-- Avatar container -->
        <div class="avatar-container">
            <img class="discord-avatar" src="https://cdn.discordapp.com/avatars/598354701536329728/5b95a332d87d433802c302514a85dc0f.webp" alt="avatar" style="border-color: {selectedTheme.secondary};" />
            <div class="online-status" style="background-color: rgb(22 163 74)"></div>
        </div>

        <div class="discord-text" style="margin-left: 10px; display: flex; flex-direction: column; align-items: flex-start;">
            <p class="discord-displayname" style="font-size: 1.5rem; font-weight: bold;">Exterminate</p>
            <p class="discord-username" style="font-size: 1rem;">@exterminate_</p>
            <p class="discord-status" style="font-size: 1rem;">a</p>
        </div>

        <!-- TODO: Activity Status, Actually check if I am online -->

        <div class="discord-addbtn" style="margin-left: auto; margin-right: 10px; display: flex; align-items: center;">
            <button style="border-color: {selectedTheme.secondary}; border-width: 2px; color: white; padding: 10px 20px; border-radius: 5px; cursor: pointer;" on:click={addOnDiscord}>
                Add on Discord
            </button>
        </div>
    </div>

</div>
{/if}