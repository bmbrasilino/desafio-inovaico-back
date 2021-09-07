import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1630993727855 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'users',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              default: 'uuid_generate_v4()',
            },
            {
              name: 'name',
              type: 'varchar',
            },
            {
              name: 'password',
              type: 'varchar'
            },
            {
              name: 'email',
              type: 'varchar'
            },
            {
              name: 'isAdmin',
              type: 'boolean',
              default: false
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users');
    }

}
