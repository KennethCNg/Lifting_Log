# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 8, allow_nil: true }
    attr_reader :password
    after_initialize :ensure_session_token
  
    has_many(
      :logged_foods,
      primary_key: :id,
      foreign_key: :author_id,
      class_name: 'Log'
    )
  
    def self.find_user_by_credentials(username, password)
      user = User.find_by(username: username)
      user && BCrypt::Password.new(user.password_digest).is_password?(password) ? user : nil
    end
  
    def self.generate_session_token
      SecureRandom::urlsafe_base64(16)
    end
  
    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password);
    end
  
    def ensure_session_token
      self.session_token ||= User.generate_session_token
    end
  
    def reset_session_token!
      self.session_token = User.generate_session_token
      self.save!
      self.session_token
    end
end
