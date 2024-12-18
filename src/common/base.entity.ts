import { Column, PrimaryColumn } from 'typeorm';
import * as dayjs from 'dayjs';

export class BaseEntity {
  @PrimaryColumn({ name: 'id', type: 'varchar' })
  public id: string;

  @Column({ name: 'url', type: 'varchar' })
  protected url: string;

  @Column({ name: 'created_at', type: 'varchar' })
  protected createdAt: string;

  @Column({ name: 'edited_at', type: 'varchar' })
  protected editedAt: string;

  @Column({
    name: 'cached_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  protected cachedAt: Date;

  public getId(): string {
    return this.id;
  }

  public setId(value: string) {
    this.id = value;
  }

  public getUrl(): string {
    return this.url;
  }

  public setUrl(value: string) {
    this.url = value;
  }

  public getCreatedAt(): string {
    return this.createdAt;
  }

  public setCreatedAt(value: string) {
    this.createdAt = value;
  }

  public getEditedAt(): string {
    return this.editedAt;
  }

  public setEditedAt(value: string) {
    this.editedAt = value;
  }

  public getCachedAt(): Date {
    return this.cachedAt;
  }

  public setCachedAt(value: Date) {
    this.cachedAt = value;
  }

  public expired(): boolean {
    const current = dayjs();
    const expired = dayjs(this.cachedAt).add(24, 'hours');

    return current.isAfter(expired);
  }
}
