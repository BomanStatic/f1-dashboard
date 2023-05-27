<script>
    export let driver;
</script>
<!-- <a class="" href="/{driver.Driver.driverId}"> -->
<tr class="text-xl font-light border-b-2 border-[#2C2D3C] group hover:bg-gray-600 transition-all">
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
        <p class=" whitespace-nowrap">NAT</p>
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
        <a href="/{driver.Driver.driverId}" class="text-blue-200  whitespace-nowrap hover:text-blue-500 transition-all">More Info</a>
    </td>
</tr>