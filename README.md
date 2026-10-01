This website was originally made using only HTML, CSS and JavaScript (with the JQuery library)

Now it's remade using:

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

One major thing I added was the design feature, where you can choose different designs in the homepage. The designs will apply to the entire website.

## Project Structure:

### Top-Level folders

- The `public` folder contains the all the images, logo icons, `sitemap.xml`, `ads.txt` and `robots.txt`.

- The `app` folder contains:
	- `global.css`
	- `layout.tsx`
	- `page.tsx`
	- `variables.scss`
	- `/global_components`: stores some home-page components
	- `/mainStyles`: this folder stores all the different designs for the main part of the homepage. By 'main part', I mean excluding footer.
	- `/[topic]`: when you select a particular topic in the home page, this is the folder you are routed to.
	- `/infoStore`: store website info that is not found in other folders; all the article content is stored here.

- The `/mainStyles` folder contains the design code for home page.

- The `/global_components` folder currently contains three components for the index page:
	- `design1Footer.tsx`.
	- `ImageWrapper.tsx`: a wrapper for images.
	- `StyleSelectionBox.tsx`: a dialog box for choosing different styles.
	- `FormBox.tsx`: a feedback form.

- The `/infoStore` folder is the default place where all the information is stored:
	- `designInfo.tsx`: for storing the default design number.
	- `fonts.tsx`: stores information about the fonts.
	- `paypalLink.tsx`: contains the code for the PayPal donation button.
	- `sourcesForCitation.tsx`: Stores citation information, more on this later.
	- `topicsInfo.tsx`: stores topic-related information for the home page.
	- `/downloadedFonts`: this folder contains local fonts.
	- `/setCookie`: contains the code for changing the design number and storing it in cookies.
	- `/sendEmail`: contains the api to email client feedback to me.
	- `/getTopicLinks`: contains a `POST` function which gets all the subtopics and article title of a particular topic. 
	- `/getArticleContent`: contains a `POST` function which returns the page content for a particular article (used for other apps). 
	- `/contents`: contains all article contents.

### [topic], [subTopic] and [article] folders

- The `/designs` folder that contains code for the different designs

- The `page.tsx` sends the article links (or article content if in `/article` folder) and design number to `clientPart.tsx`. This file is suppose to run on the server.

- The `layout.tsx` sets the title

- The `not-found.tsx` handles the 404 errors.

## Updates

Versioning is done using "npm version [new-version] --git-tag-version false"
Updates follow this format: `[major change].[minor change]`.

<b>update 28.6:</b>
- Added and changed articles in `probability_&_statistics`.
- Added new subtopic in `algebra`.

<b>update 28.5:</b>
- Added `key` attribute home page search links.

<b>update 28.4:</b>
- Design 2: 
  - Made some bug fixes for home page search bar.
  - Made some minor footer image styles changes.
  - Made sure sup and sub in article link didn't come on top of search bar.
- Added new articles in `probability_&_statistics/deviation_and_regression` and placed the subtopic at the end.
- In top layout, using `<head><script>` instead of `<Script>`.

<b>update 28.3:</b>
- Fixed the search input bug in `[topic]` and `[subtopic]` page.
- Made some styling changes for `[topic]` and `[subtopic]`.
- Added `understanding_r2_score.tsx`.

<b>update 28.2:</b>
- Added content to `geometry` and `probability_&_statistics`.
- Design 1 [subTopic] now uses the scss file of [topic].
- In design 2, made scss changes for [topic] and [subTopic].

<b>update 28.1:</b>
- Added content to `geometry`.
