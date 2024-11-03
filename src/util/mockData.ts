export interface ElectricVehicleData {
  "VIN (1-10)": string;
  County: string;
  City: string;
  State: string;
  "Postal Code": number;
  "Model Year": number;
  Make: string;
  Model: string;
  "Electric Vehicle Type": string;
  "Clean Alternative Fuel Vehicle (CAFV) Eligibility": string;
  "Electric Range": number;
  "Base MSRP": number;
  "Legislative District": number;
  "DOL Vehicle ID": number;
  "Vehicle Location": string;
  "Electric Utility": string;
  "2020 Census Tract": number;
}

export const electricCarData: ElectricVehicleData[] = [
  {
    "VIN (1-10)": "5YJYGDEE1L",
    County: "King",
    City: "Seattle",
    State: "WA",
    "Postal Code": 98122,
    "Model Year": 2020,
    Make: "TESLA",
    Model: "MODEL Y",
    "Electric Vehicle Type": "Battery Electric Vehicle (BEV)",
    "Clean Alternative Fuel Vehicle (CAFV) Eligibility":
      "Clean Alternative Fuel Vehicle Eligible",
    "Electric Range": 291,
    "Base MSRP": 0,
    "Legislative District": 37,
    "DOL Vehicle ID": 125701579,
    "Vehicle Location": "POINT (-122.30839 47.610365)",
    "Electric Utility": "CITY OF SEATTLE - (WA)|CITY OF TACOMA - (WA)",
    "2020 Census Tract": 53033007800,
  },
  {
    "VIN (1-10)": "7SAYGDEE9P",
    County: "Snohomish",
    City: "Bothell",
    State: "WA",
    "Postal Code": 98021,
    "Model Year": 2023,
    Make: "TESLA",
    Model: "MODEL Y",
    "Electric Vehicle Type": "Battery Electric Vehicle (BEV)",
    "Clean Alternative Fuel Vehicle (CAFV) Eligibility":
      "Eligibility unknown as battery range has not been researched",
    "Electric Range": 0,
    "Base MSRP": 0,
    "Legislative District": 1,
    "DOL Vehicle ID": 244285107,
    "Vehicle Location": "POINT (-122.179458 47.802589)",
    "Electric Utility": "PUGET SOUND ENERGY INC",
    "2020 Census Tract": 53061051938,
  },
  {
    "VIN (1-10)": "5YJSA1E4XK",
    County: "King",
    City: "Seattle",
    State: "WA",
    "Postal Code": 98109,
    "Model Year": 2019,
    Make: "TESLA",
    Model: "MODEL S",
    "Electric Vehicle Type": "Battery Electric Vehicle (BEV)",
    "Clean Alternative Fuel Vehicle (CAFV) Eligibility":
      "Clean Alternative Fuel Vehicle Eligible",
    "Electric Range": 270,
    "Base MSRP": 0,
    "Legislative District": 36,
    "DOL Vehicle ID": 156773144,
    "Vehicle Location": "POINT (-122.34848 47.632405)",
    "Electric Utility": "CITY OF SEATTLE - (WA)|CITY OF TACOMA - (WA)",
    "2020 Census Tract": 53033006800,
  },
  {
    "VIN (1-10)": "5YJSA1E27G",
    County: "King",
    City: "Issaquah",
    State: "WA",
    "Postal Code": 98027,
    "Model Year": 2016,
    Make: "TESLA",
    Model: "MODEL S",
    "Electric Vehicle Type": "Battery Electric Vehicle (BEV)",
    "Clean Alternative Fuel Vehicle (CAFV) Eligibility":
      "Clean Alternative Fuel Vehicle Eligible",
    "Electric Range": 210,
    "Base MSRP": 0,
    "Legislative District": 5,
    "DOL Vehicle ID": 165103011,
    "Vehicle Location": "POINT (-122.03646 47.534065)",
    "Electric Utility": "PUGET SOUND ENERGY INC||CITY OF TACOMA - (WA)",
    "2020 Census Tract": 53033032104,
  },
  {
    "VIN (1-10)": "5YJYGDEE5M",
    County: "Kitsap",
    City: "Suquamish",
    State: "WA",
    "Postal Code": 98392,
    "Model Year": 2021,
    Make: "TESLA",
    Model: "MODEL Y",
    "Electric Vehicle Type": "Battery Electric Vehicle (BEV)",
    "Clean Alternative Fuel Vehicle (CAFV) Eligibility":
      "Eligibility unknown as battery range has not been researched",
    "Electric Range": 0,
    "Base MSRP": 0,
    "Legislative District": 23,
    "DOL Vehicle ID": 205138552,
    "Vehicle Location": "POINT (-122.55717 47.733415)",
    "Electric Utility": "PUGET SOUND ENERGY INC",
    "2020 Census Tract": 53035940100,
  },
  {
    "VIN (1-10)": "3FA6P0SU8H",
    County: "Thurston",
    City: "Yelm",
    State: "WA",
    "Postal Code": 98597,
    "Model Year": 2017,
    Make: "FORD",
    Model: "FUSION",
    "Electric Vehicle Type": "Plug-in Hybrid Electric Vehicle (PHEV)",
    "Clean Alternative Fuel Vehicle (CAFV) Eligibility":
      "Not eligible due to low battery range",
    "Electric Range": 21,
    "Base MSRP": 0,
    "Legislative District": 2,
    "DOL Vehicle ID": 122057736,
    "Vehicle Location": "POINT (-122.61023 46.94126)",
    "Electric Utility": "PUGET SOUND ENERGY INC",
    "2020 Census Tract": 53067012532,
  },
  {
    "VIN (1-10)": "1N4AZ0CP2D",
    County: "Yakima",
    City: "Yakima",
    State: "WA",
    "Postal Code": 98903,
    "Model Year": 2013,
    Make: "NISSAN",
    Model: "LEAF",
    "Electric Vehicle Type": "Battery Electric Vehicle (BEV)",
    "Clean Alternative Fuel Vehicle (CAFV) Eligibility":
      "Clean Alternative Fuel Vehicle Eligible",
    "Electric Range": 75,
    "Base MSRP": 0,
    "Legislative District": 14,
    "DOL Vehicle ID": 150126840,
    "Vehicle Location": "POINT (-120.477805 46.553505)",
    "Electric Utility": "PACIFICORP",
    "2020 Census Tract": 53077003003,
  },
  {
    "VIN (1-10)": "KNAGV4LD9J",
    County: "Snohomish",
    City: "Bothell",
    State: "WA",
    "Postal Code": 98012,
    "Model Year": 2018,
    Make: "KIA",
    Model: "OPTIMA",
    "Electric Vehicle Type": "Plug-in Hybrid Electric Vehicle (PHEV)",
    "Clean Alternative Fuel Vehicle (CAFV) Eligibility":
      "Not eligible due to low battery range",
    "Electric Range": 29,
    "Base MSRP": 0,
    "Legislative District": 1,
    "DOL Vehicle ID": 290605598,
    "Vehicle Location": "POINT (-122.1873 47.820245)",
    "Electric Utility": "PUGET SOUND ENERGY INC",
    "2020 Census Tract": 53061052107,
  },
];
