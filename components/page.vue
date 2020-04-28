<template>
    <div>
        <top></top>
        <div class="content">
            <h1>
                <font color="red">{{message}}</font>
            </h1>
        </div>
    </div>
</template>
<script>
import top from './htop'
export default {
    data(){
        return{
            message: "我是page页面"
        }
    }
}
</script>
<style>
    .content{
        width: 90%;
        height: 300px;
        background-color: yellow;
        margin: 50px auto;
    }
</style>