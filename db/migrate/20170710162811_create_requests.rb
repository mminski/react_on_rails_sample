class CreateRequests < ActiveRecord::Migration[5.0]
  def change
    create_table :requests do |t|
      t.integer :status
      t.date :start_date
      t.date :end_date
      t.integer :employee_id

      t.timestamps
    end
  end
end
