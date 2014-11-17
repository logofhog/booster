require 'spec_helper'

describe WishList do
  before do
    @wish_list = FactoryGirl.create :wish_list
    @item = FactoryGirl.create :item
  end

  it 'make a wishlist' do
    expect(WishList.new()).to be_a(WishList)
  end

  it 'can have items' do
    @wish_list.items << @item
    expect(@wish_list.items.to_a).to eql([@item])
  end
end
