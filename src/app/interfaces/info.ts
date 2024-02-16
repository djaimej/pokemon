import { Result } from "./result";

export interface Info {
  abilities: Ability[];
  base_experience: number;
  height: number;
  id: number;
  name: string;
  sprites: {
    front_default: string;
    front_shiny: string;
    other: {
      dream_world: {
        front_default: string;
      }
      home: {
        front_default: string;
      }
    }
  };
  weight: number;
}

export interface Ability {
  ability: Result;
  is_hidden: boolean;
  slot: number;
}
