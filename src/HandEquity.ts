
export class HandEquity {
   protected possibleHandsCount: number;
   protected bestHandCount: number;
   protected tieHandCount: number;

   public constructor () {
      this.possibleHandsCount = 0;
      this.bestHandCount = 0;
      this.tieHandCount = 0;
   }

   public addPossibility(isBestHand: boolean, isTie: boolean): void {
      this.possibleHandsCount += 1;
      if (isBestHand) {
         this.bestHandCount += 1;
      } else if (isTie) {
         this.tieHandCount += 1;
      }
   }

   public getEquity(): number {
      if (this.possibleHandsCount === 0) {
         return 0;
      }
      return Math.round(this.bestHandCount * 100.0 / this.possibleHandsCount);
   }

   public getTiePercentage(): number {
      if (this.possibleHandsCount === 0) {
         return 0;
      }
      return Math.round(this.tieHandCount * 100.0 / this.possibleHandsCount);
   }

   public toString(): string {
      let s: string = `${this.getEquity()}%`;
      const tie: number = this.getTiePercentage();
      if (tie > 0) {
         s += ` (Tie: ${tie}%)`;
      }
      return s;
   }
}
