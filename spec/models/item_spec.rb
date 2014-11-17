require 'spec_helper'

describe Item do
  before do
    @item = FactoryGirl.create :item
  end
  
  it 'makes an item' do
    expect(@item).to be_a(Item)
  end
end
