class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :profile_pic, :bio, :not_following
  has_many :followers
  has_many :followees
  has_many :campsites
end
