class User < ApplicationRecord

    has_many :followed_users, foreign_key: :follower_id, class_name: "Relationship"
    has_many :followees, through: :followed_users

    has_many :following_users, foreign_key: :followee_id, class_name: "Relationship"
    has_many :followers, through: :following_users

    has_many :campsites

    has_many :states, -> { distinct }, through: :campsites
    
    has_secure_password

    validates :username, presence: true, uniqueness: { case_sensitive: true }, length: { in: 4..15 }

    validates :first_name, presence: true, format: { with: /\A[a-zA-Z]+\z/,
    message: "only allows letters" }

    validates :last_name, presence: true, format: { with: /\A[a-zA-Z]+\z/,
    message: "only allows letters" }

    validates :bio, length: { maximum: 1000,
    too_long: "%{count} characters is the maximum allowed" }, allow_blank: true

    def not_following
        @following = self.followees.select(:id, :username, :first_name, :last_name, :profile_pic, :bio) 
        @users = User.all.select(:id, :username, :first_name, :last_name, :profile_pic, :bio) 
        @not_following = @users - @following-[self]
    end

end
