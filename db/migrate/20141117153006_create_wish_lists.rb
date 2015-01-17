class CreateWishLists < ActiveRecord::Migration
  def change
    create_table :wish_lists do |t|
      t.belongs_to :team
      t.timestamps
    end
  end
end
