import { sql } from "drizzle-orm";
import { db } from "../client";
import { artisanProfiles, users } from "../schema";

export interface NearbyArtisanQueryOptions {
  tradeCategory: string;
  customerLat: number;
  customerLng: number;
  radiusMeters: number; // e.g. 5000 for 5km, 10000 for 10km
  limit?: number;
}

/**
 * Executes a sub-millisecond PostGIS ST_DWithin query to find online, KYC-verified
 * artisans matching the requested skill category within radiusMeters of customer location.
 */
export async function findNearbyOnlineArtisans({
  tradeCategory,
  customerLat,
  customerLng,
  radiusMeters,
  limit = 20,
}: NearbyArtisanQueryOptions) {
  // Using PostGIS ST_DWithin with geography casting for true spherical distance in meters
  const query = sql`
    SELECT 
      ap.id as "artisanId",
      ap.user_id as "userId",
      u.name,
      u.phone,
      u.avatar_url as "avatarUrl",
      ap.trade_category as "tradeCategory",
      ap.rating_avg as "ratingAvg",
      ap.rating_count as "ratingCount",
      ap.diagnostic_rate as "diagnosticRate",
      ap.hourly_rate as "hourlyRate",
      ST_Distance(
        ap.current_location::geography,
        ST_SetSRID(ST_MakePoint(${customerLng}, ${customerLat}), 4326)::geography
      ) as "distanceMeters"
    FROM ${artisanProfiles} ap
    JOIN ${users} u ON ap.user_id = u.id
    WHERE ap.is_online = true
      AND ap.kyc_status = 'verified'
      AND ap.trade_category = ${tradeCategory}
      AND ST_DWithin(
        ap.current_location::geography,
        ST_SetSRID(ST_MakePoint(${customerLng}, ${customerLat}), 4326)::geography,
        ${radiusMeters}
      )
    ORDER BY "distanceMeters" ASC
    LIMIT ${limit};
  `;

  return await db.execute(query);
}
