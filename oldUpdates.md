
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

<b>update 6.2 - 6.20:</b>
- Added `congruence_solution.tsx` in discrete mathematics.
- Updated `topicsInfo.tsx`.
- Links in `Recently Added` table and `Recently Edited` table in second style now have 100%, and td padding is now `4px 0px 4px 4px`, instead of `4px`.
- update 5.11 on Jan 17 is actually 6.11.
- Added `gcdLemma14.tsx` in discrete mathematics.
- Added `chinese_remainder_theorem.tsx` in discrete mathematics.
- Edited `every_linear_combination.tsx` and `modular_inverse.tsx`.

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

<b>update 4.8:</b>
- For second style:
    - changed font of the 'continue' button in home page
    - `subText` paragraph class now has larger left and right margins
    - `ol` and `ul` tag now use mx-20
    - `sup` tag in `.pmain` and `.pmain2` are now bold.
    - Reduced height of `displayFormula` class to 150px.
- For first style, fixed the bug of font size not changing, and blackboard writing is now in bold.

<b>update 4.7:</b> The `FooterEl` changes in `[article]/Design2.tsx` in update 4.5, is now also applied to `footerStyles/design2Footer.tsx`.

<b>update 4.6:</b> The `FooterEl` changes in `[article]/Design2.tsx` in update 4.5, is now also applied to `[subTopic]` and `[Topic]`.

<b>update 4.5:</b> In `[article]/Design2.tsx`, `FooterEl` now uses useState instead of useReducer. Also, in ImageWrapper, the last Image return in the if-else has priority set to true.

<b>update 4.4:</b> Placed StyleSelectionBox in `[article]/Design1.tsx` in the PaintBrush component so it easy to use useState.

<b>update 4.3:</b> Accidentally skipped this, update 4.4 was actually suppose to be this one.

<b>update 4.2:</b> made changes to `design2Main.tsx`: just changed how the memo component is made (see changes to further understand).

<b>update 4.1:</b> Added another style called "colorful", this can be accessed from the Styles box (by clicking the paint brush icon)

<b>update 3.6 - 3.20:</b> used for testing in vercel.

<b>update 3.5:</b> All the function in the `sendEmail` API are now inside a try-catch.

<b>update 3.4:</b> In `tsconfig.json`, downlevelIteration is now enabled to use the .entries function.

<b>update 3.3:</b> Added the API for emailing client feedback to me (`infoStore/sendEmail`)

<b>update 3.2:</b> In all pages, a type has been defined for the imported main component, this is to remove the `Type '{ topic: string; }' is not assignable to type 'IntrinsicAttributes'` error.

<b>update 3.1:</b> Using the "click here" button in the footer, one can submit a form and it will be emailed to me. Also, all pages now use useEffect scroll to top after page has loaded.

<b>update 2.4:</b> Added "Recently Added" and "Recently Edited" sections in the home page. For now, they are manually updated.

<b>update 2.3:</b> This website now uses cookies so when a user chooses a new style (implemented later), the website saves the design number in the cookies, the code for this is in the GET function in `infoStore/route.tsx` and will run when you choose a style from the selection box (available when clicking the paint brush icon). If the cookies are empty, the default design number is used (from `designSelected.tsx`).

<b>update 2.2:</b> made some naming changes

<b>update 2.1:</b> added all the content

<b>update 1.3:</b> fixed some rendering bugs

<b>update 1.2:</b> made minor format changes to multiple files

<b>update 1.1:</b> the core component of the website is done. All article-specific functionality will be implemented later.