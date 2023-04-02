class CurrentUserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :profile_pic, :bio, :followees_number, :followers_number, :campsites_number, :not_following
  has_many :followers
  has_many :followees
  has_many :campsites
  has_many :states

  def followees_number
    object.followees.length
  end

  def followers_number
    object.followers.length
  end

  def campsites_number
    object.campsites.length
  end

end
