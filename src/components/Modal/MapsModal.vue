<template>
    <div id="map-modal" data-modal-backdrop="map" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full  max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl text-center boldfont lg:text-start font-semibold text-blue">
                        Zoo Maps
                    </h3>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="map-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <div class="p-4 md:p-5 space-y-4">
                    <div class="mb-4">
                        <ul class="block lg:flex flex-wrap justify-center -mb-px text-sm font-medium text-center gap-4"
                            id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                            <li class="me-2" role="presentation">
                                <button class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg"
                                    id="balizooMap-tab" data-tabs-target="#balizooMap" type="button" role="tab"
                                    aria-controls="balizooMap" aria-selected="false">Bali Zoo</button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="BaliBirdParkGA-tab" data-tabs-target="#BaliBirdParkGA" type="button" role="tab"
                                    aria-controls="BaliBirdParkGA" aria-selected="false">Bali Bird Park</button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="BaliFarmHouseGA-tab" data-tabs-target="#BaliFarmHouseGA" type="button"
                                    role="tab" aria-controls="BaliFarmHouseGA" aria-selected="false">Bali Farm
                                    House</button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="BaliSafariGA-tab" data-tabs-target="#BaliSafariGA" type="button" role="tab"
                                    aria-controls="BaliSafariGA" aria-selected="false">Bali Safari</button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content">
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="balizooMap" role="tabpanel"
                            aria-labelledby="balizooMap-tab">
                            <div class="mx-auto text-center">
                                <img class="rounded-t-lg mx-auto h-[25rem] object-contain"
                                    src="../../assets/image/maps.jpeg" alt="" />
                                <a href="" class="bg-yellow p-2 mt-5 text-black rounded-lg text-sm">Download zoo map</a>
                            </div>
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliBirdParkGA"
                            role="tabpanel" aria-labelledby="BaliBirdParkGA-tab">
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
                                <div>
                                    <a href="#">
                                        <img class="rounded-t-lg" src="../../assets/image/image-13.png" alt="" />
                                    </a>
                                    <div class="p-2 text-center">
                                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">
                                            Bali Zoo General Admission Ticket</h5>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliFarmHouseGA"
                            role="tabpanel" aria-labelledby="BaliFarmHouseGA-tab">
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
                                <div>
                                    <a href="#">
                                        <img class="rounded-t-lg" src="../../assets/image/image-13.png" alt="" />
                                    </a>
                                    <div class="p-2 text-center">
                                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">
                                            Bali Zoo General Admission Ticket</h5>
                                        <a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See
                                            Details</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliSafariGA" role="tabpanel"
                            aria-labelledby="BaliSafariGA-tab">
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
                                <div>
                                    <a href="#">
                                        <img class="rounded-t-lg" src="../../assets/image/image-13.png" alt="" />
                                    </a>
                                    <div class="p-2 text-center">
                                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">
                                            Bali Zoo General Admission Ticket</h5>
                                        <a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See
                                            Details</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>