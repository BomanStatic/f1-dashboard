<script>
    export let drivers;
</script>
<div class="scrollbar-table overflow-scroll h-[21em] overflow-x-auto bg-[#333547] rounded">
    <table class="w-full">
        <tbody>
            {#each drivers as driver}
                <tr class="text-xl font-light border-b-2 border-[#222330] group hover:bg-gray-600 transition-all">
                    <td class="px-5 py-5">
                        <div class="flex">
                            <div class="mr-3 flex justify-center items-center">
                                <p>{driver.position}</p>
                            </div>
                            <div class="flex-shrink-0 w-14 h-14 align-middle">
                                <img
                                    class="w-full h-full rounded-full"
                                    src="/img/{driver.Driver.familyName}.webp"
                                    alt=""
                                />
                            </div>
                            <div class="ml-3">
                                <p class="whitespace-nowrap">{driver.Driver.givenName}</p>
                                <p class="text-gray-400 whitespace-nowrap uppercase">
                                    {driver.Driver.familyName}
                                </p>
                            </div>
                        </div>
                    </td>
                    <td class="px-5 py-5">
                        <p class="whitespace-nowrap">NAT</p>
                        <p class="text-gray-400 whitespace-nowrap">
                            {driver.Driver.nationality}
                        </p>
                    </td>
                    <td class="px-5 py-5">
                        <p class="whitespace-nowrap">TEAM</p>
                        <p class="text-gray-400 whitespace-nowrap">
                            {driver.Constructors[0].name}
                        </p>
                    </td>
                    <td class="px-5 py-5">
                        <p class="whitespace-nowrap">PTS</p>
                        <p class="text-gray-400 whitespace-nowrap">{driver.points}</p>
                    </td>
                    <td class="px-5 py-5 whitespace-nowrap">
                        <a data-sveltekit-preload-data="hover" href="/{driver.Driver.driverId}"class="text-[#6289FF]  whitespace-nowrap hover:text-[#EEC139] transition-all">More Info</a>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
<style>
    .scrollbar-table::-webkit-scrollbar {
        width: 10px;
    }
    
    .scrollbar-table::-webkit-scrollbar-track {
        background-color: gray;
    }

    .scrollbar-table::-webkit-scrollbar-thumb {
        background: #212129; 
    }
    
    .scrollbar-table::-webkit-scrollbar-thumb:hover {
        background: #b30000;
    }
</style>