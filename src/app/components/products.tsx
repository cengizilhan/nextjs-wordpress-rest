

async function getData() {
    const res = await fetch('https://fakestoreapi.com/products')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
export default async function Products() {
    const data = await getData();

    interface Product {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
    }
    function clicker(){
        alert("clicked");
    }

    const productList = data.map((item: Product) => {
        return (
            <div key={item.id}>
                <img src={item.image} alt=""/>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>{item.price}</p>
            </div>
        );
    });

    return (
        <main>
            <h1>rapidos</h1>
            {productList}
        </main>
    );
}
