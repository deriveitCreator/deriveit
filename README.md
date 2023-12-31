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
    - `mainStyles`: this folder stores all the different designs for the main part of the homepage. By 'main part', I mean excluding footer.
    - `footerStyles`: store info about footer (which is global)
    - `[topic]`: when you select a particular topic in the home page, this is the folder you are routed to.
    - `infoStore`: store website info that is not found in other folders; all the article content is stored here.

- The `mainStyles` folder contains the design code for home page.

- The `footerStyles` folder contains the component for the footer, the are multiple footers that will be used depending on the chosen style.

- The `components` folder currently contains three components for the index page:
    - `BlackBoard.tsx`: for the giant blackboard on the home page
    - `ImageWrapper.tsx`: a wrapper for images (this is a global component)
    - `StyleSelectionBox.tsx`: a dialog box for choosing different styles

- The `infoStore` folder is the default place where all the information is stored:
    - `fonts.tsx`: stores information about the fonts
    - `topicsInfo.tsx`: for the associated information for all the different topics
    - `designInfo.tsx`: for storing the default design number
    - All the folders in this folder (except for `getArticleContent`, `setCookie` and `sendEmail`) stores article content. Article content gets sent to the user (when requested) using the API in `getArticleContent` folder.
    - `setCookie` contains the code for change the cookie for the design number.
    - `sendEmail` contains the api to email client feedback to me.
    - `sourcesForCitation.tsx`: Stores citation information, more on this later.

### [topic], [subTopic] and [article] folders

- The `designs`: folder that contains code for the different designs

- The `page.tsx`: sets the header and body based on the selected design 

- The `layout.tsx`: sets metatag


## Updates

### Dec 18, 2023

<b>update 4.7:</b> The `FooterEl` changes in `[article]/Design2.tsx` in update 4.5, is now also applied to `footerStyles/design2Footer.tsx`.

<b>update 4.6:</b> The `FooterEl` changes in `[article]/Design2.tsx` in update 4.5, is now also applied to `[subTopic]` and `[Topic]`.

<b>update 4.5:</b> In `[article]/Design2.tsx`, `FooterEl` now uses useState instead of useReducer. Also, in ImageWrapper, the last Image return in the if-else has priority set to true.

<b>update 4.4:</b> Placed StyleSelectionBox in `[article]/Design1.tsx` in the PaintBrush component so it easy to use useState.

<b>update 4.3:</b> Accidentally skipped this, update 4.4 was actually suppose to be this one.

<b>update 4.2:</b> made changes to `design2Main.tsx`: just changed how the memo component is made (see changes to further understand).

<b>update 4.1:</b> Added another style called "colorful", this can be accessed from the Styles box (by clicking the paint brush icon)

### Dec 14, 2023

<b>update 3.6 - 3.20:</b> used for testing in vercel.

<b>update 3.5:</b> All the function in the `sendEmail` API are now inside a try-catch.

<b>update 3.4:</b> In `tsconfig.json`, downlevelIteration is now enabled to use the .entries function.

<b>update 3.3:</b> Added the API for emailing client feedback to me (`infoStore/sendEmail`)

<b>update 3.2:</b> In all pages, a type has been defined for the imported main component, this is to remove the `Type '{ topic: string; }' is not assignable to type 'IntrinsicAttributes'` error.

<b>update 3.1:</b> Using the "click here" button in the footer, one can submit a form and it will be emailed to me. Also, all pages now use useEffect scroll to top after page has loaded.

### Dec 12, 2023

<b>update 2.4:</b> Added "Recently Added" and "Recently Edited" sections in the home page. For now, they are manually updated.

<b>update 2.3:</b> This website now uses cookies so when a user chooses a new style (implemented later), the website saves the design number in the cookies, the code for this is in the GET function in `infoStore/route.tsx` and will run when you choose a style from the selection box (available when clicking the paint brush icon). If the cookies are empty, the default design number is used (from `designSelected.tsx`).

### Dec 10, 2023
<b>update 2.2:</b> made some naming changes

<b>update 2.1:</b> added all the content

### Nov 28, 2023

<b>update 1.3:</b> fixed some rendering bugs

<b>update 1.2:</b> made minor format changes to multiple files

<b>update 1.1:</b> the core component of the website is done. All article-specific functionality will be implemented later.