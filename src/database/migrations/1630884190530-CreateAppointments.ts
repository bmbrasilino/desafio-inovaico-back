import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateAppointments1630884190530 implements MigrationInterface {
  
    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'patient_id',
            type: 'uuid',
          },
          {
            name: 'consultation_date',
            type: 'timestamp'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          }
        ],
        foreignKeys: [
          {
            name: 'AppointmentsPatient',
            columnNames: ['patient_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'patients',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        ]
      })
    )
  }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('appointments');
    }

}
