<script>
    import DriverRow from '../components/DriverRow.svelte';
    export let drivers;
</script>

<div class=" overflow-scroll h-[21em] overflow-x-auto bg-[#383846]">
    <table class="w-full">
        <tbody>
            {#each drivers as driver}
                <DriverRow {driver} />
            {/each}
        </tbody>
    </table>
</div>

  

  