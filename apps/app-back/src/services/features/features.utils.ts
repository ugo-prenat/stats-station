import { Types } from 'mongoose';
import {
  IAPIFeature,
  IFeature,
  IFeatureConf,
  IFrontFeature,
  IRawFeature
} from '@alfred/models';

export const makeRawFeature = (
  { type, name, defaultStatus, availability }: IFeatureConf,
  botId: Types.ObjectId
): IRawFeature => ({
  botId,
  type,
  name,
  status: defaultStatus,
  text: `Alfred ${name} feature`,
  availability
});

export const makeAPIFeatureToFeature = (feature: IAPIFeature): IFeature => {
  const { _id, ...rest } = feature.toObject();
  return { id: _id.toString(), ...rest };
};

export const makeAPIFeaturesToFeatures = (
  features: IAPIFeature[]
): IFeature[] => features.map(makeAPIFeatureToFeature);

export const makeAPIFeatureToFrontFeature = (
  feature: IAPIFeature
): IFrontFeature => {
  const { name, status, text, type, cron, availability } = feature.toObject();
  return { name, status, text, type, cron, availability };
};
