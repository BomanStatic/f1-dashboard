<script>
    export let preRace;
</script>

<div class=" overflow-scroll h-64 overflow-x-auto ">
    <table class="w-full overflow-auto">
        <tbody>
            {#each preRace as result,i}
                {#if i === 0}
                <tr class="text-xl font-light border-b-2 border-[#2C2D3C] hover:bg-gray-600 transition-all">
                    <td class="px-3 py-6 whitespace-nowrap">
                        <div class="flex items-center text-3xl">
                            <div class="mr-3 flex justify-center items-center">
                                <p>{result.position}st</p>
                            </div>
                            <div class="ml-3 flex gap-2">
                                <p class="whitespace-nowrap">{result.Driver.givenName}</p>
                                <p class="text-gray-400 whitespace-nowrap uppercase">
                                    {result.Driver.familyName}
                                </p>
                            </div>
                        </div>
                    </td>
                    <td class="px-5 py-6">
                        <p class="whitespace-nowrap">CAR</p>
                        <p class="text-gray-400 whitespace-nowrap">{result.Constructor.name}</p>
                    </td>
                    <td class="px-5 py-6">
                        <p class="whitespace-nowrap">TIME</p>
                        <p class="text-gray-400 whitespace-nowrap">{result.Time.time}</p>
                    </td>
                    <td class="px-5 py-6">
                        <p class="whitespace-nowrap">PTS</p>
                        <p class="text-gray-400 whitespace-nowrap">+{result.points}</p>
                    </td>
                </tr>
                {:else if i === 1}
                <tr class="text-xl font-light border-b-2 border-[#2C2D3C] hover:bg-gray-600 transition-all">
                    <td class="px-3 py-6 whitespace-nowrap">
                        <div class="flex items-center text-2xl">
                            <div class="mr-3 flex justify-center items-center">
                                <p>{result.position}nd</p>
                            </div>
                            <div class="ml-3 flex gap-2">
                                <p class="whitespace-nowrap">{result.Driver.givenName}</p>
                                <p class="text-gray-400 whitespace-nowrap uppercase">
                                    {result.Driver.familyName}
                                </p>
                            </div>
                        </div>
                    </td>
                    <td class="px-5 py-6">
                        <p class="whitespace-nowrap">CAR</p>
                        <p class="text-gray-400 whitespace-nowrap">{result.Constructor.name}</p>
                    </td>
                    <td class="px-5 py-6">
                        <p class="whitespace-nowrap">TIME</p>
                        <p class="text-gray-400 whitespace-nowrap">{result.Time.time}</p>
                    </td>
                    <td class="px-5 py-6">
                        <p class="whitespace-nowrap">PTS</p>
                        <p class="text-gray-400 whitespace-nowrap">+{result.points}</p>
                    </td>
                </tr>
                {:else if i === 2}
                <tr class="text-xl font-light border-b-2 border-[#2C2D3C] hover:bg-gray-600 transition-all">
                    <td class="px-3 py-6 whitespace-nowrap">
                        <div class="flex items-center text-xl">
                            <div class="mr-3 flex justify-center items-center">
                                <p>{result.position}rd</p>
                            </div>
                            <div class="ml-3 flex gap-2">
                                <p class="whitespace-nowrap">{result.Driver.givenName}</p>
                                <p class="text-gray-400 whitespace-nowrap uppercase">
                                    {result.Driver.familyName}
                                </p>
                            </div>
                        </div>
                    </td>
                    <td class="px-5 py-6">
                        <p class="whitespace-nowrap">CAR</p>
                        <p class="text-gray-400 whitespace-nowrap">{result.Constructor.name}</p>
                    </td>
                    <td class="px-5 py-6">
                        <p class="whitespace-nowrap">TIME</p>
                        <p class="text-gray-400 whitespace-nowrap">{result.Time.time}</p>
                    </td>
                    <td class="px-5 py-6">
                        <p class="whitespace-nowrap">PTS</p>
                        <p class="text-gray-400 whitespace-nowrap">+{result.points}</p>
                    </td>
                </tr>
                {:else}
                <tr class="text-xl font-light border-b-2 border-[#2C2D3C] hover:bg-gray-600 transition-all">
                    <td class="px-3 py-6 whitespace-nowrap">
                        <div class="flex">
                            <div class="mr-3 flex justify-center items-center">
                                <p>{result.position}</p>
                            </div>
                            <div class="ml-3 text-xl flex gap-2">
                                <p class="whitespace-nowrap">{result.Driver.givenName}</p>
                                <p class="text-gray-400 whitespace-nowrap uppercase">
                                    {result.Driver.familyName}
                                </p>
                            </div>
                        </div>
                    </td>
                    <td class="px-5 py-6">
                        <p class="whitespace-nowrap">CAR</p>
                        <p class="text-gray-400 whitespace-nowrap">{result.Constructor.name}</p>
                    </td>
                    {#if result.status !== "Finished"}
                        <td class="px-5 py-6">
                            <p class="text-gray-400 whitespace-nowrap">DNF</p>
                        </td>
                    {:else}
                    <td class="px-5 py-6">
                        <p class="whitespace-nowrap">TIME</p>
                        <p class="text-gray-400 whitespace-nowrap">{result.Time.time}</p>
                    </td>
                    {/if}
                    
                    <td class="px-5 py-6">
                        <p class="whitespace-nowrap">PTS</p>
                        <p class="text-gray-400 whitespace-nowrap">+{result.points}</p>
                    </td>
                </tr>
                {/if}
            {/each}
        </tbody>
    </table>
</div>