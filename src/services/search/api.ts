import pako from "pako";
import { OriginalNote } from "../../structures/toolbox";
import { getRedditClient } from "../reddit";

// FIXME:
// FIXME:
// FIXME:
// FIXME:
// FIXME:
// I am not proud of anything in this file, but I wanted a working version up
// This will be cleaned up to be infinitely more readable and possible to follow

export type ApiToolboxUserNotesConstants = {
  users: string[];
  warnings: string[];
};

type ApiUserNotesPageContentGeneric = {
  ver: number;
  constants: ApiToolboxUserNotesConstants;
  warnings: string[];
};

export type ApiUserNotesPageContentWithBlob = ApiUserNotesPageContentGeneric & {
  blob: string;
};

export type ApiUserNotesPageContent = ApiUserNotesPageContentGeneric & {
  notes: ApiUserNotesObject;
};

export type ApiUserNotes = {
  ns: OriginalNote[];
};

export type ApiUserNotesObject = {
  [key: string]: ApiUserNotes;
};

type ApiInflatedUserNotes = ApiUserNotesPageContent & {
  mods: string[];
  warnings: string[];
  notes: any;
};

export type Note = {
  link: string;
  mod: string;
  sub: string;
  message: string;
  timestamp: number;
  warning: string;
};

export type NoteWithUsername = Note & {
  username: string;
};

export type UserNotes = {
  [username: string]: Note[];
};

const [toolboxCompatibleVersion, toolboxNotesWikiPage] = [6, "usernotes"];

// Lifted from https://github.com/toolbox-team/reddit-moderator-toolbox/blob/53291c9319eac4a78f8b511e200e69d89309330e/extension/data/tbhelpers.js#L728
const inflateBlob = (data: string) => {
  const blob = atob(data);
  const inflater = new pako.Inflate({ to: "string" });
  inflater.push(blob);

  return JSON.parse(inflater.result.toString()) as ApiUserNotesObject;
};

const inflateData = (subreddit: string, data: ApiUserNotesPageContent) => {
  const { users, warnings } = data.constants;

  const newNotes: UserNotes = {};

  Object.keys(data.notes).forEach((key) => {
    const userNote = data.notes[key];
    const newNs = new Array<Note>();

    userNote.ns.forEach((obj) => {
      newNs.push({
        link: obj.l,
        mod: users[obj.m],
        sub: subreddit,
        message: obj.n,
        timestamp: obj.t,
        warning: warnings[obj.w],
      });
    });

    newNotes[key] = newNs;
  });

  return newNotes;
};

export const getAllUserNotes = async (subreddit: string) => {
  try {
    const reddit = getRedditClient();
    // @ts-expect-error
    const page = await reddit
      .getSubreddit(subreddit)
      .getWikiPage(toolboxNotesWikiPage)
      .fetch();

    const userNotesPageJson: string = page.content_md;
    const userNotesPageWithBlob = JSON.parse(
      userNotesPageJson
    ) as ApiUserNotesPageContentWithBlob;

    if (userNotesPageWithBlob.ver !== toolboxCompatibleVersion)
      throw new Error(
        `Unsupported toolbox usernotes version (${userNotesPageWithBlob.ver})`
      );

    const inflatedBlob = inflateBlob(userNotesPageWithBlob.blob);

    const userNotesPageInflated = {
      ...userNotesPageWithBlob,
      notes: inflatedBlob,
    };

    return inflateData(subreddit, userNotesPageInflated);

    // const userNotesPage = ({
    //   ...userNotesPageInflated,
    //   ...inflateData(subreddit, userNotesPageInflated),
    // } as unknown) as ApiUserNotesPageContent;
    //
    // return userNotesPage;
  } catch (err) {
    throw err;
  }
};
