class Holiday < ApplicationRecord

  def change
    create_table "holidays", force: :cascade do |t|
      t.string "name"
      t.string "description"
      t.string "date"
      t.string "type"
      t.string "locations"
      t.string "states"
      t.timestamps
    end
    end

end
