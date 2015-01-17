require 'spec_helper'

describe Item do
  before do
    @item = FactoryGirl.create :item
  end
  
  it 'makes an item' do
    expect(@item).to be_a(Item)
  end

  it 'validates name and wanted' do
    expect(@item.valid?).to eq(true)
    expect(Item.new(:wanted => 4).valid?).to eq(false)
    expect(Item.new(:name => 'soccer balls').valid?).to eq(false)
  end
end
