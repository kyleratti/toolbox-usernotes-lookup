type UnixTimestamp = number;

export type OriginalNote = {
  /**
   * The note message
   * @example "Submits spam late at night"
   */
  n: string;
  /**
   * The UNIX timestamp of when this note was added
   * @example 1430263601
   */
  t: UnixTimestamp;
  /**
   * Unknown - moderator #?
   */
  m: number;
  /**
   * Unknown - links?
   */
  l: string;
  /**
   * Unknown - warning #?
   */
  w: number;
};

export type WarningInflatedNote = {
  /**
   * The note message
   * @example "Submits spam late at night"
   */
  n: string;
  /**
   * The UNIX timestamp of when this note was added
   * @example 1430263601
   */
  t: UnixTimestamp;
  /**
   * The name of the moderator, or the number that corresponds with the name
   * @example "a_reddit_moderator"
   * @example 2
   */
  m: string | number;
  /**
   * Unknown - links?
   */
  l: string;
  /**
   * The warning received
   * @example "Ban"
   */
  w: string;
};

export type Note = {
  /**
   * The note message
   * @example "Submits spam late at night"
   */
  n: string;
  /**
   * The UNIX timestamp of when this note was added
   * @example 1430263601
   */
  t: UnixTimestamp;
  /**
   * The name of the moderator
   * @example "a_reddit_moderator"
   */
  m: string;
  /**
   * Unknown - links?
   */
  l: string;
  /**
   * The warning received
   * @example "Ban"
   */
  w: string;
};
