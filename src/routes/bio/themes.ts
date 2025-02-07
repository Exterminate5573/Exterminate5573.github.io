
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
    new Theme("Strinova", "#FFC107", "#FF9800", "strinova1.png"),
]