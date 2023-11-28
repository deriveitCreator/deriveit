This website was made just via HTML, CSS and JavaScript (with the JQuery library)

Now it's remade using:

![React JS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB") ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

One major thing I added was the design feature, where you can choose different designs in the homepage. The designs will apply to the entire website.

<u>Project Structure:</u>

- The `public` folder contains the logos.
- The `app` folder contains:
    - `global.css`: applied to all pages
    - `layout.tsx`
    - `page.tsx`
    - `components`: store global components (excluding footer)
    - `designs`: this folder stores all the different designs for the homepage
    - `footerStyles`: store info about footer (which is global); the `designs` folder only stores local components.
    - `[topic]` folder: when you select a particular topic in the home page, this is the folder you are routed to.
    - `infoStore`: store website info that is not found in other folders; all the article content is stored here.

## Updates

update 1.1: the core component of the website is done. All article-specific functionality will be implemented later.