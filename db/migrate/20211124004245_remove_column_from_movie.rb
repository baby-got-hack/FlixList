class RemoveColumnFromMovie < ActiveRecord::Migration[6.1]
  def change
    remove_column :movies, :movie
  end
end
