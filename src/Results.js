const Results = ({tweet, articles}) => { 
    const twtUserId = tweet[0];
    const twtUserName = tweet[1];
    const twtText = tweet[2];
    console.log(articles)
    return (
        <div className="display_twt_article">
            <h1 class="tweet_header">Tweet (Twitter User, Tweet)</h1>
            <div id="tweet">
                <h1>{twtUserName}</h1>
                <h2>{twtText}</h2>
            </div>

            <h1 class="article_header">Articles (Title, Abstract, Link)</h1>
            <div id="articles">
                {
                    Object.keys(articles).map( (key) => {
                        const value = articles[key];
                                var artTitle = value[0];
                                var artAbstract = value[1];
                                var artURL = value[2];
                                console.log("key is", {key})

                                return (
                                    <div id={"article"+key}>
                                        <h1>{artTitle}</h1>
                                        <h2>{artAbstract}</h2>
                                        <h2>{artURL}</h2>
                                    </div>
                                )
                            }
                        )
                }
            </div>
        </div>
    )
};

export default Results;