<template>
    <div id="openinghour-modal" data-modal-backdrop="openinghour" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl text-center boldfont lg:text-start font-semibold text-blue">
                        Opening Hour
                    </h3>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="openinghour-modal">
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
                                <button class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg" id="balizoo-tab"
                                    data-tabs-target="#balizoo" type="button" role="tab" aria-controls="balizoo"
                                    aria-selected="false">Bali Zoo</button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="BaliBirdPark-tab" data-tabs-target="#BaliBirdPark" type="button" role="tab"
                                    aria-controls="BaliBirdPark" aria-selected="false">Bali Bird Park</button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="BaliFarmHouse-tab" data-tabs-target="#BaliFarmHouse" type="button" role="tab"
                                    aria-controls="BaliFarmHouse" aria-selected="false">Bali Farm House</button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="BaliSafari-tab" data-tabs-target="#BaliSafari" type="button" role="tab"
                                    aria-controls="BaliSafari" aria-selected="false">Bali Safari</button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content">
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="balizoo" role="tabpanel"
                            aria-labelledby="balizoo-tab">
                            <div class="grid grid-cols-2 gap-2 w-full lg:w-3/4">
                                <p class="font-bold">Sunday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Moday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Tuesday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Wednesday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Thursday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Friday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Saturday</p>
                                <p>09.00 AM - 17.00 PM</p>
                            </div>
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliBirdPark" role="tabpanel"
                            aria-labelledby="BaliBirdPark-tab">
                            <div class="grid grid-cols-2 gap-2 w-full lg:w-3/4">
                                <p class="font-bold">Sunday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Moday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Tuesday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Wednesday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Thursday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Friday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Saturday</p>
                                <p>09.00 AM - 17.00 PM</p>
                            </div>
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliFarmHouse"
                            role="tabpanel" aria-labelledby="BaliFarmHouse-tab">
                            <div class="grid grid-cols-2 gap-2 w-full lg:w-3/4">
                                <p class="font-bold">Sunday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Moday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Tuesday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Wednesday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Thursday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Friday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Saturday</p>
                                <p>09.00 AM - 17.00 PM</p>
                            </div>
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliSafari" role="tabpanel"
                            aria-labelledby="BaliSafari-tab">
                            <div class="grid grid-cols-2 gap-2 w-full lg:w-3/4">
                                <p class="font-bold">Sunday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Moday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Tuesday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Wednesday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Thursday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Friday</p>
                                <p>09.00 AM - 17.00 PM</p>
                                <p class="font-bold">Saturday</p>
                                <p>09.00 AM - 17.00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>