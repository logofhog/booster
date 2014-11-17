require 'spec_helper'

describe School do

  before do
    @school = FactoryGirl.create :school
    @wish_list =  FactoryGirl.create :wish_list
    @school.wish_list = @wish_list
  end

  it 'makes a school' do
    expect(@school).to be_a(School)
  end

  it 'can have a wish-list' do
    expect(@school.wish_list).to be_a(WishList)
  end
end
