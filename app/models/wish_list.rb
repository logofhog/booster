class WishList < ActiveRecord::Base
  belongs_to :school
  has_many :items
end
