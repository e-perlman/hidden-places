class CurrentUserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :profile_pic, :bio, :not_following
  has_many :followers
  has_many :followees
  has_many :campsites

  def not_following
    @following = object.followees
    @users = User.all
    @not_following = @users - @following-[object]
end

end
