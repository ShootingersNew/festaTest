export default class EventModel {
  id: number;
  type: "added" | "deleted" | "loaded";
  date: Date;
  file: string;
  target: "Container 1";
  constructor(obj: Partial<EventModel>) {
    return Object.assign(this, obj);
  }
}
