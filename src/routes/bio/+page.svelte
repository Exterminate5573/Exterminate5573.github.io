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
</style>

<!-- TODO: change to svgs? -->
<img src={selectedTheme.backgroundImg} alt="background" />
<div class="text-box" style="border-color: {selectedTheme.secondary}">
    <h1>Exterminate</h1>

    <a href="https://github.com/Exterminate5573/">
        <img style="width: 32px; height: 32px;" src="https://cdn.simpleicons.org/github/white" alt="github" />
    </a>

    <a href="https://discord.com/users/598354701536329728">
        <img style="width: 32px; height: 32px;" src="https://cdn.simpleicons.org/discord/white" alt="discord" />
    </a>

    <a href="https://namemc.com/profile/ImExterminate.1">
        <img style="width: 32px; height: 32px;" src="https://cdn.simpleicons.org/namemc/white" alt="namemc" />
    </a>

    <a href="https://tracker.gg/valorant/profile/riot/giggleshtter%236969/overview">
        <img style="width: 32px; height: 32px;" src="https://cdn.simpleicons.org/valorant/white" alt="valorant" />
    </a>

    <a href="">
        <img style="width: 32px; height: 32px;" src="https://cdn.simpleicons.org/steam/white" alt="steam" />
    </a>

</div>

