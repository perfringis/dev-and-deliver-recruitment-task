import { Column, PrimaryColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryColumn({ name: 'id', type: 'varchar' })
  private id: string;

  @Column({ name: 'created_at', type: 'varchar' })
  private createdAt: string;

  @Column({ name: 'edited_at', type: 'varchar' })
  private editedAt: string;

  getId(): string {
    return this.id;
  }
}
