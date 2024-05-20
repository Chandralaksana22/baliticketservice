<template>
    <div class="relative">
        <div class="placetogo-port img-border hover-content">
            <img :src="imageSrc" class="h-full" alt="">
            <div class="cover p-5">
                <div class="detail text-center text-white">
                    <h3 class="boldfont text-white text-2xl mb-1">{{ title }}</h3>
                    <h3 class="sub-title text-white text-lg mb-5">{{ subTitle }}</h3>
                    <p class="content text-sm">{{ description }}</p>
                </div>
            </div>
            <div class="absolute z-50 bottom-[7%] left-1/2 -translate-x-1/2 text-center w-100">
                <a :href="buttonLink" class="bg-white rounded-lg p-2 slide boldfont text-center">Book Ticket</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageSrc: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        subTitle: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            required: true
        },
        buttonLink: {
            type: String,
            default: ""
        },
        cursor: {
            type: String,
            default: "pointer2"
        }
    }
};
</script>

<style scoped>

</style>