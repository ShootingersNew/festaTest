export default class EventModel {
  id: number;
  type: "add" | "delete" | "load";
  date: Date;
  file: string;
  target: "Container 1";
  constructor(obj: Partial<EventModel>) {
    return Object.assign(this, obj);
  }
}
