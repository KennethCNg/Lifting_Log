# == Schema Information
#
# Table name: logs
#
#  id         :integer          not null, primary key
#  food       :string           not null
#  carb       :integer          not null
#  fat        :integer          not null
#  protein    :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Log < ApplicationRecord
    validates :food, :carb, :fat, :protein, :author_id, presence: true
    validates_numericality_of :carb, :fat, :protein, :only_integer => true, :greater_than_or_equal_to => 0
    validate :food_validation

    belongs_to(
    :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'
    )

    private

    def food_validation
        food.each_char do |ch|
            if ch.ord == 32
                next
            elsif !(ch.ord >= 97 && ch.ord <= 122) || (ch.ord >= 65 && ch.ord <= 90)
                return errors.add(:food, "cannot contain numbers or symbols")
            end
        end
    end
    
end
