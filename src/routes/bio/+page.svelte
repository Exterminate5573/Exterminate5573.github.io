<script>
    import { themes } from './themes'

    let selectedTheme = themes[0]
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
    }
</style>

<!-- TODO: change to svgs? -->
<img src={selectedTheme.backgroundImg} alt="background" />
<div class="text-box" style="border-color: {selectedTheme.secondary}">
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
        <a href="">
            <img src="https://cdn.simpleicons.org/steam/white" alt="steam" />
        </a>
    </div>

    <div style="width: 100%; height: 2px; background-color: {selectedTheme.secondary}; margin: 20px 0;"></div>

    <!-- Add on discord widget -->
    <div class="discord-widget" style="text-align: center; border-color: {selectedTheme.secondary}">
        
    </div>

</div>

