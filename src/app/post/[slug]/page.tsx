async function getData(postId: string) {
  const res = await fetch(
    "https://cengizilhan.com/wp-json/wp/v2/posts/" + postId
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  // @ts-ignore

  return (
    <main className='container mx-auto'>

      <h1 className='text-3xl mb-5'>{data.title.rendered}</h1>

        {data.yoast_head_json && data.yoast_head_json.og_image && data.yoast_head_json.og_image[0] && (
            <img src={data.yoast_head_json.og_image[0].url} />
        )}

        <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
      <div className='mt-5' >
          <strong>Keywords: </strong>
          {data.yoast_head_json.schema["@graph"][0].keywords.map(
              (tag: string, index: number) => (
                  <span key={index} className="tag">
                      { tag } &nbsp;
                  </span>
              )
          )}
          <div><strong>Author:</strong> {data.yoast_head_json.schema["@graph"][0].author.name}</div>
          <div><sub>{data.date}</sub></div>
      </div>
    </main>
  );
}
