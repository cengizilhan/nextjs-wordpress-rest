async function getData() {
  const res = await fetch('https://cengizilhan.com//wp-json/wp/v2/posts')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data = await getData()

  return <div className='mt-5 container mx-auto'>
    <h1 className='text-4xl'>Posts</h1>
    <section className='posts-wrap'>
    {data.map((item: any) => {
        return <a key={item.id} href={`/post/${item.id}`}>
            <b className='mb-2 block'>{item.title.rendered}</b>
            <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
            <p></p>
        </a>
    })
    }
    </section>
  </div>
}