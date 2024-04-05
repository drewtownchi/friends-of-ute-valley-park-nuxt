import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

export interface VolunteerEvent extends MarkdownParsedContent {
    date: Date;
    time: string;
    link: string;
    meetingLocation: {
        name: string;
        notes: string;
        directionsLink: string;
        predefinedLocation: number;
        alternativeLocation: string;
        alternativeLocationDirectionsLink: string;
    };
}

export interface MeetingLocation extends MarkdownParsedContent {
    id: number;
    name: string;
    notes: string;
    directionsLink: string;
}