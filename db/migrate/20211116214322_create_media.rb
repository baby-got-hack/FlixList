class CreateMedia < ActiveRecord::Migration[6.1]
  def change
    create_table :media do |t|
      t.string :title
      t.string :genre
      t.string :release
      t.string :_date
      t.string :runtime
      t.boolean :movie
      t.boolean :tv_show
      t.integer :seasons
      t.string :img

      t.timestamps
    end
  end
end
