class CreateStudentAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :student_accounts do |t|
      t.string :firstname
      t.string :lastname
      t.string :password_digest

      t.timestamps
    end
  end
end
