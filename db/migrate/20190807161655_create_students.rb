class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string :name
      t.string :partner
      t.string :location

      t.timestamps
    end
  end
end
