class ChangeColumnInMovies < ActiveRecord::Migration[6.1]
  def change
    change_column :movies, :release_date, 'integer USING CAST(release_date AS integer)'
    change_column :movies, :runtime, 'integer USING CAST(runtime AS integer)' 
  end
end
