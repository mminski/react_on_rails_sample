class AddItemsToEmployee < ActiveRecord::Migration[5.0]
  def change
      change_table :employees do |t|
        t.string :name, :department
        t.integer :avd, :tvd
        t.references :supervisor, index: true
      end
  end
end
