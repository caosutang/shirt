<template>
  <div>
    <TheNavSide/>
    <TheHeader/>
    <nuxt />
    <TheFooter/>
  </div>
</template>

<style>

</style>
<script>
    import TheHeader from "../components/TheHeader";
    import TheNavSide from "../components/TheNavside";
    import AppLinks from "../components/AppLinks";
    import TheFooter from "../components/TheFooter";

    export default {
        components: {
            TheFooter,
            TheNavSide,
            TheHeader,
            AppLinks
        },
    }
</script>
