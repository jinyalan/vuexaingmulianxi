<template>
    <div>
        <h2>现在开始考试111</h2>
    </div>
</template>
<script>
export default {
    dataa(){
        return{
            canshu: '',
        }
    },
    created(){
        console.log(this.$route.params.id);
        this.canshu = this.$route.params.id;
    },
}
</script>