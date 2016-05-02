import Article from './article.js';
import { parseArticleOverview } from '../helpers/article-overview-parser.js';
import { articleTypes } from './article-types.js';

class ArticleOverview extends Article {

    constructor(props) {
        super(props);

        this.getChildContext = () => {
            return {articleState: articleTypes.OVERVIEW, articleUrl: this.props.articleUrl}
        }
    }

    /** OVERWRITE **/
    prepareDraft(draft) {
        return parseArticleOverview(draft);
    }

}

export default ArticleOverview;