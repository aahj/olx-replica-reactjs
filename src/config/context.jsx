import React, { Component } from 'react';
import { Data, detailProduct } from '../components/Data';

const ProductContext = React.createContext();
class ProductProvider extends Component {
    state = {
        // products: Data, //----this we are referencing data to products
        //----------best way to do it
        products: [],
        featuredProducts: [],
        freshRecommend: [],
        category_mobilePhones: [],
        category_cars: [],
        category_motorcycles: [],
        category_houses: [],
        category_tv: [],
        category_tablets: [],
        category_lands: [],
        detailProduct: detailProduct,
    }

    componentDidMount() {
        this.settingProducts();
    }

    //--------to copy values from Data
    settingProducts = () => {
        let tempProd = [];
        Data.forEach(item => {
            let singleItem = { ...item };
            tempProd = [...tempProd, singleItem];
        });

        let featuredProducts = tempProd.filter(val => val.featured === true);
        let freshRecommend = tempProd.filter(val => val.featured === false);
        let category_mobilePhones = tempProd.filter(val => val.category.type === 'mobile-phones');
        let category_cars = tempProd.filter(val => val.category.type === 'cars');
        let category_motorcycles = tempProd.filter(val => val.category.type === 'motorcycles');
        let category_houses = tempProd.filter(val => val.category.type === 'houses');
        let category_tv = tempProd.filter(val => val.category.type === 'tv');
        let category_tablets = tempProd.filter(val => val.category.type === 'tablets');
        let category_lands = tempProd.filter(val => val.category.type === 'lands-and-plots');

        this.setState(() => {
            return {
                products: tempProd,
                featuredProducts,
                freshRecommend,
                category_mobilePhones,
                category_cars,
                category_motorcycles,
                category_houses,
                category_tv,
                category_tablets,
                category_lands
            };
        })
    }

    //check if productid match with id in the argument
    getItem = (id) => {
        let fetchProduct = this.state.products.find(item => item.id === id);
        return fetchProduct;
    }

    //the ID will get from Card.js
    handleDetails = (id) => {
        const productx = this.getItem(id);
        this.setState({
            detailProduct: productx
        })
        window.scrollTo(0, 0);
    }
    //handle price filter
    handleChangeSort = (e) => {
        this.setState({
            sort: e.target.value
        })
        this.listProducts();
    }
    listProducts = () => {
        this.setState(state => {
            if (state.sort != '') {
                state.category_mobilePhones.sort((a, b) => (state.sort === 'lowest') ? (a.price > b.price ? 1 : -1) : (a.price < b.price ? 1 : -1))
                state.category_cars.sort((a, b) => (state.sort === 'lowest') ? (a.price > b.price ? 1 : -1) : (a.price < b.price ? 1 : -1))
                state.category_motorcycles.sort((a, b) => (state.sort === 'lowest') ? (a.price > b.price ? 1 : -1) : (a.price < b.price ? 1 : -1))
                state.category_houses.sort((a, b) => (state.sort === 'lowest') ? (a.price > b.price ? 1 : -1) : (a.price < b.price ? 1 : -1))
                state.category_tv.sort((a, b) => (state.sort === 'lowest') ? (a.price > b.price ? 1 : -1) : (a.price < b.price ? 1 : -1))
                state.category_tablets.sort((a, b) => (state.sort === 'lowest') ? (a.price > b.price ? 1 : -1) : (a.price < b.price ? 1 : -1))
                state.category_lands.sort((a, b) => (state.sort === 'lowest') ? (a.price > b.price ? 1 : -1) : (a.price < b.price ? 1 : -1))
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                handleChangeSort: this.handleChangeSort,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer, ProductContext };