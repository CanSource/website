import Fuse from 'fuse.js';
import { useState } from 'react';
import { getCollection } from 'astro:content';
import FormattedDate from './FormattedDate.astro';

// const all_posts = (await getCollection('blog'))
// .sort(
// 	(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
// );

// const all_posts = await getCollection('blog');

// Configs fuse.js
// https://fusejs.io/api/options.html
const options = {
	keys: ['data.title', 'data.description', 'data.tags', 'slug'],
	includeMatches: true,
	minMatchCharLength: 2,
	threshold: 0.5,
};



function Search({ searchList }) {
	// User's input
	const [query, setQuery] = useState('');

	const fuse = new Fuse(searchList, options);

	// Set a limit to the posts: 5
	const posts = fuse
		.search(query)
		.map((result) => result.item)
		.slice(0, 5)
        .sort(
            (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
        );

	function handleOnSearch({ target = {} }) {
		const { value } = target;
		setQuery(value);
	}

    function clearInput() {
        document.getElementById("clearButton").addEventListener("click", function() {
            document.getElementById("searchInput").value = "";
          });
    }

    let display_posts = posts.length < 1 ? searchList.map((res) => (res)) : posts;

    return (
        <>
        
            <div class="search-bar">
                <input class="input-field" id="searchInput" type="text" value={query} onChange={handleOnSearch} placeholder="Type to search..." />
                <button class="clear-button" id="clearButton" onClick={clearInput}>x</button>
            </div>
            
            {query.length > 1 && (
                <p class="search-info">
                    Found {posts.length} {posts.length === 1 ? 'result' : 'results'} for '{query}'
                </p>
            )}
            <ul class={"post-list"}>
                {display_posts.map((post) => (
                    <li class={"post-item"}><a href={`/articles/${post.slug}/`}>
                        <img width={720} height={360} src={post.data.heroImage} alt="" />
                        <h4 class={"title"}>{post.data.title}</h4>
                        <p class={"date"}><time datetime={post.data.pubDate}>{
                            post.data.pubDate.toLocaleDateString('en-us', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                            })
                        }</time></p>
                        <p class="description">{post.data.description}</p>
                    </a></li>
                ))}
            </ul>
        </>
    );
        
}

export default Search;