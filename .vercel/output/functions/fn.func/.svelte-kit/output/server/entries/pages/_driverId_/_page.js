const load = async ({ fetch, params }) => {
  const fetchDriver = async (driverId) => {
    const resultDriver = await fetch(`http://ergast.com/api/f1/drivers/${driverId}.json`);
    const driverData = await resultDriver.json();
    const driver = driverData.MRData.DriverTable.Drivers[0];
    return driver;
  };
  const fetchResults = async (driverId) => {
    const resultResults = await fetch(`http://ergast.com/api/f1/current/drivers/${driverId}/results.json`);
    const resultData = await resultResults.json();
    const results = resultData.MRData.RaceTable.Races;
    return results;
  };
  const fetchConstructor = async (driverId) => {
    const constructorResults = await fetch(`http://ergast.com/api/f1/current/drivers/${driverId}/constructors.json`);
    const constructorData = await constructorResults.json();
    const constructor = constructorData.MRData.ConstructorTable.Constructors[0];
    return constructor;
  };
  return {
    driver: fetchDriver(params.driverId),
    results: fetchResults(params.driverId),
    constructor: fetchConstructor(params.driverId)
  };
};
export {
  load
};
