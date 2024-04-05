import type { VolunteerEvent, MeetingLocation } from '~/types'

export function meetingLocationParser(volunteerEventFrontmatter: VolunteerEvent, meetingLocations: MeetingLocation[]) {
    if (volunteerEventFrontmatter.meetingLocation.predefinedLocation !== -1) {
        const location = meetingLocations.find((loc) => loc.id === volunteerEventFrontmatter.meetingLocation.predefinedLocation);
        if (!location) {
            throw new Error(`Meeting location with id ${volunteerEventFrontmatter.meetingLocation.predefinedLocation} not found`);
        }
        return {
            name: location.name,
            directionsLink: location.directionsLink,
        };
    }
    return {
        name: volunteerEventFrontmatter.meetingLocation.alternativeLocation,
        directionsLink: volunteerEventFrontmatter.meetingLocation.alternativeLocationDirectionsLink,
    };
}