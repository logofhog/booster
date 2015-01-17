class Team < ActiveRecord::Base
  belongs_to :school
  validates_presence_of :name
end
