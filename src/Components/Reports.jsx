import { useEffect, useState } from 'react';
import BarChart from './BarChart';
import Navbar from './NavBar';
import ProductService from '../Services/Products';
import BrandService from '../Services/Brands';

function Reports() {
    const [categories, setCategories] = useState({
        "1": "Alimentos",
        "2": "Automoviles",
        "3": "Computadoras"
    });
    const [products, setProducts] = useState({});
    const [brands, setBrands] = useState({});
    const [selectedCategory, setSelectedCategory] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(1);

    const [options, setOptions] = useState({
        'product': {
            'id': '1',
            'name': 'product1',
        }
        ,
        'brand': {
            'id': '1',
            'name': 'brand1',
        }
    });

    const getProducts = async (category) => {
        const {data} = await ProductService.get(category);
        let products = {};
        for (let i = 0; i < data.length; i++) {
            products[data[i].id] = data[i].name;
        }
        setProducts(products);
        getBrands(Object.keys(products)[0]);
    }

    const getBrands = async (product) => {
        const {data} = await BrandService.get(product);
        let brands = {};
        for (let i = 0; i < data.length; i++) {
            brands[data[i].id] = data[i].name;
        }
        setBrands(brands);
    }

    useEffect(() => {
        getProducts(selectedCategory);
        getBrands(selectedProduct);
    },[]);

    const handleChangeCategory = (e) => {
        const { value } = e.target;
        const newOptions = {
            ...options, 'category': {
                'id': value,
                'name': categories[value],
            }
        };
        setSelectedCategory(value);
        setOptions(newOptions);
        getProducts(value);
    }

    const handleChangeProduct = (e) => {
        const { value } = e.target;
        const newOptions = {
            ...options, 'product': {
                'id': value,
                'name': products[value],
            }
        };
        setSelectedProduct(value);
        setOptions(newOptions);
        getBrands(value);
    }

    const handleChangeBrand = (e) => {
        const { value } = e.target;
        console.log(value);
        const newOptions = {
            ...options, 'brand': {
                'id': value,
                'name': brands[value]
            }
        };
        setOptions(newOptions);
    }

    return (
        <div className="App">
            {/* navbar */}
            <Navbar />
            <div className="row">

                <div className="combobox">
                    <span>Categoria: </span>
                    <select onChange={handleChangeCategory}>
                        {
                            Object.keys(categories).map(key => {
                                const label = categories[key];
                                return (
                                    <option key={key} value={key}>{label}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className="combobox">
                    <span>Producto: </span>
                    <select onChange={handleChangeProduct}>
                        {
                            Object.keys(products).map(key => {
                                const label = products[key];
                                return (
                                    <option key={key} value={key}>{label}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className="combobox">
                    <span>Marca: </span>
                    <select onChange={handleChangeBrand}>
                        {
                            Object.keys(brands).map(key => {
                                const label = brands[key];
                                return (
                                    <option key={key} value={key}>{label}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <BarChart options={options} />
        </div>
    );
}

export default Reports;
