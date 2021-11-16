class RenameColumnInFavorites < ActiveRecord::Migration[6.1]
  def change
    rename_column :favorites, :media_id, :movie_id
  end
end
