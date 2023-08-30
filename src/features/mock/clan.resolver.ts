import { Clan } from './clan.enum';

export function resolveClan(clan: Clan): string {
  switch (clan) {
    case Clan.CLAN_1:
      return 'Yamatai';
    case Clan.CLAN_2:
      return "Bushido's Reach";
    case Clan.CLAN_3:
      return 'Tempest Shore';
    case Clan.CLAN_4:
      return 'Clan 4';
    default:
      return 'Unknown';
  }
}
