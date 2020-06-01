import React, { Component } from 'react';
import {linkData} from './linkData';
import { socialData } from './socialData';
import {items} from './productData';
const ProductContext = React.createContext();

class ProductProvider extends Component{
    state={
        sidebarOpen:false,
        cartOpen:false,
        links:linkData,
        socialIcons:socialData,
        cart:[],
        cartItems:0,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
        storeProducts:[],
        filteredProducts:[],
        featuredProducts:[],
        singleProduct:{},
        loading:false
    }
    componentDidMount(){
        this.setProducts(items);
    }
    setProducts = (products) => {
        //set toan bo products 
        let storeProducts = products.map(item => {
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            const product = {id,...item.fields,image};
            return product;
        })
        let featuredProducts = storeProducts.filter(item => 
            item.featured === true);  
            this.setState({
                storeProducts,
                filteredProducts:storeProducts,
                featuredProducts,
                cart:this.getStorageCart(),
                singleProduct:this.getStorageProduct(),
                loading:false
            },() => {
                this.addTotals()
            })
    }
    //get Cart from local Storage
    getStorageCart = () => {
        let cart;
        if(localStorage.getItem("cart")){
           cart = JSON.parse(localStorage.getItem("cart"))
        }
        else{
            cart=[];
        }
        return cart;
    }
    //get Product from local Storage
    getStorageProduct = () => {
        let product = {};
        if(localStorage.getItem("singleProduct")){
            product = JSON.parse(localStorage.getItem("singleProduct"))
        }
        return product;
    }
    //get Totals
    getTotals = () => {
   
    }
    //add totals
    addTotals = () => {
        var subTotal = 0;
        var cartItems = 0;
        this.state.cart.map((item)=>{
            subTotal += item.total;
            cartItems += item.count;
        });
        let tax = subTotal * 0.2;
        let totals = tax + subTotal;
        this.setState({
            cartSubTotal:subTotal,
            cartTax:tax,
            cartTotal:totals,
            cartItems:cartItems
        })
    }
    //synce storage
    syncStorage = () => {
    localStorage.setItem("cart",JSON.stringify(this.state.cart));
    }
    //add to cart 
    addToCart = (id) => {
        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.storeProducts];
        let tempItem = tempCart.find(item =>
            item.id === id
        )
        if(!tempItem){
            tempItem = tempProducts.find(product =>
                product.id === id
            )
            let total = tempItem.price;
            let cartItem = {...tempItem,count:1,total};
            tempCart = [...tempCart,cartItem];
        }
        else{
            tempItem.count++;
            tempItem.total = tempItem.count * tempItem.price;
        }
       this.setState({
           cart : tempCart
       },() =>{
           this.addTotals();
           this.syncStorage();
       });
    }
    
    //set single product
    setSingleProduct = (id) => {
        let storeProducts = [...this.state.storeProducts];
        let product = storeProducts.find((product) => 
            product.id === id
        )
        if(localStorage.getItem("singleProduct")){
            localStorage.removeItem("singleProduct");
            localStorage.setItem("singleProduct",JSON.stringify(product));
        }
        else
        localStorage.setItem("singleProduct",JSON.stringify(product));
        this.setState({
            singleProduct:{...product},
            loading:false
        })
    }
    handleSidebar = () => {
        this.setState({sidebarOpen:!this.state.sidebarOpen})
    }
    handleCart = () => {
        this.setState({cartOpen:!this.state.cartOpen})
    }
    closeCart = () => {
        this.setState({cartOpen:false})
    }
    openCart = () => {
        this.setState({cartOpen:true})
    }
    render(){
      return  <ProductContext.Provider value={{
          ...this.state,
          handleCart:this.handleCart,
          handleSidebar:this.handleSidebar,
          openCart:this.openCart,
          closeCart:this.closeCart,
          setSingleProduct:this.setSingleProduct,
          addToCart:this.addToCart}}>
            {this.props.children}
        </ProductContext.Provider>
    }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider , ProductConsumer };