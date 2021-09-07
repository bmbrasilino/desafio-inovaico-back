import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAppointmentNotes1630936083363 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'appointment_notes',
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
              name: 'appointment_id',
              type: 'uuid',
            },
            {
              name: 'annotation',
              type: 'varchar'
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            }
          ],
          foreignKeys: [
            {
              name: 'AppointmentsNotesPatient',
              columnNames: ['patient_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'patients',
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE'
            },
            {
              name: 'AppointmentsNotesAppointment',
              columnNames: ['appointment_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'appointments',
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE'
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('appointment_notes');
    }
}
