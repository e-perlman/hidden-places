class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :profile_pic, :bio
  has_many :followers
  has_many :followees
end
