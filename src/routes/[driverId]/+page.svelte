<script>
    import DriverResults from "../../components/DriverResults.svelte";
    import { ErgastAPI } from "../../js/ergastAPI.js"
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { BarLoader } from 'svelte-loading-spinners';
    import { fly } from 'svelte/transition';
    import { cubicIn, cubicOut } from 'svelte/easing'

    let driver = null;
    let results = null;
    let constructor  = null;
    const driverId = $page.params.driverId;
    onMount(async () => {
        const ergast = new ErgastAPI();
        try{
            driver = await ergast.fetchDriver(driverId);
            results = await ergast.fetchResults(driverId);
            constructor  = await ergast.fetchConstructor(driverId);
        }catch (error) {
            console.error("Error:", error);
        }
    });
</script>
{#if driver && results && constructor}
    <div in:fly={{ easing: cubicOut, y: 10, duration: 300 }}>
        <div class="bg-[#222330] border-b-2 border-[#333547] text-5xl px-10 py-5 {constructor.name.toLowerCase().replace(/\s/g, '')}">
            <div class="flex gap-2">
                <h1 class="">{driver.givenName}</h1>
                <h1 class="tracking-wider font-extralight ">{driver.familyName}</h1>
            </div>
        </div>
        <div class="grid grid-cols-1 bg-[#222330] lg:grid-cols-2">
            <div class="flex flex-col bg-[#222330] mx-5 sm:mr-5 sm:ml-0">
                <img
                    class="max-h-[30em] object-contain"
                    src="/img/{driver.familyName}.webp"
                    alt={driver.familyName}
                />
                <div class=" px-10 py-3 flex gap-2 text-2xl uppercase items-center justify-between border-b-2 border-[#333544]">
                    <h2 class="text-5xl font-black">{driver.code}</h2>
                    <div class="">
                        <p class="text-5xl font-black">{driver.permanentNumber}</p>
                    </div>
                </div>
                <div class="flex px-10 py-5 justify-between">
                    <div class="flex flex-col text-2xl">
                        <p>Team</p>
                        <p>Nationality</p>
                        <p>Birthday</p>
                    </div>
                    <div class="flex flex-col text-2xl uppercase items-end">
                        <p>{constructor.name}</p>
                        <p>{driver.nationality}</p>
                        <p>{driver.dateOfBirth}</p>
                    </div>
                </div>
            </div>
            <div class="px-5 py-3 h-full">
                <DriverResults {results} />
            </div>
        </div>
    </div>
    {:else}
    <div class="grid place-content-center h-screen">
        <BarLoader size="120" color="#FF3E00" unit="px" duration="2s" />
    </div>
        
{/if}
<style>
    .redbull {
        color: #3671c6;
    }
    .astonmartin {
        color: #358c75;
    }
    .mercedes {
        color: #6cd3bf;
    }
    .ferrari {
        color: #f91536;
    }
    .mclaren {
        color: #f58020;
    }
    .alpinef1team {
        color: #2293d1;
    }
    .haas {
        color: #b6babd;
    }
    .alfaromeo {
        color: #c92d4b;
    }
    .alphatauri {
        color: #5e8faa;
    }
    .williams {
        color: #37bedd;
    }
</style>
