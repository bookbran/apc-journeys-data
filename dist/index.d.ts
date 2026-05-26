/**
 * apc-journeys-data
 * ------------------
 * Canonical APC coaching journey content. Imported by:
 *   - APC Journeys / Inquiry Call Guide       (https://github.com/bookbran/APC-Journeys)
 *   - APC Intake Builder                       (https://github.com/bookbran/APC-Intake-Builder)
 *   - apc-crm milestone library (planned)      (https://github.com/bookbran/apc-crm)
 *
 * Update once here, propagate via `npm update apc-journeys-data` in each consumer.
 */
export type JourneyKey = 'explorer' | 'pivot' | 'advancing';
export interface JourneySession {
    /** 1-indexed session number within the full journey. */
    id: number;
    title: string;
    activities: string[];
    /** Between-sessions homework. `null` indicates the final session. */
    homework?: string | null;
}
export interface JourneyPhase {
    /** 1-indexed phase number within the journey. */
    id: number;
    name: string;
    /** Short subtitle, e.g. "Sessions 1–2" or "Confirm direction". */
    subtitle: string;
    /** Brand hex color (#16163f navy, #54558e purple, #2DA3CB blue, #f26727 orange). */
    color: string;
    sessions: JourneySession[];
}
export interface Journey {
    key: JourneyKey;
    /** Display name, e.g. "Career Explorer". */
    name: string;
    /** Short serif-italic line under the name. */
    tagline: string;
    /** Paragraph framing for intake coaches and clients. */
    description: string;
    /** Bullet list of "best fit when" signals. */
    bestFor: string[];
    /** Bullet list of "probably not the fit when" signals. */
    notIdealWhen: string[];
    /** Comma-separated list of recommended coaches for this journey. */
    recommendedCoaches: string;
    /** Display string, e.g. "~7 sessions · 3 phases". */
    sessionCount: string;
    /** Hex color for the journey badge. */
    badgeColor: string;
    phases: JourneyPhase[];
}
export declare const JOURNEYS: Journey[];
export declare function getJourneyByKey(key: string | null | undefined): Journey | undefined;
export declare function isJourneyKey(value: string): value is JourneyKey;
