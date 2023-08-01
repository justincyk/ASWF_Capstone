export class User {
  id: number | undefined;
  name: string = "";
  nickname: string = "";
  password: string = "";
  created: Date = new Date();

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.name) this.name = initializer.name;
    if (initializer.description) this.nickname = initializer.description;
    if (initializer.created) this.created = new Date(initializer.created);
  }

  get isNew(): boolean {
    return this.id === undefined;
  }
}
