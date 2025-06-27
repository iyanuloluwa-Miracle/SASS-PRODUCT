<template>
    <div class="flex flex-col items-center justify-center py-24 sm:py-32 md:py-36 px-4">
        <!-- AI Badge -->
        <div class="mb-4 sm:mb-6" ref="aiBadge">
            <div
                class="rounded-full border border-amber-400 px-4 sm:px-6 py-1 sm:py-2 text-amber-500 flex items-center text-sm sm:text-base">
                <span class="mr-1 sm:mr-2">✨</span>
                <span>Powered by AI</span>
            </div>
        </div>

        <!-- Main Heading -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4 sm:mb-6 max-w-xs sm:max-w-lg md:max-w-2xl"
            ref="mainHeading">
            Unlock Document Insights in Seconds, Not Hours
        </h1>

        <!-- Feature Text -->
        <div class="flex items-center font-bold text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 max-w-xs sm:max-w-lg text-center"
            ref="featureText">
            <span>Get a beautiful summary reel of the document in seconds</span>
        </div>

        <!-- CTA Button with Enhanced Gradient -->
        <button ref="ctaButton"
            class="flex items-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white font-medium hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg text-sm sm:text-base">
            Try Briefly
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 ml-1.5 sm:ml-2" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
            </svg>
        </button>
    </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
    mounted() {
        // Set initial states
        gsap.set(this.$refs.aiBadge, { opacity: 0, y: -20 });
        gsap.set(this.$refs.mainHeading, { opacity: 0, y: -15 });
        gsap.set(this.$refs.featureText, { opacity: 0, y: -10 });
        gsap.set(this.$refs.ctaButton, { opacity: 0, scale: 0.9 });

        // Create timeline for sequence animations
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Add animations to timeline
        tl.to(this.$refs.aiBadge, {
            duration: 0.8,
            opacity: 1,
            y: 0
        })
            .to(this.$refs.mainHeading, {
                duration: 0.8,
                opacity: 1,
                y: 0
            }, "-=0.4")
            .to(this.$refs.featureText, {
                duration: 0.8,
                opacity: 1,
                y: 0
            }, "-=0.4")
            .to(this.$refs.ctaButton, {
                duration: 0.8,
                opacity: 1,
                scale: 1
            }, "-=0.4");

        // Add hover animation to CTA button
        this.$refs.ctaButton.addEventListener('mouseenter', () => {
            gsap.to(this.$refs.ctaButton, {
                duration: 0.3,
                scale: 1.05,
                ease: "power1.out"
            });
        });

        this.$refs.ctaButton.addEventListener('mouseleave', () => {
            gsap.to(this.$refs.ctaButton, {
                duration: 0.3,
                scale: 1,
                ease: "power1.out"
            });
        });

        // Add responsiveness check to adjust animations on resize
        const checkMobile = () => {
            const isMobile = window.innerWidth < 640;
            if (isMobile) {
                // Adjust animation timings or properties for mobile if needed
                gsap.set(this.$refs.ctaButton, { clearProps: "scale" });
                // Reset hover effects on mobile
                this.$refs.ctaButton.removeEventListener('mouseenter', null);
                this.$refs.ctaButton.removeEventListener('mouseleave', null);
            }
        };

        // Check on load
        checkMobile();

        // Add resize listener
        window.addEventListener('resize', checkMobile);
    },
    beforeUnmount() {
        // Clean up the resize event listener
        window.removeEventListener('resize', checkMobile);
    }
};
</script>