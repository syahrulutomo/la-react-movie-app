export class Event {
  constructor(id, title, date, venue, city, groupHost, host, isOnline, details, category, photos, attendees, comments) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.venue = venue;
    this.city = city;
    this.groupHost = groupHost;
    this.host = host;
    this.isOnline = isOnline;
    this.details = details;
    this.category = category;
    this.photos = photos;
    this.attendees = attendees;
    this.comments = comments;
    this.loading = false;
  }
}
