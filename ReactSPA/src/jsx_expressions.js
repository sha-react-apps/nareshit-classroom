var product = {
    type: "TV" ,
    name: "Samsung",
    price: 15000.00,
    stock: true
};

const element = (
    <>
        <h1>Products Table</h1>
        <table border="1">
            <tr>
                <th>Product Type</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>In Stock?</th>
            </tr>
        
            <tr>
                <td>{product.type}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{(product.stock == true )? "Available": "Not Available"}</td>
            </tr>
        </table>
    </>
);
ReactDOM.render(
    element,
    document.getElementById('container')
)