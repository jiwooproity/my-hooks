import { PickingInfo } from "deck.gl/typed";
import { useState } from "react";

// const FEATURE_COLLECTION = "FeatureCollection" as const;
const FEATURE = "Feature" as const;
const POLYGON = "Polygon" as const;
const MULTI_POLYGON = "MultiPolygon" as const;

interface FeaturesTypes {
  type: typeof FEATURE;
  properties: unknown;
  geometry: {
    type: typeof POLYGON | typeof MULTI_POLYGON;
    coordinates: number[][][];
  };
}

type ReturnPropTypes = [(e: PickingInfo) => void, () => void, FeaturesTypes[]];

class PolygonFormat {
  feature: FeaturesTypes | {};

  constructor(
    type: typeof POLYGON | typeof MULTI_POLYGON,
    coordinates: number[][]
  ) {
    this.feature = {
      type: FEATURE,
      properties: {},
      geometry: {
        type,
        coordinates: [coordinates],
      },
    };
  }

  reset() {
    this.feature = {};
  }
}

export const useCreatePolygon = (): ReturnPropTypes => {
  const [geojson, setGeojson] = useState<FeaturesTypes[]>([]);
  const [coords, setCoords] = useState<number[][]>([]);

  const addCoords = (e: PickingInfo) => {
    const getCoords = e.coordinate as number[];
    const originCoords = coords;
    setCoords([...originCoords, getCoords]);
  };

  const createPolygon = () => {
    const getPolygon = new PolygonFormat(POLYGON, coords);
    setGeojson([...geojson, getPolygon.feature as FeaturesTypes]);
    getPolygon.reset();
    setCoords([]);
  };

  return [addCoords, createPolygon, geojson];
};
