class AddFavoriteToHolidays < ActiveRecord::Migration[5.2]
  def change
    add_column :holidays, :favorite, :boolean, :default => false
  end
end
