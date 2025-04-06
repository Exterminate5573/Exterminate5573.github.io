
class Theme {

    name: string;
    primary: string;
    secondary: string;
    backgroundImg: string;

    constructor(name: string, primary: string, secondary: string, backgroundImg: string) {
        this.name = name;
        this.primary = primary;
        this.secondary = secondary;
        this.backgroundImg = "/backgrounds/" + backgroundImg;
    }

}

export const themes = [
    new Theme("Strinova", "#FF9800", "#FFC107", "strinova1.png"),
    new Theme("Arch BTW", "#00B7FF", "#FFFFFF", "archlinux.jpg"),
    new Theme("Winter", "#FFFFFF", "#FFFFFFF", "winter.jpg"),
    new Theme("Winter Pink", "#FFB6C1", "#FFFFFFF", "winter_pink.jpg"),
    new Theme("Arch Linux", "#AD00FC", "#FFFFFF", "archlinux2.png"),
    new Theme("Ocean Night", "#002AFC", "#FFFFFF", "ocean.jpg"),
    new Theme("Japan", "darkgreen", "#FFFFFF", "japan.png"),
    new Theme("Summer", "#FF9800", "#FFB6C1", "summer.png"),
]