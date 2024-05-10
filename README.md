# 🍚 hyprmixer

![hyprmixer_overview.gif](/hyprmixer_overview.gif)

## 👀 Overview
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/kPWiIddwspo/0.jpg)](https://www.youtube.com/watch?v=kPWiIddwspo)

## Features

- Volume control
- Play, pause, next and previous
- Control various players at once

## Dependencies

Hypermixer needs [playerctl](https://github.com/altdesktop/playerctl) to work!

## 🛫 Insallation

You can either download the AppImage from the [releases page](https://github.com/Torelli/hyprmixer/releases) or download it from [AUR](aur.archlinux.org/packages/hyprmixer) using a AUR helper

```sh
yay -S hyprmixer
```
## Starting

Just run ```sh hypermixer``` on your terminal

## Use it with waybar

```json
"mpris": {
        "format": "{player_icon}",
        "format-paused": "{status_icon}",
        "player-icons": { 
            "default": "\uf28b",
            "mpv": "🎵"
        },
        "status-icons": {
            "paused": "\uf144"
        },
        "on-click": "hyprmixer",
        "max-length": 1000,
        "interval": 1,
    }

```

## Contributing

Feel free to send a pull request and lets make hyprmixer even better!
