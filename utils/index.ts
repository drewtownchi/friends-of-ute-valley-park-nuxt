import type { VolunteerEvent, MeetingLocation } from '~/types'

export function meetingLocationParser(volunteerEvent: VolunteerEvent, meetingLocations: MeetingLocation[]) {
    if (volunteerEvent.meetingLocation.predefinedLocation !== -1) {
        const location = meetingLocations.find((loc) => loc.id === volunteerEvent.meetingLocation.predefinedLocation);
        if (!location) {
            throw new Error(`Meeting location with id ${volunteerEvent.meetingLocation.predefinedLocation} not found`);
        }
        return {
            name: location.name,
            directionsLink: location.directionsLink,
        };
    }
    return {
        name: volunteerEvent.meetingLocation.alternativeLocation,
        directionsLink: volunteerEvent.meetingLocation.alternativeLocationDirectionsLink,
    };
}