import pako from "pako";
import { OriginalNote, WarningInflatedNote } from "../../structures/toolbox";
import { getRedditClient } from "../reddit";

// FIXME:
// FIXME:
// FIXME:
// FIXME:
// FIXME:
// I am not proud of anything in this file, but I wanted a working version up
// This will be cleaned up to be infinitely more readable and possible to follow

export type ToolboxUserNotesConstants = {
  users: string[];
  warnings: string[];
};

type UserNotesPageContentGeneric = {
  ver: number;
  constants: ToolboxUserNotesConstants;
  warnings: string[];
};

export type UserNotesPageContentWithBlob = UserNotesPageContentGeneric & {
  blob: string;
};

export type UserNotesPageContent = UserNotesPageContentGeneric & {
  notes: UserNotesObject;
};

export type UserNotes = {
  ns: OriginalNote[];
};

export type UserNotesObject = {
  [key: string]: UserNotes;
};

type InflatedUserNotes = UserNotesPageContent & {
  mods: string[];
  warnings: string[];
  notes: any;
};

const [toolboxCompatibleVersion, toolboxNotesWikiPage] = [6, "usernotes"];

// Lifted from https://github.com/toolbox-team/reddit-moderator-toolbox/blob/53291c9319eac4a78f8b511e200e69d89309330e/extension/data/tbhelpers.js#L728
const inflateBlob = (data: string) => {
  const blob = atob(data);
  const inflater = new pako.Inflate({ to: "string" });
  inflater.push(blob);

  return JSON.parse(inflater.result.toString()) as UserNotesObject;
};

const inflateData = (data: UserNotesPageContent) => {
  const { users, warnings } = data.constants;

  const newNotes: any = {};

  Object.keys(data.notes).forEach((key) => {
    const userNote = data.notes[key];
    const newNs = new Array<WarningInflatedNote>();

    userNote.ns.forEach((obj) => {
      newNs.push({
        ...obj,
        m: users[obj.m],
        w: warnings[obj.w],
      });
    });

    newNotes[key] = {
      ns: newNs,
    };
  });

  return {
    ...data,
    mods: users,
    warnings,
    notes: newNotes,
  } as InflatedUserNotes;
};

export const getAllUserNotes = async () => {
  try {
    const reddit = getRedditClient();
    // @ts-expect-error
    const page = await reddit
      .getSubreddit("PublicFreakout")
      .getWikiPage(toolboxNotesWikiPage)
      .fetch();

    const userNotesPageJson: string = page.content_md;
    const userNotesPageWithBlob = JSON.parse(
      userNotesPageJson
    ) as UserNotesPageContentWithBlob;

    if (userNotesPageWithBlob.ver !== toolboxCompatibleVersion)
      throw new Error(
        `Unsupported toolbox usernotes version (${userNotesPageWithBlob.ver})`
      );

    const inflatedBlob = inflateBlob(userNotesPageWithBlob.blob);

    const userNotesPageInflated = {
      ...userNotesPageWithBlob,
      notes: inflatedBlob,
    };

    const userNotesPage = ({
      ...userNotesPageInflated,
      ...inflateData(userNotesPageInflated),
    } as unknown) as UserNotesPageContent;

    return userNotesPage;
  } catch (err) {
    throw err;
  }
};
