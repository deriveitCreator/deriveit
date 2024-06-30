This website was originally made using only HTML, CSS and JavaScript (with the JQuery library)

Now it's remade using:

![React JS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB") ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![MongoDB](https://img.shields.io/badge/mongodb-00684a?style=for-the-badge&logo=mongodb&logoColor=00ed64&labelColor=001e2b) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)

One major thing I added was the design feature, where you can choose different designs in the homepage. The designs will apply to the entire website.

## Project Structure:

### Top-Level folders

- The `public` folder contains the all the images, logo icons, `sitemap.xml`, `ads.txt` and `robots.txt`.

- The `app` folder contains:
    - `global.css`
    - `layout.tsx`
    - `page.tsx`
    - `variables.scss`
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
    - `/getTopicLinks`: Contains a `POST` function which gets the subtopics of a particular topic. 
    - All the other folders (except for `getArticleContent`) stores article content. Article content gets sent to the user (when requested) using the API in `getArticleContent` folder.

### [topic], [subTopic] and [article] folders

- The `/designs` folder that contains code for the different designs

- The `page.tsx` sends the article links (or article content if in `\article` folder) and design number to `clientPart.tsx`. This file is suppose to run on the server.

- The `clientPart.tsx` gets the article links (or article content) and design number from the `page.tsx` and then sets the header and body based on the design number. The file runs on the client side.

- The `layout.tsx` sets the title

## Updates

<b>update 10.48:</b>
- Added `Mersenne_prime2.tsx`.
  
<b>update 10.47:</b>
- Added `Mersenne_prime1.tsx`.

<b>update 10.46:</b>
- Added `differenceOfFourthPowers.tsx`.

<b>update 10.45:</b>
- Added `multipleOf8.tsx`.

<b>update 10.44:</b>
- In the `prime_numbers` sections, I change `For every positive integer n...` to `For any positive integer n...`. I also changed `the form 4k+1 and 4k+3` to `the form 4k+1 or 4k+3`.
- Added `congruence_solution_possible.tsx`
- Edited `gcdTimesLcmGivesProduct.tsx` and `congruence_solution.tsx`.

<b>update 10.43:</b>
- The "data-title" box element wasn't showing on hover, so that's fixed now.
- Made minor changes to all history content.
- The `figure` element now has its text centered.
- In `Design1`, the size of the images is the same as the size of `Design2` images.

<b>update 10.42:</b>
- Made `clientPart.tsx` in the `/topic` and `/subTopic` folder.
- Topics links now are taken from the backend in `page.tsx` and then the design number and topic links gets sent to `clientPart.tsx`.
- Added `all_primes_are_of_the_form.tsx` and re-added `infinite_primes_4k_plus_3.tsx`.

<b>update 10.41:</b>
- Updated `sitemap.xml`.

<b>update 10.40:</b>
- Added more articles to `discrete_mathematics`.

<b>update 10.38 - 10.39:</b>
- fetching from backend is done first, then database later.

<b>update 10.37:</b>
- database is being avoided for now.

<b>update 10.36:</b>
- Added many topics in `discrete maths`.

<b>update 10.35:</b>
- Added `the_inverse_function_rule` in calculus.

<b>update 10.32 - 10.34:</b>
- Added a search box in the home page in design 2, but needs more work.

<b>update 10.31:</b>
- Changed `public/calculus/using_euler's_number/s1.png` to `.../s1.PNG`.

<b>update 10.30:</b>
- Updated `sitemap.xml` again.

<b>update 10.29:</b>
- Updated `sitemap.xml`.
- Added "og:site_name"

<b>update 10.28:</b>
- The `page.tsx` in the `article` folder now renders in the server side.
- Added `clientPart.tsx` in `article` folder which does the client side rendering part for `page.tsx`.

<b>update 10.27:</b>
- In discrete maths, in the "factorials, permutations and combinations" section, images weren't being displayed, so that bug is fixed now.

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
