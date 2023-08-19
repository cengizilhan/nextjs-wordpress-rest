"use client"
import { useState } from 'react';



export default function Index() {
    const [searchKey, setSearchKey] = useState('');

    const handleSubmit = (event:any) => {
        event.preventDefault();
        location.href = '/search/' + searchKey + '';
    };

    return (
        <div>
            <nav className='flex space-x-4 pt-5  container mx-auto mb-8 justify-between'>
                <div className='flex space-x-4 '>
                    <a href="/">Home</a>
                    <a href="/posts">Posts</a>
                </div>


                <form onSubmit={handleSubmit} className='flex space-x-4 '>
                    <input
                        type="text"
                        name="searchKey"
                        value={searchKey}
                        onChange={(e) => setSearchKey(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </nav>
        </div>
    );
}
