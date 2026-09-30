export interface GoogleReview {
  relativePublishTimeDescription: string;
  rating: number;
  text?: { text: string; languageCode: string };
  originalText?: { text: string; languageCode: string };
  authorAttribution: {
    displayName: string;
    uri: string;
    photoUri: string;
  };
  publishTime: string;
}

export interface PlaceData {
  rating: number;
  userRatingCount: number;
  reviews?: GoogleReview[];
}

const FALLBACK: PlaceData = { rating: 4.9, userRatingCount: 1690 };

export async function fetchPlaceData(): Promise<PlaceData> {
  const key     = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return FALLBACK;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?languageCode=th`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": "reviews,rating,userRatingCount",
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return FALLBACK;
    const data = await res.json();
    return {
      rating:          data.rating          ?? FALLBACK.rating,
      userRatingCount: data.userRatingCount  ?? FALLBACK.userRatingCount,
      reviews:         data.reviews          ?? [],
    };
  } catch {
    return FALLBACK;
  }
}
