import { Column, PrimaryColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryColumn({ name: 'id', type: 'varchar' })
  public id: string;

  @Column({ name: 'url', type: 'varchar' })
  private url: string;

  @Column({ name: 'created_at', type: 'varchar' })
  private createdAt: string;

  @Column({ name: 'edited_at', type: 'varchar' })
  private editedAt: string;

  public getId(): string {
    return this.id;
  }

  public getUrl(): string {
    return this.url;
  }

  public getCreatedAt(): string {
    return this.createdAt;
  }

  public getEditedAt(): string {
    return this.editedAt;
  }
}
