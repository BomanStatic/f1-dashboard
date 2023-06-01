<script>
    export let nextThree;
    console.log("lolg", nextThree);

    function getDay(dateString ){
        const date = new Date(dateString);
        const options = { month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
</script>
{#each nextThree as race}
    <div class="min-w-[10em] flex justify-between p-2 border-2 border-t-0 border-l-0 rounded-br-md">
        <div class="">
            <p>Formula 1 {race.raceName} {race.season}</p>
            <p class="text-gray-400">{getDay(race.FirstPractice.date)} - {getDay(race.date)}</p>
        </div>
        <div class="flex flex-col items-end">
            <p>{race.Circuit.Location.locality}</p>
            <p class="text-gray-400 text-right">{race.Circuit.circuitName}</p>
        </div>
        
    </div>
{/each}