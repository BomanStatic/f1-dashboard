import { c as create_ssr_component, d as each, e as escape, f as add_attribute, v as validate_component } from "../../../chunks/index2.js";
const DriverResults = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { results } = $$props;
  console.log(results);
  if ($$props.results === void 0 && $$bindings.results && results !== void 0)
    $$bindings.results(results);
  return `<div class="overflow-auto max-h-[70vh] overflow-x-auto bg-[#383846]"><table class="w-full"><tbody>${each(results, (result) => {
    return `<tr class="text-xl font-light border-b-2 border-[#2C2D3C]"><td class="px-5 py-5 whitespace-nowrap"><div class="flex"><div class="mr-3 flex justify-center items-center"><p>${escape(result.round)}</p></div>
              <div class="ml-3"><p class="whitespace-nowrap">${escape(result.Circuit.Location.country)}</p></div>
            </div></td>
          <td class="px-5 py-5 whitespace-nowrap"><div class="flex flex-col text-center"><p class="text-gray-400 whitespace-nowrap">Grid Start</p>
              <p class="whitespace-nowrap">${escape(result.Results[0].grid)}</p>
            </div></td>
          <td class="px-5 py-5 whitespace-nowrap"><div class="flex flex-col text-center"><p class="text-gray-400 whitespace-nowrap">Finish</p>
              <p class="whitespace-nowrap">${escape(result.Results[0].position)}</p>
            </div></td>
          <td class="px-5 py-5 whitespace-nowrap"><div class="flex flex-col text-center"><p class="text-gray-400 whitespace-nowrap">PTS</p>
              <p class="whitespace-nowrap">+${escape(result.Results[0].points)}</p>
            </div></td>
        </tr>`;
  })}</tbody></table></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".redbull.svelte-awyij8{color:#3671c6}.astonmartin.svelte-awyij8{color:#358c75}.mercedes.svelte-awyij8{color:#6cd3bf}.ferrari.svelte-awyij8{color:#f91536}.mclaren.svelte-awyij8{color:#f58020}.alpinef1team.svelte-awyij8{color:#2293d1}.haas.svelte-awyij8{color:#b6babd}.alfaromeo.svelte-awyij8{color:#c92d4b}.alphatauri.svelte-awyij8{color:#5e8faa}.williams.svelte-awyij8{color:#37bedd}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { driver } = data;
  const { results } = data;
  const { constructor } = data;
  console.log("page.svelte: ", data);
  console.log("page.svelte DRIVER: ", driver);
  console.log("page.svelte RESULTS: ", results);
  console.log("page.svelte CON: ", constructor);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div><div class="${"bg-[#383846] text-5xl px-10 py-5 text-[#3671C6] " + escape(constructor.name.toLowerCase().replace(/\s/g, ""), true) + " svelte-awyij8"}"><div class="flex gap-2"><h1 class="">${escape(driver.givenName)}</h1>
      <h1 class="tracking-wider font-extralight">${escape(driver.familyName)}</h1></div></div>
  <div class="grid grid-cols-1 bg-[#333544] lg:grid-cols-2"><div class="flex flex-col bg-[#2C2D3C] mx-5 sm:mr-5 sm:ml-0"><img class="max-h-[30em] object-contain" src="${"/img/" + escape(driver.familyName, true) + ".webp"}"${add_attribute("alt", driver.familyName, 0)}>
      <div class="px-10 py-3 flex gap-2 text-2xl uppercase items-center justify-between border-b-2 border-[#333544]"><h2 class="text-5xl font-black">${escape(driver.code)}</h2>
        <div class=""><p class="text-5xl font-black">${escape(driver.permanentNumber)}</p></div></div>
      <div class="flex px-10 py-5 justify-between"><div class="flex flex-col text-2xl"><p>Team</p>
          <p>Nationality</p>
          <p>Birthday</p></div>
        <div class="flex flex-col text-2xl uppercase items-end"><p>${escape(constructor.name)}</p>
          <p>${escape(driver.nationality)}</p>
          <p>${escape(driver.dateOfBirth)}</p></div></div></div>
    <div class="px-5 py-3 h-full">${validate_component(DriverResults, "DriverResults").$$render($$result, { results }, {}, {})}</div></div>
</div>`;
});
export {
  Page as default
};
