---
layout: post
title: "My Open Source Journey: Projects I've Been Working On!"
date: 2025-04-05 22:39:13 -0300
categories: ["life","OpenSource"]
tags: ["Unity","FOSS","CSS","JavaScript"]
comments: true
---

# My Open Source Journey: Projects I've Been Working On!

Hey there!

It's been awhile! I feel like I just blinked in 2022 and suddenly it's 2025. Did I accidentally time travel, or did I just get lost in a really long coding session?

I've been exploring the world of open source, and I wanted to share some of the projects I've been involved in. Open source has always been a passion of mine - the truth is, I wouldn't be a developer without it.

## Aurora CSS Framework

![Built with Sass](https://img.shields.io/badge/Built%20with-Sass-ff69b4) ![Built with JavaScript](https://img.shields.io/badge/Built%20with-JavaScript-F7DF1E)

> 
[Component Showcase](https://www.nativvstudios.com/aurora.html), [Github Repo](https://github.com/nativvstudios/auroracss)
![Aurora](https://github.com/nativvstudios/auroracss/raw/main/showcase.gif)


Aurora is a lightweight, modern CSS framework designed for creating elegant, responsive interfaces. It features glass morphism effects, fluid animations, and dark/light mode support. Here are some of its standout features:

- **Glass Morphism**: Beautiful glass-like UI components with backdrop blur effects.
- **Dark & Light Themes**: Seamless theme switching that remembers user preferences.
- **Animations**: Smooth transitions and effects that bring your UI to life.
- **Modular Components**: Build your interface like Lego blocks!

Originally started as a learning project, Aurora has personally grown into a highly useful framework that I now use for most of my web development work. I intend to continue its development and create a comprehensive documentation page.

## Scene Organizer for Unity

![Unity Version](https://img.shields.io/badge/Unity-2019.4%2B-blue)
![License](https://img.shields.io/badge/License-MIT-green)

> 
[Github Repo](https://github.com/nativvstudios/SceneOrganizer)
>
![Aurora](/assets/uploads/scenemanager.gif)

Any Unity developer knows the pain of managing scenes in larger projects. You have your main menu, different levels, UI scenes, and before you know it, you're swimming in a sea of scene files with no organization.

That's why I created Scene Organizer - a Unity Editor tool that helps you organize, manage, and quickly access scenes in your project. You can:

- Group related scenes together (like "UI Scenes" or "Level 3 Variations")
- Open scenes directly from the organizer window
- Easily add scenes with drag-and-drop
- Rename scenes without leaving the editor
- Even backup your organization data so you never lose your structure

This tool has honestly saved me hours of work on my own projects. No more endlessly scrolling through the project window trying to find that one specific scene!

## nSearch

> Just launch, nSearch!
>
[Github Repo](https://github.com/nativvstudios/nSearch)
![Aurora](/assets/uploads/nsearch.gif)

This one might be my favorite. nSearch is a powerful Unity Editor extension that supercharges your workflow with lightning-fast access to project assets, scene hierarchy objects, and instant calculations.

Have you ever found yourself thinking "where was that script again?" or "what was the name of that prefab?" - nSearch solves this with:

- Fuzzy search technology that finds assets as you type
- Smart hierarchy navigation with the "h:" prefix
- A built-in calculator for quick math right in the editor
- Visual previews of assets with custom icons for different types

I actually built this with some AI assistance, which was a cool learning experience in itself. The tool uses a Trie data structure for super fast searching, and I've optimized it to handle even large projects with ease.

Launch it with Ctrl+Shift+Space (or Cmd+Shift+Space on Mac), type what you need, and boom - instant results!

## Noctis Jekyll Theme

>
[Github Repo](https://github.com/nativvstudios/noctis)
![Noctis](https://github.com/nativvstudios/Noctis/raw/main/desktop.png)

Noctis is my minimalist, dark Jekyll theme that I've been working on. It's still a work in progress, but I'm really excited about how it's coming along!

Inspired by Jimmy Cai's Stack theme for Hugo, Noctis features:

- Dark minimalist aesthetic
- Responsive design for mobile and desktop
- Tags and categories support
- Light/dark mode toggle
- Color schemes

Noctis is still a work in progress, but it already serves as a solid foundation for a responsive three-column blog design. I plan to complete it soon, but I've been preoccupied with Aurora and my game, From Ether, which have both seen significant progress.

## Tiled Rules.txt Generator

>
[Github Repo](https://github.com/nativvstudios/tiled-rules-gen-ext)
>
![Tiled Rules.txt Generator](/assets/uploads/rulesmanager.png)

The last (but not least) project I want to share is my Tiled Rules Generator. If you've ever used the [Tiled Map Editor](https://www.mapeditor.org/) for game development, you know how powerful its automapping rules can be - but also how tedious it is to manage rules.txt files manually.

This extension helps you:

- Scan multiple folders for .tmx rule files
- Apply wildcard patterns to control which maps rules apply to
- Automatically generate properly formatted rules.txt files
- Manage everything through a simple UI

Here's an example of what the generated rules.txt looks like:

```txt
# Rules.txt generated by Tiled Rules Generator
# Generated on: March 31, 2025 9:13:42 PM

# Rules from folder: C:\Projects\GameAssets\Tilesets\Dungeon\Rules

[wildcardExample*]
C:\Projects\GameAssets\Tilesets\Dungeon\Rules\wall-1-rule0-reset.tmx
C:\Projects\GameAssets\Tilesets\Dungeon\Rules\wall-1-rule1-places.tmx
C:\Projects\GameAssets\Tilesets\Dungeon\Rules\wall-1-rule2-variations.tmx

# Rules from folder: C:\Projects\GameAssets\Tilesets\Castle\Rules

[*]
C:\Projects\GameAssets\Tilesets\Castle\Rules\stone-1-rule0-reset.tmx
C:\Projects\GameAssets\Tilesets\Castle\Rules\stone-1-rule1-places.tmx
C:\Projects\GameAssets\Tilesets\Castle\Rules\stone-1-rule2-variations.tmx
```

What started as a small utility for my own game development has turned into a fully-featured extension that others can use too!

## Looking Forward

Just like I mentioned in my [2022 recap post](https://nativvstudios.com/posts/nativv-studios-2022-recap/), I'm trying to share more of my work and create tools that genuinely help other developers.
My goal for the rest of the year is to improve the documentation for these projects, add more features based on community feedback, and maybe even create some video tutorials on how to use them effectively.

I'm excited about the journey ahead and can't wait to see where these projects will take me. If you are reading this, Thank you for following along, and stay tuned for more updates and new releases!


---
>Written by: [{{site.data.author.name}}](https://www.nativvstudios.com/blog/)
>GitHub: [Nativvstudios](https://github.com/nativvstudios)
>X: [@Whyherro1](https://x.com/whyherro1)
