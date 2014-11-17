class CreateWishLists < ActiveRecord::Migration
  def change
    create_table :wish_lists do |t|
      t.belongs_to :school
      t.string :item
      t.integer :bought
      t.integer :wanted
      t.timestamps
    end
  end
end
