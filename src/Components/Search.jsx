import React from 'react'
import './Search.css'

const Search = () => {
    return (
        <>
            <section id='search'>
                <h1>Search The Archive</h1>
                <div className="search-box">
                    <input type="text" placeholder='Search by keywords, authors, DOI...' />
                    <button>Search</button>
                </div>
                <div className="select-box">
                    <select name="category" id="category">
                        <option value="all">All Field</option>
                        <option value="books">Books</option>
                        <option value="articles">Articles</option>
                        <option value="journals">Journals</option>
                    </select>

                    <select name="category" id="category">
                        <option value="all">Years</option>
                        <option value="books">2024</option>
                        <option value="articles">Articles</option>
                        <option value="journals">Journals</option>
                    </select>
                </div>

                <div class="trending-row">
                    <h3 class="trending-title">🔥 TRENDING NOW</h3>
                    <ul class="trending-list">
                        <li><a href="#">quantum error correction</a></li>
                        <li><a href="#">CRISPR delivery</a></li>
                        <li><a href="#">large language models</a></li>
                        <li><a href="#">photovoltaic efficiency</a></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Search