export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const isAnalyticsEnabled =
  process.env.NODE_ENV === "production" && Boolean(gaMeasurementId);
