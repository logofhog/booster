class WishList < ActiveRecord::Base
  belongs_to :team
  has_many :items
end
