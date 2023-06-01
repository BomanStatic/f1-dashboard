<script>
    export let constructors;
</script>
<div class="scrollbar-table overflow-scroll h-[21em] overflow-x-auto bg-[#333547] rounded">
    <table class="w-full">
        <tbody>
            {#each constructors as constructor} 
            <tr class="text-xl font-light border-b-2 border-[#222330] group hover:bg-gray-600 transition-all ">
                <td class="px-5 py-5">{constructor.position}</td>
                <td class="px-6 py-4">
                    <p class="uppercase whitespace-nowrap">team</p>
                    <p class="whitespace-nowrap text-gray-400">{constructor.Constructor.name}</p>
                </td>
                <td class="px-5 py-5">
                    <p class="whitespace-nowrap">PTS</p>
                    <p class="text-gray-400 whitespace-nowrap">{constructor.points}</p>
                </td>
                <td class="px-5 py-5">
                    <p class="whitespace-nowrap">WINS</p>
                    <p class="text-gray-400 whitespace-nowrap">{constructor.wins}</p>
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
