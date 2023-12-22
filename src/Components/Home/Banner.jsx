import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import productsData from "../../products.json"

const title = <h2>Search Your <span>Products</span>.</h2>
const desc = "We have thee largest collection of products."
const bannerList = [{ iconName: "icofont-users-alt-4", text: "1.5 Million Customers", }, { iconName: "icofont-notification", text: "More then 2000 Marchent", }, { iconName: "icofont-globe", text: "Buy Anything Online", },];

export const Banner = () => {
    const [searchInput, setSearchInput] = useState("")
    const [filterProducts, setFilterProducts] = useState(productsData)

    const handleSearch = e => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm)
        // filtering product based on search 
        const filterData = productsData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilterProducts(filterData);

    }
    return (
        <div className='banner-section style-4'>
            <div className="container">
                <div className="banner-content">
                    {title}
                    <form>
                        <input type="text" name='search' id='search' placeholder='Search Products' value={searchInput} onChange={handleSearch} />
                        <button type="submit"><i className="icofont-search"></i></button>
                    </form>
                    {desc}
                    <ul className='lab-ul'>
                        {
                            searchInput && filterProducts.map((product, i) => <li key={i}>
                                <Link to={`/shop/${product.id}`}>{product.name}</Link>
                            </li>)
                        }

                    </ul>
                </div>
            </div>

        </div>
    )
}
