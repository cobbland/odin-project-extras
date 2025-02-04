# Setup

The steps to take when setting up a new linux machine (for The Odin Project specifically, but many are also in general).

- ...
- [Set an alias to pull multiple git repos at once](https://dev.to/rmpato/git-pull-multiple-repositories-at-once-4l68) ("multipull")
- ...

## Appimage Setup

*Instead of the following, you could also just use [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher).*

- Make executable: `sudo chmod +x *.AppImage`.
- Run the file: `./"name of file (without quotation marks)"`
- Using the `mount` command, find where the appimage is mounted.
- Navigate to the mounted folder.
- copy the icon file to `~/.local/share/icons/` and the .desktop file to `~/.local/share/applications/`.