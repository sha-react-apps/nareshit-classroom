var categories = ["ELECTRONICS", "FOOTWEAR", "FASHION"];

const element1 = (
    <>
    <h1> Product Categoies</h1>
    <ol>
        {
            categories.map(category =>  {
                return <li key={category}>{category}</li>
            })
        }
    </ol>
    </>

);

var products = [
    {Name: "JBL Speaker", Price: 45555, Photo: "../assets/speaker.jpg"},
    {Name: "Nike Casuals", Price: 7655, Photo: "../assets/nike.jpg"},
    {Name: "Samsung Moile", Price: 4555, Photo: "../assets/samsung_mobile.jpg"}
];

const element2 = (
    <>
    <table className="table table-striped table-success table-hover" width="400" border="1" align="center">
        <thead>
            <tr className="table-dark">
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Image</th>
            </tr>
        </thead>
        <tbody>
            {
                products.map(product => {
                    return <tr key={product.Name}>
                        <td>{product.Name}</td>
                        <td>{product.Price}</td>
                        <td><img src={product.Photo} /></td>
                    </tr>
                })
            }
        </tbody>

    </table>

    </>
)

ReactDOM.render(
    element2,
    document.getElementById('container')
);