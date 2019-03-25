class CreateHolidays < ActiveRecord::Migration[5.2]
  def change
    create_table :holidays do |t|
      t.string :name
      t.string :description
      t.string :date
      t.string :holiday_type
      t.string :locations
      t.string :states

      t.timestamps
    end
  end
end
