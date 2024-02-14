This website was made just via HTML, CSS and JavaScript (with the JQuery library)

Now it's remade using:

![React JS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB") ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

One major thing I added was the design feature, where you can choose different designs in the homepage. The designs will apply to the entire website.

## Project Structure:

### Top-Level folders

- The `public` folder contains the all the images, logo icons, `sitemap.xml` and `ads.txt`.

- The `app` folder contains:
    - `global.css`
    - `layout.tsx`
    - `page.tsx`
    - `components`: stores some home-page components
    - `mainStyles`: this folder stores all the different designs for the main part of the homepage. By 'main part', I mean excluding footer.
    - `footerStyles`: store info about footer (which is global)
    - `[topic]`: when you select a particular topic in the home page, this is the folder you are routed to.
    - `infoStore`: store website info that is not found in other folders; all the article content is stored here.
    - `ads.txt`: this is for Google ads.

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

- The `layout.tsx`: sets meta-tag


## Updates

### Feb 14, 2024

<b>update 9.5 - 9.6:</b>
- In design 1's home page, the last topic is "Under Construction", and is not clickable.
- In design 2's home page, the "under construction" image was not showing, so that's fixed now.

<b>update 9.4:</b>
- In `design2Main.tsx`, the main table now has a separate table, and made style changes.
- For Article, images on mobile are now responsive and math displays now overflow when width is too small. Also, on mobile, inline MathJax wasn't rendering, so that's fixed now.
- Home page for design 2 now plays Conway's Game of Life in the background and added parallax to it.
- Added mobile support for design 1.

### Feb 11, 2024

<b>update 9.2 - 9.3:</b>
- Added `differentiability_implies_continuity.tsx`.

### Feb 10, 2024

<b>update 9.1:</b>
- Changed `Conic_Sections` in Geometry section to `Parabola`.
- Removed the `More Quadrilateral Related Stuff` folder in the Geometry section and moved the files to `Quadrilateral Related Stuff`.
- `Quadrilateral Related Stuff` now comes after `Triangle Related Stuff`.
- Added a `Hyperbola` subtopic to the Geometry section.
- Added a `Hyperbolic functions` subtopic to the Trigonometry section.
- Added mobile support for design 2. Mobile support for Design 1 will be added later.

### Jan 27, 2024

<b>update 8.2:</b>
- Fixed the error of 404 page not showing.
- Blackboard in design 1 is now clickable.

### Jan 25, 2024

<b>update 8.1:</b>
- When giving feedback, the last page you were in will also be sent (along with the form details).
- Changed the placeholder color in FormBox's textarea.

### Jan 21, 2024

<b>update 7.1 - 7.22:</b>
- Added code in the second style to handle 404 error.
- Added site-map stuff.
- Articles now use in-article ads instead of display ads.
- In-article ads will stop showing if you open the side bar.
- `Basics` folder in `public/linear_algebra` is changed to `basics.`

<b>update 6.21 - 6.28:</b>
- Edited `eulers_theorem.tsx` in discrete mathematics.
- Edited some titles in `topicsInfo.tsx`.
- Edited the colors of the "404" page for the second style.

### Jan 18, 2024

<b>update 6.2 - 6.20:</b>
- Added `congruence_solution.tsx` in discrete mathematics.
- Updated `topicsInfo.tsx`.
- Links in `Recently Added` table and `Recently Edited` table in second style now have 100%, and td padding is now `4px 0px 4px 4px`, instead of `4px`.
- update 5.11 on Jan 17 is actually 6.11.
- Added `gcdLemma14.tsx` in discrete mathematics.
- Added `chinese_remainder_theorem.tsx` in discrete mathematics.
- Edited `every_linear_combination.tsx` and `modular_inverse.tsx`.

### Jan 15, 2024

<b>update 6.1 (changed from 5.25 - 5.84):</b>
- removed the `br` tag in `formBox`.
- Added `infinite_primes.tsx` in discrete mathematics.
- Added `legendres_formula.tsx` in discrete mathematics.
- Added `legendres_formula_lower_bound.tsx` in discrete mathematics.
- Added `eulers_theorem.tsx` in discrete mathematics.
- Added `fermats_little_theorem.tsx` in discrete mathematics.
- Added `freshmans_dream.tsx` in discrete mathematics.
- Added `modular_inverse.tsx` in discrete mathematics.
- Added `x_square_solution.tsx` in discrete mathematics.
- Added `infinite_primes_4k_plus_1.tsx` in discrete mathematics.
- Changed the color of the link tag in articles.
- Updated `topicsInfo.tsx`.

### Jan 13, 2024

<b>update 5.24:</b> some minor bug fixes and minor content changes.

<b>update 5.23:</b> For second style, in the form, the placeholder text color is now same as label color (not working lol).

<b>update 5.16 - 5.22:</b> some minor bug fixes and minor content changes.

<b>update 5.4 - 5.15:</b> Edited `design2Main.tsx` and `[topic]/[subTopic]/[article]/designs/Design2.tsx` to display ads properly.

<b>update 5.3:</b> Remove `window.scrollTo(0,0)` from all pages, and added links to the slideshow in homepage in second style.

<b>update 5.2:</b> Added ad code snippet in the article page in second style.

<b>update 5.1:</b> Added `ads.txt` to allow ads, and added ad code snippets in home page in second style.

<b>update 4.10:</b> All changes were for the second style:
- The objects in the `allTopics` array (in `topicsInfo.tsx`) had a key called `textColor`; it's now changed to `footerColor`. 
- The design of the Computer Science page is changed.
- The logo in the footer is now 140px.

<b>update 4.9:</b> In first style, `window.MathJax.typeset()` now runs after font size changes.

### Jan 12, 2024

<b>update 4.8:</b>
- For second style:
    - changed font of the 'continue' button in home page
    - `subText` paragraph class now has larger left and right margins
    - `ol` and `ul` tag now use mx-20
    - `sup` tag in `.pmain` and `.pmain2` are now bold.
    - Reduced height of `displayFormula` class to 150px.
- For first style, fixed the bug of font size not changing, and blackboard writing is now in bold.

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