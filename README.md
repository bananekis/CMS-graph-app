# CSM Graphql + Next.js + tailwindcss APP

![Alt text](public/app-overview.png?raw=true "App Overview")

## Description

CMS Graph Next.js application allows the client to add, save & publish any articles thanks to `GraphCMS` platform.
Client can also specify the `author` asset from GraphCMS where they can find/create/edit depper info about each author or posts.

Under each post client is able to leave a comment and CMS admin of the page can allow or disallow it to be visible on the web.
The required info `comments form` such as name or email are stored into localhost when the checkbox for it is clicked, and cleared if its not.

`.env config requires api endpoint to work with queries and token for server-side request headers`

## GraphCMS

Platform I use for creating models, references between each asset and creating `GraphQL` queries.
