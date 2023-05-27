export class ErgastAPI {
  constructor() {
    this.baseURL = 'https://ergast.com/api/f1';
    this.previous_year = '';
    this.race_id = '';
  }

  async getNextRace() {
    const response = await fetch(`${this.baseURL}/current/next.json`);

    if (response.ok) {
      const data = await response.json();
      const nextRace = data.MRData.RaceTable.Races[0];
      console.log("NEXT race: ", nextRace);
      const currentYear = new Date().getFullYear();
      this.previous_year = currentYear - 1;
      this.race_id = nextRace.Circuit.circuitId;
      return nextRace;
    } else {
      return null;
    }
  }

  async getPreviousYearRaceResults() {
    try {
      const response = await fetch(`${this.baseURL}/${this.previous_year}.json`);
      if (response.ok) {
        const data = await response.json();
        const races = data.MRData.RaceTable.Races;
        console.log("Previous year's races:", races);

        const race = races.find(race => race.Circuit.circuitId === this.race_id);
        if (race) {
          const round = race.round;
          console.log("Previous year's round:", round);
  
          const resultsResponse = await fetch(`${this.baseURL}/${this.previous_year}/${round}/results.json`);
          if (resultsResponse.ok) {
            const resultsData = await resultsResponse.json();
            const raceResults = resultsData.MRData.RaceTable.Races[0].Results;
            console.log("Previous year's race results:", raceResults);
            console.log("Previous winner: ", raceResults[0].Driver.familyName);
            return raceResults;
          }
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
    return null;
  }

  async getDrivers(){
    const response = await fetch(`${this.baseURL}/current/driverStandings.json`);

    if(response.ok){
      const data = await response.json();
      const drivers = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      // console.log(drivers);
      return drivers;
    }
    else{
      return null;
    }
  }

  async getConstructors(){
    const response = await fetch(`${this.baseURL}/current/constructorStandings.json`);

    if(response.ok){
      const data = await response.json();
      const cons = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
      return cons;
    }
    else{
      return null;
    }
  }
  
}
  