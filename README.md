This website was made just via HTML, CSS and JavaScript (with the JQuery library)

Now it's remade using:

![React JS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB") ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

One major thing I added was the design feature, where you can choose different designs in the homepage. The designs will apply to the entire website.

## Project Structure:

### Top-Level folders

- The `public` folder contains the all the images and logo icons.

- The `app` folder contains:
    - `global.css`
    - `layout.tsx`
    - `page.tsx`
    - `components`: stores some home-page components
    - `designs`: this folder stores all the different designs for the homepage; this folder only stores local components.
    - `footerStyles`: store info about footer (which is global)
    - `[topic]`: when you select a particular topic in the home page, this is the folder you are routed to.
    - `infoStore`: store website info that is not found in other folders; all the article content is stored here.

- The `mainStyles` folder contains the design code for home page.

- The `footerStyles` folder contains the component for the footer, the are multiple footers that will be used depending on the chosen style.

- The `components` folder currently contains three components for the index page:
    - `BlackBoard.tsx`: for the giant blackboard on the home page
    - `ImageWrapper.tsx`: a wrapper for images (this is a global component)
    - `StyleSelectionBox.tsx`: a dialog box for choosing different styles

- The `infoStore contains` is the default place where all the information is stored:
    - `fonts.tsx`: stores information about the fonts
    - `topicsInfo.tsx`: for the associated information for all the different topics
    - `designSelected.tsx`: for storing the current design number
    - All the folders in this folder stores article content, and will be sent to the user (when requested) using the API in `route.tsx`
    - `sourcesForCitation.tsx`: Stores citation information, more on this later.

### [topic], [subTopic] and [article] folders

- The `designs`: folder contains code for the different designs

- The `page.tsx`: sets the header and body based on the selected design 

- The `layout.tsx`: sets metatag


## Updates

### Dec 9, 2023
<b>update 2.1:</b> added all the content

### Nov 28, 2023

<b>update 1.3:</b> fixed some rendering bugs

<b>update 1.2:</b> made minor format changes to multiple files

<b>update 1.1:</b> the core component of the website is done. All article-specific functionality will be implemented later.