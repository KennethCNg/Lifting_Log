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

require 'test_helper'

class LogTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
