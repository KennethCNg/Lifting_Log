class CreateLogs < ActiveRecord::Migration[5.1]
  def change
    create_table :logs do |t|
      t.string :name, null: false
      t.integer :weight, null: false
      t.integer :carb, null: false
      t.integer :fat, null: false
      t.integer :protein, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
      add_index :logs, :author_id
  end
end
