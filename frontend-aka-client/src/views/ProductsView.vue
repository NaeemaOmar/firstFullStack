<template>
    <div>
        <h1>These are the products</h1>
        <table>
            <th>Product name</th>
            <th>Product price</th>
            <th>Product weight</th>
            <tbody v-for="product in $store.state.productsArray" :key="product.product_id">
                <td>{{product.product_name}}</td>
                <td>{{product.price}}</td>
                <td>{{product.weight}}</td>
                <td><button>Add</button></td>
            </tbody>
        </table>

    </div>
</template>

<script>
export default{
    data(){
        return{

        }
    },
    computed:{
        getProductsArray(){
            this.$store.dispatch('getProductsArray')
        }
    },
    mounted(){
        this.getProductsArray
    }
}
</script>