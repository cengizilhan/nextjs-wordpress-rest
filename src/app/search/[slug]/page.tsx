async function getData(searchStr:string) {
    const searchUrl="https://cengizilhan.com//wp-json/wp/v2/search?search="+searchStr+"&page=1";
    const res = await fetch(searchUrl)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug);

    return <main className='container mx-auto'>

        {data.map((item: any) => {
            return <a key={item.id} href={`/post/${item.id}`}>
                <b>{item.title}</b>

                <p></p>
            </a>
        })
        }
    </main>
}