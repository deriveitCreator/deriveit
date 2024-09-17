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
	- `designInfo.tsx`: for storing the default design number.
	- `fonts.tsx`: stores information about the fonts.
	- `paypalLink.tsx`: contains the code for the PayPal donation button.
	- `sourcesForCitation.tsx`: Stores citation information, more on this later.
	- `topicsInfo.tsx`: stores topic-related information for the home page.
	- `/downloadedFonts`: this folder contains local fonts.
	- `/setCookie`: contains the code for changing the design number and storing it in cookies.
	- `/sendEmail`: contains the api to email client feedback to me.
	- `/getTopicLinks`: contains a `POST` function which gets all the subtopics and article title of a particular topic. 
	- `/contents`: contains all article contents.

### [topic], [subTopic] and [article] folders

- The `/designs` folder that contains code for the different designs

- The `page.tsx` sends the article links (or article content if in `\article` folder) and design number to `clientPart.tsx`. This file is suppose to run on the server.

- The `clientPart.tsx` gets the article links (or article content) and design number from the `page.tsx` and then sets the header and body based on the design number. The file runs on the client side.

- The `layout.tsx` sets the title

- The `not-found.tsx` handles the 404 errors.

## Updates

Versioning is done using "npm version [new-version] --git-tag-version false"

<b>update 12.2:</b>
- All article contents are now stored at `infoStore/contents`.
- Made minor changes to blackboard in design 1.

<b>update 12.0 - 12.1:</b>
- Added `not-found.tsx` to `/topic`, `/subTopic` and `/article` to handle 404 errors.
- Added a lot of content for discrete mathematics.

<b>update 11.16:</b>
- Changed `the_inverse_function_rule` to `the_inverse_function_theorem`, and made changes to the file.
  
<b>update 11.15:</b>
- Shifted `gcdTimesLcmGivesProduct.tsx` to `divisibility` subTopic.

<b>update 11.13 - 11.14:</b>
- Testing `npm version`.

<b>update 11.10 - 11.12:</b>
- Google Ad script was injecting it's own style, so that's patched now.
- Added `mean_value_theorem.tsx`.

<b>update 11.9:</b>
- Added `gcdLemma15.tsx` and `gcdLemma16.tsx`.

<b>update 11.8:</b>
- Made changes to code and data structures in the "subtopics" pages.

<b>update 11.7:</b>
- Made changes to code and data structures in the "topics" pages.

<b>update 11.6:</b>
- Fixed some naming issues.

<b>update 11.5:</b>
- Made changes to `limits/limits_sin.tsx`, `limits/limits_cos.tsx` and `trigonometric_derivatives/sin.tsx`.
- In `topicsInfo.tsx`, I added the `topicsAndLinks` array to write the associated "link name" with the topic name.
- In `topicsInfo.tsx`, the color information is in a separate object (`colorInfo`). I may remove `allTopics` in the future.

<b>update 11.4:</b>
- In public `geometry`, changed folder names to lowercase.
- The `geometry` folder in `infoStore` was missing for some reason.
 
<b>update 11.3:</b>
- Updated this file.

<b>update 11.2:</b>
- Configured git (`git config core.ignorecase false`).
 
<b>update 11.1:</b>
- Removed the apostrophes and capital letters in URLs.
- Subtopics are now assumed to have no space and no capital letters.

<b>update 10.57:</b>
- In `[article]/page.tsx`, I changed the production build cache to `default`.

<b>update 10.56:</b>
- Apparently, the algebra folder was missing, so that's restored now. 

<b>update 10.55:</b>
- Updated `divisibilityLemma1.tsx`.
- Added the `getTopicLinks` function in `getTopicLinks` route.
- In formbox, changed textarea element id to `mainText`.

<b>update 10.54:</b>
- Made changes to `every_linear_combination.tsx` and `a_to_the_n_plus_one_prime.tsx`.
- Added `divisibilityLemma1.tsx`.

<b>update 10.53:</b>
- Made changes to `gcdDividesPlus.tsx`.
  
<b>update 10.52:</b>
- Made changes to `n_square_prime.tsx`.
- Updated the "recently added" table and "recently edited" table.

<b>update 10.51:</b>
- Changed `nSquarePrime.tsx` to `n_square_prime.tsx`.
  
<b>update 10.50:</b>
- Added `nSquarePrime.tsx`.

<b>update 10.49:</b>
- Edited `Mersenne_prime2.tsx`.
- Added `a_to_the_n_plus_one_prime.tsx`.

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
