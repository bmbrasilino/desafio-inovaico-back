import { v4 as uuidV4 } from "uuid";
import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePatients1630708343403 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "patients",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
              default: 'uuid_generate_v4()',
            },
            {
              name: "name",
              type: "varchar",
            },
            {
              name: "phone",
              type: "varchar",
            },
            {
              name: "email",
              type: "varchar",
            },
            {
              name: "birthday",
              type: "varchar",
            },
            {
              name: "gender",
              type: "varchar",
            },
            {
              name: "height",
              type: "varchar",
            },
            {
              name: "weight",
              type: "varchar",
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()"
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("patients");
    }

}
