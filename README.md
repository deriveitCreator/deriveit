This website was originally made using only HTML, CSS and JavaScript (with the JQuery library)

Now it's remade using:

![React JS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB") ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![MongoDB](https://img.shields.io/badge/mongodb-00684a?style=for-the-badge&logo=mongodb&logoColor=00ed64&labelColor=001e2b) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)

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
    - `FormBox.tsx`: the website has a feedback form, and the code for it is stored in this file.

- The `infoStore` folder is the default place where all the information is stored:
    - `fonts.tsx`: stores information about the fonts.
    - `/downloadedFonts`: this folder contains local fonts.
    - `designInfo.tsx`: for storing the default design number.
    - `topicsInfo.tsx`: stores information for all the different topics.
    - `/setCookie`: contains the code for changing the design number and storing it in cookies.
    - `/sendEmail`: contains the api to email client feedback to me.
    - `sourcesForCitation.tsx`: Stores citation information, more on this later.
    - `paypalLink.tsx`: contains the code for the PayPal donation button.
    - All the folders in this folder (except for `getArticleContent`, `setCookie` and `sendEmail`) stores article content. Article content gets sent to the user (when requested) using the API in `getArticleContent` folder.

### [topic], [subTopic] and [article] folders

- The `designs`: folder that contains code for the different designs

- The `page.tsx`: sets the header and body based on the selected design 

- The `layout.tsx`: sets meta-tag


## Updates

<b>update 10.26:</b>
- Edited "recently added" table content.

<b>update 10.25:</b>
- Edited the recently added table at home page.

<b>update 10.24:</b>
- Added `probability_function_of_the_Poisson_distribution.tsx`, `expected_value_and_variance_of_an_exponential_distribution.tsx`, `memoryless.tsx` and `chebyshevs_inequality.tsx`.

<b>update 10.23:</b>
- In the public folder, the `expected_value_and_variance` is changed to `expected_value_and_variance_basics`.

<b>update 10.22:</b>
- Added `expected_value_and_variance_of_a_geometric_distribution.tsx`, and changed `expected_value_and_variance_of_the_binomial_distribution` to `expected_value_and_variance_of_a_binomial_distribution`.
- In `probability & statistics` topics, the subtopic `Expected Value And Variance` is changed to `Expected Value And Variance Basics`.

<b>update 10.21:</b>
- Fixed the 404 bug in the subtopics page when URL contains "&" in the topic part.

<b>update 10.18 - 10.20:</b>
- Updated 'sitemap.xml'

<b>update 10.17:</b>
- Added `expected_value_and_variance_of_the_binomial_distribution`.

<b>update 10.16:</b>
- Added `robots.txt`

<b>update 10.15:</b>
- In design 2, images in the main table (at home page) would shrink in small screen
- In Article for both design, the math formula display now have 200px as min height instead of normal height.

<b>update 10.9 - 10.14:</b>
- Added og:image to the meta tag.
- Style box now says that it uses cookies.

<b>update 10.2 - 10.8:</b>
- When loading article, a loading text is displayed.
- Several bug fixes in both designs.

<b>update 10.1:</b>
- In design 2, in the home page, the font in "Recently table" is now "SF_Cartoonist_Hand".
- For design 1 and design 2, the article content is fetched at `page.tsx` instead of doing it in useEffect.
- MongoDB is now being used to store articles. When fetching from backend, first the MongoDB server will be used, then there is an error, then the local file system will be used.

<b>update 9.35 - 9.36:</b>
- When switching from design 2 to 1, the background color didn't change, so that's fixed now.
- Changed paypal donation link.

<b>update 9.26 - 9.34:</b>
- Apparently, google adsense adds their own inline css, so I had to disabled it using JavaScript. 

<b>update 9.5 - 9.25:</b>
- In design 1's home page, the last topic is "Under Construction", and is not clickable.
- In design 2's home page, the "under construction" image was not showing, so that's fixed now.
- In design 1 and design 2, made minor style changes.
- Made minor changes to the form box.
- In design 1, blackboard now shows an ad.

<b>update 9.4:</b>
- In `design2Main.tsx`, the main table now has a separate table, and made style changes.
- For Article, images on mobile are now responsive and math displays now overflow when width is too small. Also, on mobile, inline MathJax wasn't rendering, so that's fixed now.
- Home page for design 2 now plays Conway's Game of Life in the background and added parallax to it.
- Added mobile support for design 1.

<b>update 9.2 - 9.3:</b>
- Added `differentiability_implies_continuity.tsx`.

<b>update 9.1:</b>
- Changed `Conic_Sections` in Geometry section to `Parabola`.
- Removed the `More Quadrilateral Related Stuff` folder in the Geometry section and moved the files to `Quadrilateral Related Stuff`.
- `Quadrilateral Related Stuff` now comes after `Triangle Related Stuff`.
- Added a `Hyperbola` subtopic to the Geometry section.
- Added a `Hyperbolic functions` subtopic to the Trigonometry section.
- Added mobile support for design 2. Mobile support for Design 1 will be added later.

<b>update 8.2:</b>
- Fixed the error of 404 page not showing.
- Blackboard in design 1 is now clickable.

<b>update 8.1:</b>
- When giving feedback, the last page you were in will also be sent (along with the form details).
- Changed the placeholder color in FormBox's textarea.
