class RenameColumnInMovies < ActiveRecord::Migration[6.1]
  def change
    rename_column :movies, :release, :release_date
  end
end
