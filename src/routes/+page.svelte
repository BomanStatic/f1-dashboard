<script>
    import { ErgastAPI } from "../js/ergastAPI";
    import { onMount } from "svelte";
    import DriverTable from "../components/DriverTable.svelte";
    import UpcomingRaces from "../components/UpcomingRaces.svelte";
    import ConstructorsTable from "../components/ConstructorsTable.svelte";
    import { slide, fly } from "svelte/transition";
    import { cubicIn, cubicOut } from 'svelte/easing'

    let nextRace = null;
    let drivers = null;
    let constructors = null;
    let preRace = null;
    let nextThree = null;
    let apiError = false;
    let selectedOption = "drivers";

    onMount(async () => {
        const ergast = new ErgastAPI();
        try {
            nextRace = await ergast.getNextRace();
            drivers = await ergast.getDrivers();
            constructors = await ergast.getConstructors();
            preRace = await ergast.getPreviousYearRaceResults();
            nextThree = await ergast.getNextThreeRaces();
            apiError = false; // No API error
        } catch (error) {
            console.error("Error:", error);
            apiError = true; // Set API error to true
        }
    });

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { weekday: "short", day: "numeric", month: "short" };
        return date.toLocaleDateString("en-US", options);
    }
    function getDay(dateString) {
        const date = new Date(dateString);
        const options = { weekday: "short" };
        return date.toLocaleDateString("en-US", options);
    }
    function formatTime(date, time) {
        const raceDate = `${date} ${time}`;
        const getTime = new Date(raceDate);
        const formattedTime = `${getTime.getHours()}:${getTime
            .getMinutes()
            .toString()
            .padStart(2, "0")}`;

        getTime.setHours(getTime.getHours() + 1);
        const formattedEndTime = `${getTime.getHours()}:${getTime
            .getMinutes()
            .toString()
            .padStart(2, "0")}`;

        return `${formattedTime} - ${formattedEndTime}`;
    }
    function raceTime(date, time) {
        const raceDate = `${date} ${time}`;
        const getTime = new Date(
            (typeof raceDate === "string"
                ? new Date(raceDate)
                : raceDate
            ).toLocaleString("en-US", { timeZone: "Europe/Paris" })
        );
        const hours = getTime.getHours();
        const minutes = getTime.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    }
</script>
{#if nextRace && drivers && constructors && nextThree}
    <div in:fly={{ easing: cubicOut, y: 10, duration: 300 }}>
        <div class="bg-[#222330] border-b-2 border-[#333547] px-10 py-5 mt-0 relative 2xl:rounded-t-xl">
            <h1 class="text-2xl uppercase">
                Formula 1 {nextRace.season}
                {nextRace.raceName}
            </h1>
            <p class="tracking-wider text-gray-400">
                {nextRace.Circuit.Location.country}
            </p>
        </div>
        <div class=" overflow-hidden grid grid-cols-1 bg-[#222330] lg:grid-cols-2 rounded-b-2xl">
            <div class="mx-4">
                <img
                    class="w-full"
                    src="/img/Circuit/{nextRace.Circuit.Location.locality}.webp"
                    alt="Circuit Layout"
                />
            </div>
            <div class="flex flex-wrap justify-evenly gap-y-4 bg-[#222330] p-5">
                <div class="border-t-4 border-r-4 rounded-tr-xl border-[#ecedf2] flex flex-col gap-1 p-4 min-w-[20em] max-h-[15em]">
                    <h3 class="text-xl tracking-wide pb-5">
                        {formatDate(nextRace.FirstPractice.date)} 
                            - {formatDate(nextRace.date)} {nextRace.season}
                    </h3>
                    <div class="flex gap-3 justify-between">
                        <h3 class="capitalize text-gray-400 text-xl">Practice 1</h3>
                        <p>{getDay(nextRace.FirstPractice.date)}</p>
                        <p>
                            {formatTime(
                                nextRace.FirstPractice.date,
                                nextRace.FirstPractice.time
                            )}
                        </p>
                    </div>
                    <div class="flex gap-3 justify-between">
                        <h3 class="capitalize text-gray-400 text-xl">Practice 2</h3>
                        <p>{getDay(nextRace.SecondPractice.date)}</p>
                        <p>
                            {formatTime(
                                nextRace.SecondPractice.date,
                                nextRace.SecondPractice.time
                            )}
                        </p>
                    </div>
                    <!-- <div class="flex gap-3 justify-between">
                        <h3 class="capitalize text-gray-400 text-xl">Practice 3</h3>
                        <p class="">{getDay(nextRace.ThirdPractice.date)}</p>
                        <p>
                            {formatTime(
                                nextRace.ThirdPractice.date,
                                nextRace.ThirdPractice.time
                            )}
                        </p>
                    </div> -->
                    <div class="flex gap-3 justify-between">
                        <h3 class="capitalize text-gray-400 text-xl">Qualifying</h3>
                        <p>{getDay(nextRace.Qualifying.date)}</p>
                        <p>
                            {formatTime(
                                nextRace.Qualifying.date,
                                nextRace.Qualifying.time
                            )}
                        </p>
                    </div>
                    <div class="flex gap-3 justify-between mt-2">
                        <h3 class="capitalize text-white text-xl">Race</h3>
                        <p>{getDay(nextRace.date)}</p>
                        <p>{raceTime(nextRace.date, nextRace.time)}</p>
                    </div>
                </div>
                <div class="flex flex-col gap-1 border-t-4 border-r-4 rounded-tr-xl border-[#ecedf2]  p-4 min-w-[20em] max-h-[15em]">
                    <h3 class="text-xl">Best to watch {nextRace.season}</h3>
                    <div class="flex gap-3 pt-3 justify-around">
                        <div class="flex flex-col gap-2">
                            <img
                                class=" w-32"
                                src="/img/{drivers[0].Driver.familyName}.webp"
                                alt="best driver"
                            />
                            <div class="flex gap-2 text-xl font-light self-center">
                                <h2>{drivers[0].Driver.givenName}</h2>
                                <h2 class="uppercase">
                                    {drivers[0].Driver.familyName}
                                </h2>
                            </div>
                        </div>
                        <div class="flex flex-col gap-3 mb-[5em]">
                            <div class="flex gap-3 text-xl tracking-wider justify-between">
                                <p class="uppercase text-gray-400">pos</p>
                                <p>{drivers[0].position}</p>
                            </div>
                            <div class="flex gap-3 text-xl tracking-wider justify-between">
                                <p class="uppercase text-gray-400">pts</p>
                                <p>{drivers[0].points}</p>
                            </div>
                            <div class="flex gap-3 text-xl tracking-wider justify-between">
                                <p class="uppercase text-gray-400">wins</p>
                                <p>{drivers[0].wins}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:row-start-2">
                <div class="flex flex-col gap-3 rounded-b-xl px-5 2xl:px-10">
                    <h2 class="text-2xl">Upcoming races</h2>
                    <div class="flex flex-col flex-wrap gap-y-5 justify-evenly gap-3">
                        <UpcomingRaces {nextThree} />
                    </div>
                </div>
            </div>
            <div class="px-4 pb-4 bg-[#222330] 2xl:-mt-[5em] rounded-b-2xl mt-4">
                <div class="flex gap-3 text-xl">
                    <button
                        class={`py-2 px-4 ${selectedOption === "drivers" ? " underline text-white": "text-gray-400 hover:text-gray-200 transition-colors"}`} on:click={() => (selectedOption = "drivers")}>
                        Drivers
                    </button>

                    <button
                        class={`py-2 px-4 ${selectedOption === "drivers"? " text-gray-400 hover:text-gray-200 transition-colors": " underline text-white"}`} on:click={() => (selectedOption = "constructors")}>
                        Constructors
                    </button>
                </div>
                {#if selectedOption === "drivers"}
                    <div in:slide|local out:slide|local>
                        <DriverTable {drivers} />
                    </div>
                {:else if selectedOption === "constructors"}
                    <div in:slide|local out:slide|local>
                        <ConstructorsTable {constructors} />
                    </div>
                {/if}
            </div>
        </div>
    </div>
    {:else if apiError}
        <div class="h-screen w-full grid place-content-center">
            <p>API error occurred. Please try again later.</p>
        </div>
{/if}