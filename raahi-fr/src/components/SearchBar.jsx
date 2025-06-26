import React, { useState, useEffect } from "react";
import { Country, State } from "country-state-city";

export default function SearchBar() {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);

    // Load all countries on mount
    useEffect(() => {
        const allCountries = Country.getAllCountries();
        setCountries(allCountries);
    }, []);

    // Load states when a country is selected
    useEffect(() => {
        if (selectedCountry) {
            const countryStates = State.getStatesOfCountry(selectedCountry);
            setStates(countryStates);
            setSelectedState(""); // reset state on country change
        }
    }, [selectedCountry]);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            country: selectedCountry,
            state: selectedState
        });
    };





    return (
        <form onSubmit={handleSubmit}>
            <div className="max-w-[700px] flex flex-wrap items-end bg-white/30 backdrop-blur-sm border p-4 rounded shadow space-x-7">

                {/* Country Dropdown */}
                <div className="min-w-[200px]">
                    <label htmlFor="country" className="block mb-2 font-medium">
                        Select Country:
                    </label>
                    <select
                        id="country"
                        name="country"
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full"
                    >
                        <option value="">-- Select Country --</option>
                        {countries.map((country) => (
                            <option key={country.isoCode} value={country.isoCode}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* State Dropdown */}
                <div className="min-w-[200px]">
                    <label htmlFor="state" className="block mb-2 font-medium">
                        Select State:
                    </label>
                    <select
                        id="state"
                        name="state"
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full"
                        disabled={!selectedCountry}
                    >
                        <option value="">-- Select State --</option>
                        {states.map((state) => (
                            <option key={state.isoCode} value={state.isoCode}>
                                {state.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Button */}
                <div className="mt-6">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded shadow transition-all duration-200">
                        Search
                    </button>
                </div>

            </div>

        </form>
    );
}
