<script>
    export let results;
    console.log(results);
</script>

<div class="overflow-auto max-h-[70vh] overflow-x-auto bg-[#383846]">
    <table class="w-full">
      <tbody>
        {#each results as result}
        <tr class="text-xl font-light border-b-2 border-[#2C2D3C]">
          <td class="px-5 py-5 whitespace-nowrap">
            <div class="flex">
                <div class="mr-3 flex justify-center items-center">
                    <p>{result.round}</p>
                </div>
              <div class="ml-3">
                <p class="whitespace-nowrap">{result.Circuit.Location.country}</p>
              </div>
            </div>
          </td>
          <td class="px-5 py-5 whitespace-nowrap">
            <div class="flex flex-col text-center">
              <p class="text-gray-400 whitespace-nowrap">Grid Start</p>
              <p class="whitespace-nowrap">{result.Results[0].grid}</p>
            </div>
          </td>
          <td class="px-5 py-5 whitespace-nowrap">
            <div class="flex flex-col text-center">
              <p class="text-gray-400 whitespace-nowrap">Finish</p>
              <p class="whitespace-nowrap">{result.Results[0].position}</p>
            </div>
          </td>
          <td class="px-5 py-5 whitespace-nowrap">
            <div class="flex flex-col text-center">
              <p class="text-gray-400 whitespace-nowrap">PTS</p>
              <p class="whitespace-nowrap">+{result.Results[0].points}</p>
            </div>
          </td>
        </tr>
        {/each}
      </tbody>
    </table>
  </div>