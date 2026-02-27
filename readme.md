# Novel-Cult

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/Wandering-Spirit-22/Novel-Cult?style=for-the-badge)](https://github.com/Wandering-Spirit-22/Novel-Cult/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Wandering-Spirit-22/Novel-Cult?style=for-the-badge)](https://github.com/Wandering-Spirit-22/Novel-Cult/network)
[![GitHub issues](https://img.shields.io/github/issues/Wandering-Spirit-22/Novel-Cult?style=for-the-badge)](https://github.com/Wandering-Spirit-22/Novel-Cult/issues)

**A static web novel reading platform with user authentication, community features, and Firebase deployment.**

### [Live Site](https://wandering-spirit-22.github.io/Novel-Cult/)

</div>

---

> **Note:** This was my first ever project. I built it and launched it as a real website. After learning about potential copyright issues with hosting novel content, I decided not to develop it further. Because of that, the site only has 6-7 novels and some features are left incomplete. I'm keeping this repo as an archive of where I started.

---

## Overview

Novel-Cult is a static web application for browsing and reading web novels. Users can explore titles by popularity, latest updates, or rankings, read chapters with a built-in reader, manage a personal reading list, and interact through a community section. Firebase handles authentication and hosting.

## Features

- **Novel Browsing** - Explore novels by popularity, latest updates, and rankings
- **Detail Pages** - Each novel has a dedicated page with cover art, summary, and chapter list
- **Chapter Reader** - Read chapters with pagination and navigation controls
- **User Authentication** - Login/registration powered by Firebase Auth
- **Personal Reading List** - Save and manage favorite novels
- **User Profiles** - Dedicated profile page for each user
- **Community** - Comment section and Discord integration
- **Search** - Client-side real-time search across all novels
- **Static Content** - Chapter data served from JSON files for fast loading

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=firebase&logoColor=white)

## Quick Start

### Prerequisites

- **Node.js** and **Firebase CLI**
  ```bash
  npm install -g firebase-tools
  ```
- An active **Firebase project**

### Run Locally

```bash
git clone https://github.com/Wandering-Spirit-22/Novel-Cult.git
cd Novel-Cult
firebase serve
```

Then open `http://localhost:5000` in your browser.

### Deploy

```bash
firebase deploy --only hosting
```

## Project Structure

```
Novel-Cult/
├── images/                  # Cover art and UI icons
├── index.html               # Homepage
├── login.html               # Login/registration
├── profile.html             # User profile
├── my_list.html             # Personal reading list
├── popular.html             # Popular novels
├── latest.html              # Latest updates
├── ranking.html             # Novel rankings
├── community.html           # Community page
├── *_detail.html            # Novel detail pages (7 novels)
├── read*.html               # Chapter reader pages
├── *chapters.json           # Chapter data (JSON)
├── search.js                # Search functionality
├── firebase.json            # Firebase config
└── sitemap.xml              # SEO sitemap
```

## Novels Included

- Lord of the Mysteries
- Shadow Slave
- Reverend Insanity
- The Beginning After The End
- Mother of Learning
- SSS-Class Suicide Hunter
- Omniscient Reader's Viewpoint

## License

This project does not have an explicit license. Standard GitHub default copyright restrictions apply.

---

<div align="center">

**If you find this useful, give it a star!**

Made by [Wandering-Spirit-22](https://github.com/Wandering-Spirit-22)

</div>
