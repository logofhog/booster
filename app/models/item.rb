class Item < ActiveRecord::Base
  belongs_to :wish_list
  validates_presence_of :name, :wanted
end
