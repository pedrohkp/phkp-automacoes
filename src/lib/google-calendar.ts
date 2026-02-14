export async function getFreeSlots(date: string) {
    // TODO: Integrate with real Google Calendar API
    // Mock implementation
    console.log(`Fetching slots for ${date}`)
    return [
        "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"
    ]
}

export async function createEvent(data: any) {
    // TODO: Integrate with real Google Calendar API
    // Mock implementation
    console.log("Creating event", data)
    return { id: "mock-event-id", link: "https://calendar.google.com/mock-link" }
}
