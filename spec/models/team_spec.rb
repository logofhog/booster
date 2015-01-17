require 'spec_helper'

describe Team do
  let(:school) {School.new}
  let(:wishlist) {WishList.new}
  let(:team) {Team.new(:school => school, :wishlist => wishlist)}


  it 'makes a team' do
    expect(team).to be_a(Team)
  end

  it 'team has a school' do
    expect(team.school).to eq(school)
  end

  it 'has a wishlist' do
    expect(team.wishlist).to eq(wishlist)
  end

  it 'requires name' do
    expect(Team.new.valid?).to eq(false)
    expect(Team.new(:name => 'test school').valid?).to eq(true)
  end
end
