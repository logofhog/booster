require 'spec_helper'

describe School do

  before do
    @school = FactoryGirl.create :school
    @team=  FactoryGirl.create :team
    @school.teams << @team
  end

  it 'makes a school' do
    expect(@school).to be_a(School)
  end

  it 'can have a wish-list' do
    expect(@school.teams).to eq([@team])
  end
end
