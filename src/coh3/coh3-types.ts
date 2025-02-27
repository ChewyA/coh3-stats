export type raceType = "german" | "american" | "dak" | "british";

export type leaderBoardType = "1v1" | "2v2" | "3v3" | "4v4";

export type raceID = 129494 | 137123 | 197345 | 198437 | 203852;

type RelicAPIResult = {
  code: number;
  message: string;
};

type RawPlayerProfile = {
  profile_id: number;
  name: string; // /steam/bulshit
  alias: string;
  personal_statgroup_id?: number;
  xp?: number;
  level: number;
  leaderboardregion_id?: number;
  country: string;
};

export type RawStatGroup = {
  id: number;
  name?: string; // empty
  type?: number;
  members: Array<RawPlayerProfile>;
};

export type RawLeaderboardStat = {
  statgroup_id: number;
  leaderboard_id: number;
  wins: number;
  losses: number;
  streak: number;
  disputes: number;
  drops: number;
  rank: number;
  ranktotal?: number;
  regionrank?: number;
  ranklevel: number;
  rating: number;
  regionranktotal?: number;
  lastmatchdate: number;
};

export interface RawLaddersObject extends LaddersDataObject {
  result?: RelicAPIResult;
}

export interface LaddersDataObject {
  leaderboardStats: Array<RawLeaderboardStat>;
  statGroups: Array<RawStatGroup>;
  rankTotal: number;
}

export interface LaddersDataArrayObject extends RawLeaderboardStat {
  change: number | string;
  members: Array<Record<string, any>>;
}

export interface COH3StatsPlayerInfoAPI {
  COH3PlayTime: null;
  RelicProfile: {
    leaderboardStats: Array<RawLeaderboardStat>;
    statGroups: Array<RawStatGroup>;
  };
  SteamProfile: Record<string, { steamid: string; profileurl: string; avatarmedium: string }>;
}

export type InternalStandings = Record<
  "german" | "american" | "dak" | "british",
  Record<"1v1" | "2v2" | "3v3" | "4v4", RawLeaderboardStat | null>
>;

export type PlayerCardDataType = {
  steamData: { steamid: string; profileurl: string; avatarmedium: string };
  COH3PlayTime: null;
  standings: InternalStandings;
  info: { country: string; level: number; name: string; xp: number | undefined };
};
