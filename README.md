# Easyblog
A basic, modular and easy blogging framework

## Technologies used
- Based on the draftjs.org rich text editor framework for React.js
- React.js
- Materialize.css

## How to use the Blog Editor
Under construction

## How to use the Blog Viewer
### In your React application
Example: https://github.com/easybird/easyblog/blob/develop/core/welcome-app/welcome.js

Include React component:

    <ArticlePage
        article={{
            articleUrl: "http://easybird.be/blog/future-react",
            content: {entityMap: ["draftjs style"], blocks: ["draftjs style"]}
            }}
    />

    <ArticleList
        articles={
                [{
                    articleUrl: "http://easybird.be/blog/future-react",
                    content: {entityMap: ["draftjs style"], blocks: ["draftjs style"]}
                }]
            }
    />

### Without React
Example: https://github.com/easybird/easybird.be/blob/develop/views/pages/blog/articlePage.jade

Include the bundle.js file into your html file, and make sure it can pick up the required window properties:
 - articlePage bundle:
    - articlePageId
    - articlePageProps {article: { content: { entityMap: ["draftjs style"], blocks: ["draftjs style"]}, articleUrl: "URL" }
 - articleList bundle:
    - articleListId
    - articleListProps {articles: [article, article]}


    <body>
        <div id="article-page">
    </body>
    <script>
        var articlePageProps = {
            article: {
                content: {
                    entityMap: ["the draftjs style of representing articles"],
                    blocks: ["the draftjs style of representing articles"]
                },
                articleUrl: "http://www.urlofthearticle.com"
            }
        };
        var articlePageId = "article-page";
    </script>
    <script type='text/javascript' src"../../node_modules/easyblog/dist/articlePage.bundle.js"/>

## Licence
MIT
