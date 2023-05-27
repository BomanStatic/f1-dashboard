<script>
  import DriverResults from "../../components/DriverResults.svelte";
  import {fade} from 'svelte/transition';
  export let data;

  const { driver } = data;
  const { results } = data;
  const { constructor } = data;

  console.log("page.svelte: ", data);
  console.log("page.svelte DRIVER: ", driver);
  console.log("page.svelte RESULTS: ", results);
  console.log("page.svelte CON: ", constructor);
</script>
<div in:fade="{{duration: 300}}">
  <div class="bg-[#383846] text-5xl px-10 py-5 text-[#3671C6] {constructor.name.toLowerCase().replace(/\s/g, '')}">
    <div class="flex gap-2">
      <h1 class="">{driver.givenName}</h1>
      <h1 class="tracking-wider font-extralight">{driver.familyName}</h1>
    </div>
  </div>
  <div class="grid grid-cols-1 bg-[#333544] lg:grid-cols-2">
    <div class="flex flex-col bg-[#2C2D3C] mx-5 sm:mr-5 sm:ml-0">
      <img
        class="max-h-[30em] object-contain"
        src="../src/img/{driver.familyName}.webp"
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
