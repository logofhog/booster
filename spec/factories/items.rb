# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :item do
    name "weight machine"
    price 500
    wanted 5
    bought 2
  end
end
