export default class ImageModel {
  id: number;
  src: string;
  position: {
    x: string;
    y: string;
  };
  constructor(obj: Partial<ImageModel>) {
    if (obj) {
      return Object.assign(this, obj);
    }
  }
}
