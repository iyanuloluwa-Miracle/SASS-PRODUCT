<template>
    <div class="bg-[#fbf2c4]">
        <NavbarVue />
        <HeroSection />
        <DemoSection />
        <HowItWorks />
        <Pricing />
        <Footer />

    </div>



</template>


<script>



import NavbarVue from "../components/Navbar/Navbar.vue";
import HeroSection from "../components/HeroSection/HeroSection.vue";
import DemoSection from "../components/HeroSection/DemoSection.vue";
import HowItWorks from "../components/HeroSection/HowItWorks.vue";
import Pricing from "../components/HeroSection/Pricing.vue";
import Footer from "../components/Footer.vue";
export default {
    components: {
        NavbarVue,
        HeroSection,
        DemoSection,
        HowItWorks,
        Pricing,
        Footer
    },
};



</script>