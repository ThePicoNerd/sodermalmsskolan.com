import { parseHumanReadableDuration } from "../calendar/utils/humanReadable";

export default interface ScheduleChange {
  periodId: string;
  canceled: boolean;
  note?: string;
  newStart?: number;
  newEnd?: number;
}

export interface TimeChange {
  canceled: boolean;
  newStart?: number;
  newEnd?: number;
}

/**
 * Parse a time change literal, such as `12:30-`, `-9:30` or `6:00-6:30`.
 *
 * @param {string} literal The input literal.
 * @param {string} [canceledLiteral="C"] A custom "canceled" literal indicator.
 *
 * @returns {TimeChange} The time change.
 */
export const parseTimeChange = (literal: string, canceledLiteral = "C"): TimeChange => {
  if (literal === canceledLiteral) {
    return {
      canceled: true,
    };
  }

  const separatorIndex = literal.indexOf("-");

  const start = literal.substring(0, separatorIndex);
  const end = literal.substring(separatorIndex + 1);

  return {
    canceled: false,
    newStart: start === "" ? undefined : parseHumanReadableDuration(start),
    newEnd: end === "" ? undefined : parseHumanReadableDuration(end),
  };
};

/**
 * Parse a Discord `Message` to a `ScheduleChange`.
 *
 * @param {string} content The message content to be parsed.
 *
 * @returns {ScheduleChange} The schedule change.
 */
export const parseMessageContent = (content: string): ScheduleChange => {
  const segments = content.split(" ");

  const periodId = segments.shift();
  const timeChange = parseTimeChange(segments.shift());
  const note = segments.length > 0 ? segments.join(" ") : undefined;

  return {
    periodId,
    note,
    ...timeChange,
  };
};
