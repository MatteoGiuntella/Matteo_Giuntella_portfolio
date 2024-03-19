<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>

<template>
    <header>
       <div class=" w-25 p-5 my-3 ">
        <ul class=" d-flex  justify-content-between list-unstyled ">
            <li>
                <router-link :to="{name:'home'}" > Home</router-link>
            </li>
            <li>
                <router-link :to="{name:'aboutme'}" > aboutme</router-link>
            </li>
            <li>
                <router-link :to="{name:'my_project'}" >my_project</router-link>
            </li>
        </ul>
       </div>
    </header>
</template>

<style lang="scss" scoped>
</style>
