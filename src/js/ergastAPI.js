export class ErgastAPI {
    constructor() {
        this.baseURL = "http://ergast.com/api/f1";
        this.previous_year = "";
        this.race_id = "";
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
            const response = await fetch(
                `${this.baseURL}/${this.previous_year}.json`
            );
            if (response.ok) {
                const data = await response.json();
                const races = data.MRData.RaceTable.Races;

                const race = races.find(
                    (race) => race.Circuit.circuitId === this.race_id
                );
                if (race) {
                    const round = race.round;

                    const resultsResponse = await fetch(
                        `${this.baseURL}/${this.previous_year}/${round}/results.json`
                    );
                    if (resultsResponse.ok) {
                        const resultsData = await resultsResponse.json();
                        const raceResults =
                            resultsData.MRData.RaceTable.Races[0].Results;
                        return raceResults;
                    }
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
        return null;
    }

    async getDrivers() {
        const response = await fetch(
            `${this.baseURL}/current/driverStandings.json`
        );

        if (response.ok) {
            const data = await response.json();
            const drivers =
                data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            return drivers;
        } else {
            return null;
        }
    }

    async getConstructors() {
        const response = await fetch(
            `${this.baseURL}/current/constructorStandings.json`
        );

        if (response.ok) {
            const data = await response.json();
            const cons =
                data.MRData.StandingsTable.StandingsLists[0]
                    .ConstructorStandings;
            return cons;
        } else {
            return null;
        }
    }
    async fetchDriver(driverId) {
        const resultDriver = await fetch(
            `${this.baseURL}/drivers/${driverId}.json`
        );

        if (resultDriver.ok) {
            const driverData = await resultDriver.json();
            const driver = driverData.MRData.DriverTable.Drivers[0];
            return driver;
        } else {
            return null;
        }
    }
    async fetchResults(driverId) {
        const resultResults = await fetch(
            `${this.baseURL}/current/drivers/${driverId}/results.json`
        );
        if (resultResults.ok) {
            const resultData = await resultResults.json();
            const results = resultData.MRData.RaceTable.Races;
            return results;
        } else {
            return null;
        }
    }
    async fetchConstructor(driverId) {
        const constructorResults = await fetch(
            `${this.baseURL}/current/drivers/${driverId}/constructors.json`
        );
        if (constructorResults.ok) {
            const constructorData = await constructorResults.json();
            const constructor =
                constructorData.MRData.ConstructorTable.Constructors[0];
            return constructor;
        } else {
            return null;
        }
    }
    async getNextThreeRaces() {
        const response = await fetch(`${this.baseURL}/current/next.json`);

        if (response.ok) {
            const data = await response.json();
            const nextRace = data.MRData.RaceTable.Races[0];
            const nextRaceRound = parseInt(nextRace.round, 10);
            const currentYear = nextRace.season;
            let nextThreeRaces = [];

            for (let i = 1; i < 4; i++) {
                let nextRound = nextRaceRound + i;
                const nextRaceResponse = await fetch(
                    `${this.baseURL}/${currentYear}/${nextRound}.json`
                );
                if (nextRaceResponse.ok) {
                    const nextRaceData = await nextRaceResponse.json();
                    const subsequentRace =
                        nextRaceData.MRData.RaceTable.Races[0];
                    console.log(subsequentRace);
                    nextThreeRaces.push(subsequentRace);
                }
            }
            return nextThreeRaces;
        } else {
            return null;
        }
    }
}
