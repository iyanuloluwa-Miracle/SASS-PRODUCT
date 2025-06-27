<template>
    <div class="bg-[#fbf2c4]">
        <NavbarVue />
        <HeroSection />
        <DemoSection />
        <HowitWorks />
        <Pricing />
        <Footer />

    </div>



</template>


<script>



import NavbarVue from "../components/Navbar/Navbar.vue";
import HeroSection from "../components/Hero-Section/heroSection.vue";
import DemoSection from "../components/Hero-Section/demoSection.vue";
import HowitWorks from "../components/Hero-Section/HowitWorks.vue";
import Pricing from "../components/Hero-Section/Pricing.vue";
import Footer from "../components/Footer.vue";
export default {
    components: {
        NavbarVue,
        HeroSection,
        DemoSection,
        HowitWorks,
        Pricing,
        Footer
    },
};



</script>