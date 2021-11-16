class RemoveColumnFromMovies < ActiveRecord::Migration[6.1]
  def change
    remove_column :movies, :_date
  end
end
