export type Location = "indoor" | "outdoor" | "both";

export type ProtoPlant = {
  photo?: string;
  name: string;
  location: Location;
  height: string;
  lightness: string;
  humidity: string;
  difficulty: string;
  petFriendly: boolean;
};

export type PlantInTheList = {
  photo: string;
  name: string;
  location: Location;
  id: string;
};
export type hasId = {
  id: string;
};
export type Plant = hasId & ProtoPlant;

export type PlantBackResponse = {
  results: PlantInTheList[];
};
