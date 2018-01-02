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

  
    belongs_to(
    :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'
    )

end
