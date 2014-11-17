class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.integer :price
      t.integer :wanted
      t.integer :bought
      t.belongs_to :wish_list
      t.timestamps
    end
  end
end
