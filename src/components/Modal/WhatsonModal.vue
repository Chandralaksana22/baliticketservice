<template>
    <div id="wo-modal" data-modal-backdrop="wo" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full  max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl text-center boldfont lg:text-start font-semibold text-blue">
                        What's On
                    </h3>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="wo-modal">
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
                                    id="balizooWo-tab" data-tabs-target="#balizooWo" type="button" role="tab"
                                    aria-controls="balizooWo" aria-selected="false">Bali Zoo</button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="BaliBirdParkWo-tab" data-tabs-target="#BaliBirdParkWo" type="button" role="tab"
                                    aria-controls="BaliBirdParkWo" aria-selected="false">Bali Bird Park</button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="BaliFarmHouseWo-tab" data-tabs-target="#BaliFarmHouseWo" type="button"
                                    role="tab" aria-controls="BaliFarmHouseWo" aria-selected="false">Bali Farm
                                    House</button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="BaliSafariWo-tab" data-tabs-target="#BaliSafariWo" type="button" role="tab"
                                    aria-controls="BaliSafariWo" aria-selected="false">Bali Safari</button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content">
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="balizooWo" role="tabpanel"
                            aria-labelledby="balizooWo-tab">
                            <div class="overflow-y-auto h-[50vh]">
                                <h1 class="text-blue boldfont my-5">Single Package</h1>
                                <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
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
                                <h1 class="text-blue boldfont my-5">Combo Package</h1>
                                <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
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
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliBirdParkWo"
                            role="tabpanel" aria-labelledby="BaliBirdParkWo-tab">
                            <div
                                class="overflow-y-auto h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
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
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliFarmHouseWo"
                            role="tabpanel" aria-labelledby="BaliFarmHouseWo-tab">
                            <div
                                class="overflow-y-auto h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
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
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliSafariWo" role="tabpanel"
                            aria-labelledby="BaliSafariWo-tab">
                            <div
                                class="overflow-y-auto h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
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