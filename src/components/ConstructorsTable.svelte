<script>
    export let constructors;
</script>

<div class="overflow-scroll h-[21em] overflow-x-auto bg-[#383846]">
  <table class="w-full">
      <tbody>
          {#each constructors as constructor} 
          <tr class="text-xl font-light border-b-2 border-[#2C2D3C] group hover:bg-gray-600 transition-all ">
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

