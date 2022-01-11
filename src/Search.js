import { useState } from 'react';
import Results from './Results';

const Searchtwt = () => {
    const [twitterName, setTwitterName] = useState("");
    const [tweet, setTweet] = useState([]);
    const [articles, setArticles] = useState({});

    async function requestTwt() {
        console.log(twitterName);

        const res = await fetch('https://twerticle.herokuapp.com/?twitter_user='+twitterName);
        const json = await res.json();
        
        console.log(json);
        
        setTweet(json[1]);
        setArticles(json[0]);

        console.log(tweet);
        console.log(articles);
    };

    return (
        <div id= "search-twt" className='search-twt'>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    requestTwt();
                }}
            >
                <label htmlFor="searchtwt">
                    <input id="searchtwt" onChange={(e) => setTwitterName(e.target.value)} value={twitterName} placeholder="Enter twitter name"/>
                </label> 
            </form>
            <Results tweet={tweet} articles={articles} />
        </div>
    )
};


export default Searchtwt;