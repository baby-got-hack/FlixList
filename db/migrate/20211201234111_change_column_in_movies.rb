class ChangeColumnInMovies < ActiveRecord::Migration[6.1]
  def change
    change_column :movies, :release_date:integer
    change_column :movies, :runtime, :integer  
  end
end
