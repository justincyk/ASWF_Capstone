export class UserScore {
  id: number | undefined;
  wins: number = 0;
  loses: number = 0;
  // table that will have the game history and gameId will be the id of the game
  gameId: number = 0;

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.wins) this.wins = initializer.wins;
    if (initializer.loses) this.loses = initializer.loses;
    if (initializer.gameId) this.gameId = initializer.gameId;
  }
}
